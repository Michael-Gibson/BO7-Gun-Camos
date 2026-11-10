document.addEventListener('DOMContentLoaded', () => {
    // =========================
    // APP CONFIG
    // =========================
    // Most tracker data now lives in camo-challenges.js so you only have one
    // main place to edit weapons, camo names, mode labels, and challenges.
    const appData = window.BO7_TRACKER_DATA || {};

    const gunTypeArray = appData.gunTypes || [];
    const weapons = appData.weapons || {};
    const weaponsByType = appData.weaponsByType || Object.fromEntries(
        Object.entries(weapons).map(([type, guns]) => [type, Object.keys(guns)])
    );
    const gunsArray = gunTypeArray.map(type => weaponsByType[type] || []);
    const modeOrder = appData.modeOrder || ['campaign', 'multiplayer', 'zombies', 'warzone'];
    const modeLabels = appData.modeLabels || {};

    // Fast lookup so the UI can find a gun without caring which category it is in.
    const weaponLookup = Object.values(weapons).reduce((lookup, gunsInType) => {
        Object.entries(gunsInType).forEach(([gunName, gunData]) => {
            lookup[gunName] = gunData;
        });
        return lookup;
    }, {});

    const getGunCamos = (mode, gunName) => {
        return weaponLookup?.[gunName]?.[mode] || [];
    };

    const getCamoName = (mode, gunName, camoIndex) => {
        return getGunCamos(mode, gunName)[camoIndex]?.name || '';
    };

    const getChallengeText = (mode, gunName, camoIndex) => {
        return getGunCamos(mode, gunName)[camoIndex]?.challenge || '';
    };

    // =========================
    // BASIC DOM REFERENCES
    // =========================
    const gunListContainer = document.getElementById('gunListContainer');

    // Create left and right panels inside gunListContainer
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('left-panel');

    const rightPanel = document.createElement('div');
    rightPanel.classList.add('right-panel');

    gunListContainer.appendChild(leftPanel);
    gunListContainer.appendChild(rightPanel);

    // Tabs container above the panels
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabs-container');
    document.body.insertBefore(tabsContainer, gunListContainer);

    // Reset button (in header)
    const resetButton = document.getElementById('resetProgressBtn');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            const confirmed = window.confirm('Reset ALL camo progress and settings?');
            if (!confirmed) return;

            // Remove only our app-related localStorage keys
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (
                    key.startsWith('camo-') ||
                    key === 'currentMode' ||
                    key === 'currentView' ||
                    key === 'currentGun'
                ) {
                    localStorage.removeItem(key);
                }
            });

            // Reload page to re-init a clean state
            window.location.reload();
        });
    }

    // =========================
    // STATE & HELPERS
    // =========================

    // Last-used mode, view, and gun are all restored from localStorage
    let currentMode = localStorage.getItem('currentMode') || 'zombies';
    if (!modeOrder.includes(currentMode)) currentMode = 'zombies';

    let currentView = localStorage.getItem('currentView') || 'detail'; // 'detail' or 'stats'
    if (!['detail', 'stats'].includes(currentView)) currentView = 'detail';

    let currentGun = localStorage.getItem('currentGun') || null;

    const tabButtons = {};
    const gunNavItems = {}; // gunName -> <li> element in left panel
    const gunTypeSummaries = []; // index -> <summary> element
    let statsTabButton = null;

    const getFirstGun = () => {
        return gunsArray[0] && gunsArray[0][0] ? gunsArray[0][0] : null;
    };

    // Build a safe checkbox ID
    const getCheckboxId = (gunName, mode, index) => {
        const safeGun = gunName
            .replace(/\s+/g, '_')
            .replace(/[^a-zA-Z0-9_]/g, '');
        return `camo-${mode}-${safeGun}-${index}`;
    };

    const saveCheckboxState = (id, isChecked) => {
        localStorage.setItem(id, isChecked ? 'true' : 'false');
    };

    const getCheckboxState = (id) => localStorage.getItem(id) === 'true';

    const saveViewState = () => {
        localStorage.setItem('currentView', currentView);
        if (currentGun) {
            localStorage.setItem('currentGun', currentGun);
        }
    };

    // Count how many camos are completed for a given gun & mode (used in stats)
    const getGunCompletionCount = (gunName, mode) => {
        const camoList = getGunCamos(mode, gunName);
        if (!camoList.length) return 0;
        let done = 0;
        camoList.forEach((_, i) => {
            const id = getCheckboxId(gunName, mode, i);
            if (getCheckboxState(id)) done++;
        });
        return done;
    };

    // Highlight which mode tab is active
    const updateActiveTab = () => {
        modeOrder.forEach(mode => {
            if (tabButtons[mode]) {
                tabButtons[mode].classList.toggle(
                    'active',
                    mode === currentMode && currentView === 'detail'
                );
            }
        });
    };

    // Highlight stats tab when needed
    const updateStatsTabActive = () => {
        if (statsTabButton) {
            statsTabButton.classList.toggle('active', currentView === 'stats');
        }
    };

    // Compute how many camos are checked in order (from the first camo) for a gun in currentMode
    const getGunTier = (gunName) => {
        const camoList = getGunCamos(currentMode, gunName);
        if (!camoList.length) return 0;

        let tier = 0;
        for (let i = 0; i < camoList.length; i++) {
            const id = getCheckboxId(gunName, currentMode, i);
            if (getCheckboxState(id)) {
                tier = i + 1;
            } else {
                break;
            }
        }
        return tier;
    };

    // Mark a single gun's left-nav item based on contiguous camo progress
    // 1–4 in order  -> normal
    // 5 in order    -> gold (gun-progress-5)
    // 6 in order    -> diamond/silver (gun-progress-6)
    // 7 in order    -> purple (gun-progress-7)
    // 8 in order    -> green (checked-off)
    const updateGunCompletion = (gunName) => {
        const navItem = gunNavItems[gunName];
        if (!navItem) return;

        const camoList = getGunCamos(currentMode, gunName);
        if (!camoList.length) {
            navItem.classList.remove('gun-progress-5', 'gun-progress-6', 'gun-progress-7', 'checked-off');
            return;
        }

        // Clear any previous milestone classes
        navItem.classList.remove('gun-progress-5', 'gun-progress-6', 'gun-progress-7', 'checked-off');

        const tier = getGunTier(gunName);

        // Apply visual state only for 5th–8th milestones
        if (tier >= 8) {
            navItem.classList.add('checked-off');
        } else if (tier === 7) {
            navItem.classList.add('gun-progress-7');
        } else if (tier === 6) {
            navItem.classList.add('gun-progress-6');
        } else if (tier === 5) {
            navItem.classList.add('gun-progress-5');
        }
    };

    // Update each gun type header (summary) based on all guns under it
    // Header only upgrades when *every* gun in that type reaches that tier.
    const updateGunTypeCompletion = () => {
        gunTypeSummaries.forEach((summary, typeIndex) => {
            if (!summary) return;

            summary.classList.remove('gun-type-progress-5', 'gun-type-progress-6', 'gun-type-progress-7', 'checked-off');

            const guns = gunsArray[typeIndex];
            if (!guns || guns.length === 0) return;

            // Find the minimum tier among all guns in this type
            let minTier = Infinity;
            guns.forEach(gunName => {
                const tier = getGunTier(gunName);
                if (tier < minTier) minTier = tier;
            });
            if (!isFinite(minTier)) minTier = 0;

            if (minTier >= 8) {
                summary.classList.add('checked-off');             // green
            } else if (minTier === 7) {
                summary.classList.add('gun-type-progress-7');     // purple
            } else if (minTier === 6) {
                summary.classList.add('gun-type-progress-6');     // diamond
            } else if (minTier === 5) {
                summary.classList.add('gun-type-progress-5');     // gold
            }
        });
    };

    const updateAllGunCompletion = () => {
        Object.keys(gunNavItems).forEach(updateGunCompletion);
        updateGunTypeCompletion();
    };

    // =========================
    // RIGHT PANEL: DETAIL VIEW
    // =========================
    const renderCamoPanel = (gunName) => {
        currentView = 'detail';
        saveViewState();

        rightPanel.innerHTML = '';
        updateActiveTab();
        updateStatsTabActive();

        if (!gunName) {
            const placeholder = document.createElement('p');
            placeholder.classList.add('placeholder-text');
            placeholder.textContent = 'Select a gun on the left to see its camos.';
            rightPanel.appendChild(placeholder);
            return;
        }

        const header = document.createElement('div');
        header.classList.add('right-panel-header');

        const title = document.createElement('h2');
        title.textContent = gunName;
        header.appendChild(title);

        const subtitle = document.createElement('p');
        subtitle.textContent = `${modeLabels[currentMode]} camos`;
        header.appendChild(subtitle);

        rightPanel.appendChild(header);

        const camoListEl = document.createElement('div');
        camoListEl.classList.add('camo-list');

        const camoList = getGunCamos(currentMode, gunName);

        camoList.forEach((camo, i) => {
            const camoName = camo.name;
            const row = document.createElement('div');
            row.classList.add('camo-row');

            const checkboxId = getCheckboxId(gunName, currentMode, i);
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = checkboxId;
            checkbox.checked = getCheckboxState(checkboxId);

            // Wrapper for camo name + challenge text
            const info = document.createElement('div');
            info.classList.add('camo-info');

            const label = document.createElement('label');
            label.setAttribute('for', checkboxId);
            label.textContent = camoName;

            const challengeText = getChallengeText(currentMode, gunName, i);

            if (challengeText) {
                const challengeEl = document.createElement('p');
                challengeEl.classList.add('camo-challenge');
                challengeEl.textContent = challengeText;
                info.appendChild(label);
                info.appendChild(challengeEl);
            } else {
                info.appendChild(label);
            }

            checkbox.addEventListener('change', () => {
                saveCheckboxState(checkboxId, checkbox.checked);
                updateGunCompletion(gunName);
                updateGunTypeCompletion();
                updateProgressText();
            });

            row.appendChild(checkbox);
            row.appendChild(info);
            camoListEl.appendChild(row);
        });

        rightPanel.appendChild(camoListEl);

        // Progress text (e.g. "3/8 camos completed")
        const progress = document.createElement('p');
        progress.classList.add('progress-text');
        rightPanel.appendChild(progress);

        const updateProgressText = () => {
            const camoList = getGunCamos(currentMode, gunName);
            let done = 0;
            camoList.forEach((_, i) => {
                const id = getCheckboxId(gunName, currentMode, i);
                if (getCheckboxState(id)) done++;
            });
            progress.textContent = `${done}/${camoList.length} camos completed`;
        };

        updateProgressText();
    };

    // =========================
    // RIGHT PANEL: STATS VIEW
    // =========================
    const renderStatsPanel = () => {
        currentView = 'stats';
        saveViewState();

        rightPanel.innerHTML = '';
        updateActiveTab();
        updateStatsTabActive();

        const firstGun = getFirstGun();
        const camoList = firstGun ? getGunCamos(currentMode, firstGun) : [];
        const totalGuns = gunsArray.reduce((acc, arr) => acc + arr.length, 0);
        const totalCamos = camoList.length;
        const totalBoxes = totalGuns * totalCamos;

        let totalDone = 0;
        gunsArray.forEach(list => {
            list.forEach(gunName => {
                getGunCamos(currentMode, gunName).forEach((_, i) => {
                    const id = getCheckboxId(gunName, currentMode, i);
                    if (getCheckboxState(id)) totalDone++;
                });
            });
        });

        const header = document.createElement('div');
        header.classList.add('right-panel-header');

        const title = document.createElement('h2');
        title.textContent = `${modeLabels[currentMode]} Stats`;
        header.appendChild(title);

        const percentOverall = totalBoxes === 0 ? 0 : ((totalDone / totalBoxes) * 100).toFixed(1);
        const subtitle = document.createElement('p');
        subtitle.textContent = `Overall completion: ${totalDone}/${totalBoxes} (${percentOverall}%)`;
        header.appendChild(subtitle);

        rightPanel.appendChild(header);

        const overallLine = document.createElement('p');
        overallLine.classList.add('overall-progress');
        overallLine.textContent = `You have completed ${totalDone} camo challenges out of ${totalBoxes} possible for ${modeLabels[currentMode]}.`;
        rightPanel.appendChild(overallLine);

        // ----- Per-camo stats -----
        const perCamoSection = document.createElement('div');
        perCamoSection.classList.add('stats-section');

        const perCamoHeading = document.createElement('h3');
        perCamoHeading.textContent = 'Camo progress (per camo, across all guns)';
        perCamoSection.appendChild(perCamoHeading);

        const perCamoTable = document.createElement('table');
        perCamoTable.classList.add('stats-table');

        const perCamoThead = document.createElement('thead');
        perCamoThead.innerHTML = `
            <tr>
                <th>Camo</th>
                <th>Guns Completed</th>
                <th>Completion</th>
            </tr>
        `;
        perCamoTable.appendChild(perCamoThead);

        const perCamoTbody = document.createElement('tbody');

        camoList.forEach((camo, idx) => {
            const camoName = camo.name;
            let completedGuns = 0;
            gunsArray.forEach(list => {
                list.forEach(gunName => {
                    const id = getCheckboxId(gunName, currentMode, idx);
                    if (getCheckboxState(id)) completedGuns++;
                });
            });

            const row = document.createElement('tr');
            const percent = totalGuns === 0 ? 0 : ((completedGuns / totalGuns) * 100).toFixed(1);

            row.innerHTML = `
                <td>${camoName}</td>
                <td>${completedGuns}/${totalGuns}</td>
                <td>${percent}%</td>
            `;
            perCamoTbody.appendChild(row);
        });

        perCamoTable.appendChild(perCamoTbody);
        perCamoSection.appendChild(perCamoTable);
        rightPanel.appendChild(perCamoSection);

        // ----- Per-gun stats -----
        const perGunSection = document.createElement('div');
        perGunSection.classList.add('stats-section');

        const perGunHeading = document.createElement('h3');
        perGunHeading.textContent = 'Gun progress (per gun, in this mode)';
        perGunSection.appendChild(perGunHeading);

        const perGunTable = document.createElement('table');
        perGunTable.classList.add('stats-table');

        const perGunThead = document.createElement('thead');
        perGunThead.innerHTML = `
            <tr>
                <th>Gun</th>
                <th>Camos Completed</th>
                <th>Completion</th>
            </tr>
        `;
        perGunTable.appendChild(perGunThead);

        const perGunTbody = document.createElement('tbody');

        gunTypeArray.forEach((gunType, typeIndex) => {
            // Section row for gun type
            const sectionRow = document.createElement('tr');
            sectionRow.classList.add('stats-section-row');

            const sectionCell = document.createElement('td');
            sectionCell.colSpan = 3;
            sectionCell.textContent = gunType;
            sectionRow.appendChild(sectionCell);
            perGunTbody.appendChild(sectionRow);

            gunsArray[typeIndex].forEach(gunName => {
                const completed = getGunCompletionCount(gunName, currentMode);
                const percent = totalCamos === 0 ? 0 : ((completed / totalCamos) * 100).toFixed(1);

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${gunName}</td>
                    <td>${completed}/${totalCamos}</td>
                    <td>${percent}%</td>
                `;
                perGunTbody.appendChild(row);
            });
        });

        perGunTable.appendChild(perGunTbody);
        perGunSection.appendChild(perGunTable);
        rightPanel.appendChild(perGunSection);
    };

    // Choose which view to render based on currentView
    const updateView = () => {
        if (currentView === 'stats') {
            renderStatsPanel();
        } else {
            if (!currentGun) currentGun = getFirstGun();
            renderCamoPanel(currentGun);

            // ensure nav highlight matches currentGun
            Object.values(gunNavItems).forEach(item => {
                item.classList.toggle('selected', item.dataset.gun === currentGun);
            });
        }
    };

    // =========================
    // SELECTING A GUN
    // =========================
    const selectGun = (gunName) => {
        currentGun = gunName;
        currentView = 'detail';
        saveViewState();
        updateStatsTabActive();

        Object.values(gunNavItems).forEach(item => {
            item.classList.toggle('selected', item.dataset.gun === gunName);
        });

        renderCamoPanel(gunName);
    };

    // =========================
    // CHANGING MODE (TABS)
    // =========================
    const applyMode = (mode) => {
        currentMode = mode;
        localStorage.setItem('currentMode', currentMode);
        updateAllGunCompletion();
        updateView();
    };

    // =========================
    // BUILD LEFT PANEL (GUN LIST)
    // =========================
    const buildLeftPanel = () => {
        leftPanel.innerHTML = '';
        gunTypeArray.forEach((gunType, typeIndex) => {
            const typeDetails = document.createElement('details');
            typeDetails.classList.add('gun-type-panel');
            if (typeIndex === 0) typeDetails.open = true; // open first by default

            const typeSummary = document.createElement('summary');
            typeSummary.classList.add('gun-type-summary');
            typeSummary.textContent = gunType;
            typeDetails.appendChild(typeSummary);

            gunTypeSummaries[typeIndex] = typeSummary;

            const gunList = document.createElement('ul');
            gunList.classList.add('gun-list');

            gunsArray[typeIndex].forEach(gunName => {
                const li = document.createElement('li');
                li.classList.add('gun-list-item');
                li.textContent = gunName;
                li.dataset.gun = gunName;

                li.addEventListener('click', () => selectGun(gunName));

                gunNavItems[gunName] = li;
                gunList.appendChild(li);
            });

            typeDetails.appendChild(gunList);
            leftPanel.appendChild(typeDetails);
        });
    };

    // =========================
    // BUILD MODE TABS + STATS TAB
    // =========================
    const buildTabs = () => {
        tabsContainer.innerHTML = '';

        // Mode tabs (Multiplayer, Warzone, Zombies, Co-op Campaign)
        modeOrder.forEach(mode => {
            const btn = document.createElement('button');
            btn.classList.add('toggle-button');
            btn.textContent = modeLabels[mode];
            btn.addEventListener('click', () => {
                currentView = 'detail'; // switch back to detail view when changing mode
                saveViewState();
                applyMode(mode);
            });
            tabsContainer.appendChild(btn);
            tabButtons[mode] = btn;
        });

        // Stats tab
        statsTabButton = document.createElement('button');
        statsTabButton.classList.add('toggle-button', 'secondary-toggle');
        statsTabButton.textContent = 'Stats';
        statsTabButton.addEventListener('click', () => {
            currentView = 'stats';
            saveViewState();
            renderStatsPanel();
        });
        tabsContainer.appendChild(statsTabButton);

        updateActiveTab();
        updateStatsTabActive();
    };

    // =========================
    // INITIALIZE
    // =========================
    buildLeftPanel();
    buildTabs();
    updateAllGunCompletion();

    // Make sure we have a gun for detail view
    if (!currentGun) {
        currentGun = getFirstGun();
    }

    // Render saved mode + view
    applyMode(currentMode);
});
