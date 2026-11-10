# BO7 Camo Tracker

A lightweight, browser-based tracker for grinding weapon camos in **Call of Duty: Black Ops 7**. Check off camos as you unlock them, see every challenge's requirements at a glance, and watch your weapon list light up as you reach Gold, Diamond and beyond.

No build step, no server, no dependencies — just open `index.html`.

## Features

- **All four camo modes** — Co-op & Endgame (Campaign), Multiplayer, Zombies and Warzone, each with its own camo names and challenges.
- **64 weapons across 10 categories** — Assault Rifles, SMGs, Shotguns, LMGs, Marksman Rifles, Sniper Rifles, Pistols, Launchers, Specials and Melee (full list [below](#weapons-included)).
- **Challenge text inline** — each camo shows exactly what you need to do to unlock it.
- **Progress colors on weapons** — a gun's name in the sidebar changes color as you complete camos *in order*:

  | Camos completed in order | Color |
  | --- | --- |
  | 1–4 | Default |
  | 5 | Gold |
  | 6 | Diamond / silver |
  | 7 | Purple |
  | 8 (all) | Green |

- **Category progress** — a weapon category header takes on a color only once *every* gun in that category has reached that tier.
- **Stats view** — overall completion for the current mode, plus per-camo and per-gun breakdowns.
- **Saves automatically** — progress, the selected mode, view and gun are stored in your browser's `localStorage`, so they're still there when you come back.
- **Reset button** — clears all tracker progress, with a confirmation prompt to prevent accidental clicks.

## Getting started

1. Clone or download this repository.
2. Open `index.html` in any modern browser.

That's it. If your browser restricts local files, you can serve the folder instead:

```bash
npx serve .
# or
python -m http.server
```

## Usage

- Pick a mode from the tabs at the top (Co-op & Endgame, Multiplayer, Zombies, Warzone).
- Expand a weapon category in the left panel and click a gun.
- Tick the checkbox next to each camo as you unlock it. The `x/8 camos completed` counter and sidebar colors update immediately.
- Click **Stats** to see your overall completion for the current mode.
- Click **Reset** in the top right to wipe all progress (you'll be asked to confirm).

> Progress is stored per browser. Clearing site data, switching browsers or using a private window will start you fresh.

## Weapons included

| Category | Count | Weapons |
| --- | :-: | --- |
| Assault Rifles | 14 | M15 MOD O, AK-27, MXR-17, X9 MAVERICK, DS20 MIRAGE, PEACEKEEPER MK1, MADDOX RFB, EGRT-17, VOYAK KT-3, MK35 ISR, VX COMPACT, AN-94, FG42, TR51 PARA |
| SMGs | 13 | RYDEN 45K, RK-9, RAZOR 9MM, DRAVEC 45, CARBON 57, MPC-25, KOGOT-7, STURMWOLF 45, REV-46, VST, CBRS-3, GREMLIN, VMP |
| Shotguns | 4 | M10 BREACHER, ECHO 12, AKITA, SG-12 |
| LMGs | 4 | MK.78, XM325, SOKOL 545, MAMMOTH |
| Marksman Rifles | 5 | M8A1, WARDEN 308, M34 NOVALINE, SWORDFISH A1, KRS-7.62 |
| Sniper Rifles | 5 | VS RECON, SHADOW SK, XR-3 ION, HAWKER HX, STRIDER 300 |
| Pistols | 4 | JÄGER 45, VELOX 5.7, CODA 9, 1911 |
| Launchers | 2 | AAROW 109, A.R.C. M1 |
| Specials | 5 | NX RAVAGER, GDL HAVOC, SIREN, GRIMHAWK, ROC 20MM |
| Melee | 8 | KNIFE, FLATLINE MK.II, BALLISTIC KNIFE, H311-SAW, KATANA, EXECUTIONER'S DUET, MACE, ARCBLADE |

### What's new in this version

- **4 new weapons:** TR51 PARA (Assault Rifle), VMP (SMG), ROC 20MM (Special) and ARCBLADE (Melee), each with camos and challenges for all four modes.
- **New challenges** to support them: *Get 300 armored zombie eliminations*, *With the tactical laser equipped: Kill 15 zombies without reloading 30 times* (Zombies) and *Get 250 kills* (Co-op & Endgame).

Existing progress is unaffected — the new weapons simply start at 0/8.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell; loads the data file, then the app script. |
| `camo-challenges.js` | All tracker data: weapon categories, modes, mode labels, challenge text and every gun's camo list. |
| `script.js` | App logic: builds the sidebar and tabs, renders the camo and stats views, and saves progress. |
| `styles.css` | Styling, including the Gold / Diamond / Purple / Green progress colors. |

## Editing the data

Everything about weapons and camos lives in `camo-challenges.js`, so you rarely need to touch `script.js`.

- **Challenge text** is defined once in the `CHALLENGES` object, grouped by mode (`C`, `MP`, `Z`, `W`). Fix a typo there and it updates everywhere it's used.
- **Weapons** live in the `weapons` object, grouped by category, then gun, then mode. Each mode is an ordered list of 8 camos:

  ```js
  "M15 MOD O": {
      multiplayer: [
          { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
          // ...7 more camos, in unlock order
      ],
      // campaign, zombies, warzone ...
  }
  ```

- **To add a gun**, add a new entry under the right category with all four modes. It appears in the sidebar automatically.
- **To add a category**, add it to `gunTypes` and to `weapons`.
- **Modes** are controlled by `modeOrder` (tab order) and `modeLabels` (tab text).

> Progress is saved under keys built from the mode, gun name and camo position (e.g. `camo-multiplayer-M15_MOD_O-0`). Renaming a gun or reordering its camos will disconnect any progress already saved for it.

## Disclaimer

This is an unofficial fan project and is not affiliated with or endorsed by Activision. Call of Duty and Black Ops are trademarks of Activision Publishing, Inc.
