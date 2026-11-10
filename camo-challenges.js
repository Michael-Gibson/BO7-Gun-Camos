// =========================
// BO7 TRACKER DATA
// Weapon data is grouped by category, then gun, then mode.
// =========================
// Edit this file when you need to add weapons, rename modes, rename camos,
// or change camo challenge text. The app logic lives in script.js.

const gunTypes = [
    "ASSAULT RIFLES",
    "SMGS",
    "SHOTGUNS",
    "LMGS",
    "MARKSMAN RIFLES",
    "SNIPER RIFLES",
    "PISTOLS",
    "LAUNCHERS",
    "SPECIALS",
    "MELEE"
];

const modeOrder = ["campaign", "multiplayer", "zombies", "warzone"];

const modeLabels = {
    multiplayer: "MULTIPLAYER",
    zombies: "ZOMBIES",
    campaign: "CO-OP & ENDGAME",
    warzone: "WARZONE"
};

// =========================
// ALL CHALLENGES USED SO FAR
// =========================
// Every challenge string lives here, including one-off/unique challenges.
// This keeps the gun camo arrays clean and makes typo fixes happen in one place.
const CHALLENGES = Object.freeze({
    // Multiplayer
    MP: Object.freeze({
        AERIAL_SCORESTREAKS_10: 'Destroy 10 aerial scorestreaks',
        DESTROY_SCORESTREAKS_VEHICLES_EQUIPMENT_10: 'Destroy 10 scorestreaks, vehicles, equipment, or field upgrades',
        DIRECT_HITS_10: 'Get 10 direct hit kills',
        DOUBLE_KILLS_10: 'Get 10 double kills',
        FIVE_ATTACHMENTS_50: 'With 5 or more attachments equipped: get 50 eliminations',
        FIVE_KILLS_NO_DYING_3: 'Get 5 kills without dying 3 times',
        FIVE_KILLS_SINGLE_MATCH_3: 'Get 5 kills in a single match 3 times',
        GUNFIGHTER_50: 'With the gunfighter wildcard equipped: get 50 eliminations while having 8 attachments',
        HEADSHOTS_80: 'Get 80 headshots',
        HEAVY_MELEE_10: 'Get 10 kills using a heavy melee attack',
        HIPFIRE_30: 'Get 30 hipfire kills',
        KILLS_80: 'Get 80 kills',
        KILLS_OR_SCORESTREAKS_50: 'Get 50 kills or scorestreak destructions',
        LONGSHOT_15: 'Get 15 long shot medals',
        MOVING_25: 'Get 25 kills while moving',
        MOVING_50: 'Get 50 kills while moving',
        NO_ATTACHMENTS_50: 'Get 50 eliminations without any attachments equipped',
        NO_DAMAGE_15: 'Get a kill without taking any damage 15 times',
        NO_DAMAGE_25: 'Get a kill without taking any damage 25 times',
        NO_DAMAGE_30: 'Get 30 kills without taking any damage',
        NO_DAMAGE_30_2: 'Get a kill without taking any damage 30 times',
        OBJECTIVE_15: 'Get 15 objective kills',
        OBJECTIVE_30: 'Get 30 objective kills',
        ONE_SHOT_30: 'Get 30 one shot kills',
        ONE_SHOT_30_2: 'Get 30 one shot kills ',
        ONE_SHOT_80: 'Get 80 one shot kills',
        POINT_BLANK_80: 'Get 80 Point Blank kills',
        RELOAD_2X10: 'Get 2 kills without reloading 10 times',
        SCOPE_4X_50: 'With a 4.0x or higher magnification scope equipped: get 50 eliminations',
        SLIDE_DIVE_WALLJUMP_15: 'Get a kill while or shortly after sliding, diving, or wall-jumping 15 times',
        SPRINTING_10: 'Get 10 kills while or shortly after sprinting',
        SPRINT_30: 'Get 30 kills while or shortly after sprinting',
        SPRINT_30_2: 'Get 30 kills shortly after sprinting',
        SUPPRESSOR_50: 'Get 50 eliminations with a suppressor equipped',
        SUPPRESSOR_50_2: 'Get 50 eliminations while having a suppressor equipped',
        SUPPRESSOR_50_3: 'Get 50 eliminations with a suppressor',
        SWITCHING_WEAPONS_15: 'Get 15 kills shortly after switching weapons',
        TACTICAL_OR_SCORESTREAK_30: 'Kill an enemy affected by your tactical or non-lethal scorestreak 30 times',
        THREE_KILLS_NO_DYING_10: 'Get 3 kills without dying 10 times',
        THREE_KILLS_SINGLE_MATCH_10: 'Get 3 kills in a single match 10 times',
        TRIGGER_HOLD_2X5: 'Get 2 kills without releasing the trigger 5 times',
        UNDERBARREL_20: 'Get 20 kills with an underbarrel launcher',
        UNLOCK_TEMPEST_30: 'Unlock Tempest Camo on 30 weapons',
    }),

    // Zombies
    Z: Object.freeze({
        ARMORED_75: 'Get 75 armored zombie eliminations',
        ARMOR_T2_150: 'With tier 2 or higher armor equipped: get 150 eliminations',
        BRAIN_ROT_300: 'With brain rot ammo mod equipped: get 300 eliminations',
        CRITICALS_1000: 'Get 1000 critical kills',
        CRITS_3X5: 'Get 3 critical kills consecutively 5 times',
        CRITS_5X15: 'Get 5 critical kills rapidly 15 times',
        CRYO_FREEZE_300: 'With cryo freeze ammo mod equipped: get 300 eliminations',
        DEAD_WIRE_300: 'With dead wire ammo mod equipped: get 300 eliminations',
        DISTRACTED_10X20: 'Rapidly kill 10 zombies that are distracted 20 times',
        ELIMINATIONS_1000: 'Get 1000 eliminations',
        ELITE_ZOMBIES_10: 'Eliminate 10 Elite zombies',
        FIELD_UPGRADE_100: 'Get 100 kills while a field upgrade is active',
        FIREWORKS_30: 'Get 30 kills with fire works activations',
        FIREWORKS_300: 'Get 300 kills with fire works activations',
        FIREWORKS_75: 'Get 75 kills with fire works activations',
        HIPFIRE_300: 'Get 300 hipfire kills',
        KILLS_10_IN_3_SECONDS_15: 'Get 10 kills in 3 seconds 15 times',
        NAPALM_BURST_300: 'With napalm burst ammo mod equipped: get 300 eliminations',
        NO_DAMAGE_10X10: 'Get 10 kills without taking damage 10 times',
        NO_DAMAGE_10X15: 'Get 10 kills without taking damage 15 times',
        NO_DAMAGE_10X3: 'Get 10 kills without taking damage 3 times',
        NO_DAMAGE_10X5: 'Get 10 kills without taking damage 5 times',
        NO_DAMAGE_STREAK_20X5: 'Get 20 or more consecutive kills without taking damage 5 times',
        PACK_300: 'Get 300 eliminations while pack-a-punched',
        POINT_BLANK_1000: 'Get 1000 point blank kills',
        POINT_BLANK_300: 'Get 300 point blank kills',
        RAPID_KILLS_10X15: 'Get 10 kills rapidly 15 times',
        RARE_300: 'Get 300 eliminations at rare or higher rarity',
        RELOAD_10X15: 'Get 10 kills without reloading 15 times',
        RELOAD_10X5: 'Get 10 kills without reloading 5 times',
        SHADOW_RIFT_75: 'Get 75 kills with shadow rift activations',
        SINGLE_MATCH_500: 'Get 500 eliminations in a single match',
        SINGLE_MATCH_CRITS_300: 'Get 300 critical kills in a single match',
        TACTICAL_100: 'Kill 100 enemies affected by your tactical equipment',
        TEDD_TASK_25X15: 'Get 25 kills during a single T.E.D.D. Task 15 times',
        TWO_CRITS_ONE_SHOT_15: 'Get 2 critical kills with a single shot 15 times',
        UNLOCK_DOOMSTEEL_30: 'Unlock Doomsteel Camo on 30 weapons',
    }),

    // Campaign
    C: Object.freeze({
        ADS_50: 'Get 50 kills while aiming down sights',
        ADS_MOVING_50: 'Get 50 kills while aiming down sights and moving',
        ATTACHMENTS_8_100: 'Get 100 eliminations with 8 attachments',
        ATTACHMENTS_8_100_2: 'Get 100 eliminations with 8 attachments equipped',
        COMMAND_CENTERS_TOXIN_FIELDS_50: 'Eliminate 50 enemies inside Command Centers or Toxin Fields',
        CRITICALS_250: 'Get 250 critical kills',
        DESTROY_GUILD_EQUIPMENT_25: 'Destroy 25 guild D.A.W.G.s, sentry turrets, or drones',
        DIRECT_HITS_25: 'Get 25 kills with a direct hit',
        ELITE_ENEMIES_10: 'Eliminate 10 elite enemies',
        ENDGAME_GUILD_CHECKPOINTS_50: 'In Endgame: Eliminate 50 enemies in Guild Checkpoints',
        ENDGAME_HVTS_10: 'In Endgame: Eliminate 10 HVTs or prime targets',
        ENDGAME_HVTS_15: 'In Endgame: Eliminate 15 HVTs or prime targets',
        ENDGAME_ZONE_III_IV_100: 'In Endgame: eliminate 100 zone III or zone IV enemies',
        EXTENDED_MAG_100: 'With an extended magazine equipped: get 100 eliminations',
        FEAR_100: 'Eliminate 100 fear enemies',
        GUILDTECH_50: 'Eliminate 50 guild tech enemies',
        HIPFIRE_50: 'Get 50 hipfire kills',
        HUMAN_100: 'Eliminate 100 human enemies',
        KILLS_250: 'Get 250 kills',
        KILL_OR_DESTROY_GUILD_EQUIPMENT_100: 'Get a kill or destroy guild equipment or VTOLs 100 times',
        POINT_BLANK_250: 'Get 250 point blank kills',
        POINT_BLANK_50: 'Get 50 point blank kills',
        RAPID_KILLS_3X10: 'Get 3 kills rapidly 10 times',
        RARE_100: 'Get 100 eliminations at rare rarity or higher',
        RELEASING_TRIGGER_10_3: 'Get 3 kills without releasing the trigger 10 times',
        RELOAD_10X10: 'Get 10 kills without reloading 10 times',
        SCOPE_4X_100: 'With a 4.0x or higher magnification scope equipped: get 100 eliminations',
        SLIDE_DIVE_WALLJUMP_25: 'Get 25 kills shortly after sliding, diving, or wall-jumping',
        SPECIAL_ENEMIES_20: 'Eliminate 20 special enemies',
        SPRINT_10: 'Get 10 kills shortly after sprinting',
        SPRINT_50: 'Get 50 kills shortly after sprinting',
        SUPPRESSOR_ATTACHMENT_100: 'With a suppressor attachment equipped: get 100 eliminations',
        SWITCHING_WEAPONS_25: 'Get 25 kills shortly after switching weapons',
        TACTICAL_LASER_50: 'With the tactical laser equipped: get 50 kills in the tactical stance',
        THREE_WITH_SAME_SHOT_10: 'Kill 3 enemies with the same shot 10 times',
        UNLOCK_CHROMA_FLUX_30: 'Unlock Chroma Flux Camo on 30 weapons',
    }),

    // Warzone
    W: Object.freeze({
        ADS_3: 'Get 3 eliminations while aiming down sights',
        ADS_5: 'Get 5 eliminations while aiming down sights',
        CROUCHED_5: 'Get 5 kills while crouched',
        DESTROY_VEHICLES_5: 'Destroy 5 vehicles',
        ELIMINATIONS_100: 'Get 100 eliminations',
        FIVE_KILLS_NO_DYING_2: 'Get 5 kills without dying 2 times',
        FIVE_KILLS_NO_DYING_3: 'Get 5 kills without dying 3 times',
        FIVE_KILLS_NO_DYING_5: 'Get 5 kills without dying 5 times',
        HEADSHOT_5: 'Get 5 headshot kills',
        HIPFIRE_5: 'Get 5 hipfire kills',
        KILLSTREAK_ACTIVE_2: 'Get 2 kills while your killstreak is active',
        KILLS_OR_VEHICLES_5: 'Get 5 kills or vehicle destructions',
        MOVING_2: 'Get 2 kills while moving',
        MOVING_3: 'Get 3 eliminations while moving',
        MOVING_5: 'Get 5 eliminations while moving',
        MOVING_5_KILLS: 'Get 5 kills while moving',
        NO_DAMAGE_2: 'Get 2 kills without taking damage',
        NO_DAMAGE_5: 'Get 5 eliminations without taking damage',
        NO_DAMAGE_5_2: 'Get 5 kills without taking damage',
        NO_DAMAGE_ELIMS_2: 'Get 2 eliminations without taking damage',
        SLIDING_5: 'Get 5 eliminations while sliding',
        SPRINT_5: 'Get 5 kills shortly after sprinting',
        SPRINT_5_2: 'Get 5 eliminations shortly after sprinting',
        SPRINT_ELIMS_2: 'Get 2 eliminations shortly after sprinting',
        SUPPRESSOR_3: 'Get 3 eliminations while using a suppressor',
        SUPPRESSOR_5: 'Get 5 eliminations while using a suppressor',
        THREE_KILLS_SINGLE_MATCH_2: 'Get 3 kills in a single match 2 times',
        THREE_KILLS_SINGLE_MATCH_3: 'Get 3 kills in a single match 3 times',
        THREE_KILLS_SINGLE_MATCH_5: 'Get 3 kills in a single match 5 times',
        TOP_10_ELIMS_10: 'Get 10 eliminations while in the top 10',
        TOP_10_ELIMS_3: 'Get 3 eliminations while in the top 10',
        TOP_10_ELIMS_5: 'Get 5 eliminations while in the top 10',
        UNLOCK_ABSOLUTE_ZERO_30: 'Unlock Absolute Zero camo on 30 weapons',
        USING_SUPPRESSOR_10: 'Get 10 eliminations while using a suppressor',
    }),

});
// =========================
// WEAPONS + CAMOS
// =========================
// Each weapon now keeps all four mode arrays next to each other.
// To edit a gun, find its category, find the gun, then edit campaign/multiplayer/zombies/warzone in one place.
const weapons = {
    "ASSAULT RIFLES": {
        "M15 MOD O": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SCOPE_4X_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.UNDERBARREL_20 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.FIREWORKS_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "AK-27": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ADS_MOVING_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.UNDERBARREL_20 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.TWO_CRITS_ONE_SHOT_15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.NAPALM_BURST_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NO_DAMAGE_10X5 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "MXR-17": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ATTACHMENTS_8_100_2 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RARE_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.FIVE_ATTACHMENTS_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SPRINT_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.UNDERBARREL_20 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RELOAD_10X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "X9 MAVERICK": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.TACTICAL_LASER_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ADS_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.SHADOW_RIFT_75 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "DS20 MIRAGE": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SLIDE_DIVE_WALLJUMP_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SCOPE_4X_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SUPPRESSOR_50_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.NO_DAMAGE_10X10 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.DEAD_WIRE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "PEACEKEEPER MK1": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SLIDE_DIVE_WALLJUMP_25 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.FIVE_ATTACHMENTS_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.UNDERBARREL_20 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "MADDOX RFB": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RARE_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NAPALM_BURST_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "EGRT-17": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ATTACHMENTS_8_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.DEAD_WIRE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "VOYAK KT-3": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RARE_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ADS_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "MK35 ISR": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RARE_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.UNDERBARREL_20 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.KILLS_10_IN_3_SECONDS_15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.SINGLE_MATCH_CRITS_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TEDD_TASK_25X15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "VX COMPACT": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.COMMAND_CENTERS_TOXIN_FIELDS_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SPRINT_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.UNDERBARREL_20 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.SINGLE_MATCH_CRITS_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "AN-94": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ADS_MOVING_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.TEDD_TASK_25X15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "FG42": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ADS_MOVING_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SCOPE_4X_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TWO_CRITS_ONE_SHOT_15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "SMGS": {
        "RYDEN 45K": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ATTACHMENTS_8_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.POINT_BLANK_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SPRINT_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.DEAD_WIRE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "RK-9": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.TACTICAL_LASER_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ADS_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SUPPRESSOR_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.NAPALM_BURST_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "RAZOR 9MM": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SLIDE_DIVE_WALLJUMP_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.POINT_BLANK_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RELOAD_10X15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "DRAVEC 45": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.TACTICAL_LASER_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.BRAIN_ROT_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "CARBON 57": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.DESTROY_GUILD_EQUIPMENT_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.FIREWORKS_30 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RELOAD_10X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "MPC-25": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RARE_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.NAPALM_BURST_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.POINT_BLANK_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "KOGOT-7": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SLIDE_DIVE_WALLJUMP_25 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.DEAD_WIRE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "STURMWOLF 45": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ADS_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SPRINT_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "REV-46": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SPRINT_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.POINT_BLANK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "VST": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.TACTICAL_LASER_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.SINGLE_MATCH_500 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "CBRS-3": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.POINT_BLANK_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ENDGAME_HVTS_10 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SPRINT_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.POINT_BLANK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "GREMLIN": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.POINT_BLANK_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.DISTRACTED_10X20 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SPRINT_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "SHOTGUNS": {
        "M10 BREACHER": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.POINT_BLANK_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.DESTROY_GUILD_EQUIPMENT_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SLIDE_DIVE_WALLJUMP_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.POINT_BLANK_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SPRINT_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.POINT_BLANK_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.BRAIN_ROT_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.ADS_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "ECHO 12": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.POINT_BLANK_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.TACTICAL_LASER_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.POINT_BLANK_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SPRINTING_10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.POINT_BLANK_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.POINT_BLANK_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NO_DAMAGE_10X5 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.ADS_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "AKITA": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.POINT_BLANK_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RARE_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.POINT_BLANK_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.POINT_BLANK_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.NO_DAMAGE_10X5 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.NAPALM_BURST_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.POINT_BLANK_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HIPFIRE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "SG-12": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.POINT_BLANK_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ADS_MOVING_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ATTACHMENTS_8_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.POINT_BLANK_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.POINT_BLANK_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RELOAD_10X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.SLIDING_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HIPFIRE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "LMGS": {
        "MK.78": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RELEASING_TRIGGER_10_3 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.EXTENDED_MAG_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.TRIGGER_HOLD_2X5 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.FIVE_ATTACHMENTS_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.SHADOW_RIFT_75 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "XM325": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.DESTROY_GUILD_EQUIPMENT_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RELEASING_TRIGGER_10_3 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ATTACHMENTS_8_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.TRIGGER_HOLD_2X5 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.DEAD_WIRE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RELOAD_10X5 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "SOKOL 545": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ADS_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TRIGGER_HOLD_2X5 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.BRAIN_ROT_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RELOAD_10X15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "MAMMOTH": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RELEASING_TRIGGER_10_3 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ATTACHMENTS_8_100_2 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.TRIGGER_HOLD_2X5 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.TEDD_TASK_25X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.KILLS_10_IN_3_SECONDS_15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "MARKSMAN RIFLES": {
        "M8A1": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SCOPE_4X_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ADS_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RARE_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SCOPE_4X_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "WARDEN 308": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.FIVE_ATTACHMENTS_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.ONE_SHOT_30_2 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.FIREWORKS_75 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TWO_CRITS_ONE_SHOT_15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "M34 NOVALINE": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ATTACHMENTS_8_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SCOPE_4X_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SCOPE_4X_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.GUNFIGHTER_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.BRAIN_ROT_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "SWORDFISH A1": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SCOPE_4X_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SCOPE_4X_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.FIVE_ATTACHMENTS_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "KRS-7.62": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ADS_MOVING_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ENDGAME_GUILD_CHECKPOINTS_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SCOPE_4X_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TWO_CRITS_ONE_SHOT_15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "SNIPER RIFLES": {
        "VS RECON": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ATTACHMENTS_8_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.ONE_SHOT_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SCOPE_4X_50 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.ONE_SHOT_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.DEAD_WIRE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "SHADOW SK": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ADS_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "NETWORK", challenge: CHALLENGES.C.DESTROY_GUILD_EQUIPMENT_25 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.ONE_SHOT_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.FIREWORKS_75 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SUPPRESSOR_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "XR-3 ION": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SCOPE_4X_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.ONE_SHOT_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_ATTACHMENTS_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.TWO_CRITS_ONE_SHOT_15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NO_DAMAGE_10X5 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "HAWKER HX": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.ATTACHMENTS_8_100_2 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.ONE_SHOT_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.TWO_CRITS_ONE_SHOT_15 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "STRIDER 300": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.ONE_SHOT_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.LONGSHOT_15 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.NO_DAMAGE_10X15 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.SINGLE_MATCH_CRITS_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.CRITS_5X15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.HEADSHOT_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.USING_SUPPRESSOR_10 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "PISTOLS": {
        "JÄGER 45": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.DESTROY_GUILD_EQUIPMENT_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SWITCHING_WEAPONS_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_DAMAGE_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRITS_3X5 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NAPALM_BURST_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_3 },
                    { name: "TYRANT", challenge: CHALLENGES.W.ADS_3 },
                    { name: "TRACE", challenge: CHALLENGES.W.SUPPRESSOR_3 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_5 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "VELOX 5.7": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SUPPRESSOR_ATTACHMENT_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.HIPFIRE_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SPRINT_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.SHADOW_RIFT_75 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_3 },
                    { name: "TYRANT", challenge: CHALLENGES.W.ADS_3 },
                    { name: "TRACE", challenge: CHALLENGES.W.SUPPRESSOR_3 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_5 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "CODA 9": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.POINT_BLANK_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.DESTROY_GUILD_EQUIPMENT_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SWITCHING_WEAPONS_15 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.SHADOW_RIFT_75 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.HIPFIRE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_3 },
                    { name: "TYRANT", challenge: CHALLENGES.W.ADS_3 },
                    { name: "TRACE", challenge: CHALLENGES.W.SUPPRESSOR_3 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_3 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_3 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_5 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "1911": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ADS_MOVING_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.HEADSHOTS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.HIPFIRE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.SUPPRESSOR_50_3 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.CRITICALS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_3 },
                    { name: "TYRANT", challenge: CHALLENGES.W.ADS_3 },
                    { name: "TRACE", challenge: CHALLENGES.W.SUPPRESSOR_3 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_3 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_3 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_5 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "LAUNCHERS": {
        "AAROW 109": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILL_OR_DESTROY_GUILD_EQUIPMENT_100 },
                    { name: "CINDER", challenge: CHALLENGES.C.DIRECT_HITS_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.THREE_WITH_SAME_SHOT_10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_OR_SCORESTREAKS_50 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.AERIAL_SCORESTREAKS_10 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.DIRECT_HITS_10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.DESTROY_SCORESTREAKS_VEHICLES_EQUIPMENT_10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_SINGLE_MATCH_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_SINGLE_MATCH_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.FIREWORKS_75 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NO_DAMAGE_10X5 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.KILLS_OR_VEHICLES_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "A.R.C. M1": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILL_OR_DESTROY_GUILD_EQUIPMENT_100 },
                    { name: "CINDER", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ADS_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_OR_SCORESTREAKS_50 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.AERIAL_SCORESTREAKS_10 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.DESTROY_SCORESTREAKS_VEHICLES_EQUIPMENT_10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_SINGLE_MATCH_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_SINGLE_MATCH_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.FIREWORKS_75 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.KILLS_OR_VEHICLES_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "SPECIALS": {
        "NX RAVAGER": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILLS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RARE_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_25 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.MOVING_25 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.MOVING_5 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_5_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "GDL HAVOC": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILLS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RAPID_KILLS_3X10 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RARE_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.NO_DAMAGE_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.DESTROY_SCORESTREAKS_VEHICLES_EQUIPMENT_10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.OBJECTIVE_15 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.NO_DAMAGE_10X3 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.CROUCHED_5 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_5_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.DESTROY_VEHICLES_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "SIREN": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILLS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.POINT_BLANK_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.ENDGAME_HVTS_10 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RELOAD_10X10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.RELOAD_2X10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMORED_75 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.KILLS_10_IN_3_SECONDS_15 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.MOVING_5_KILLS },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "GRIMHAWK": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RARE_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.FEAR_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NO_DAMAGE_10X3 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.NO_DAMAGE_5_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.MOVING_5_KILLS },
                    { name: "TRACE", challenge: CHALLENGES.W.CROUCHED_5 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_5 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_5 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_10 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    },
    "MELEE": {
        "KNIFE": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILLS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RARE_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SWITCHING_WEAPONS_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.BRAIN_ROT_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_ELIMS_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_ELIMS_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "FLATLINE MK.II": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILLS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SLIDE_DIVE_WALLJUMP_25 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SWITCHING_WEAPONS_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.MOVING_50 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.CRYO_FREEZE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_ELIMS_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_ELIMS_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "BALLISTIC KNIFE": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILLS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RARE_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SWITCHING_WEAPONS_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.NO_DAMAGE_10X3 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.PACK_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_ELIMS_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_ELIMS_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "H311-SAW": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.KILLS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.HUMAN_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SPRINT_50 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.HEAVY_MELEE_10 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.BRAIN_ROT_300 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NAPALM_BURST_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.KILLSTREAK_ACTIVE_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_ELIMS_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_ELIMS_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "KATANA": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.SLIDE_DIVE_WALLJUMP_25 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.COMMAND_CENTERS_TOXIN_FIELDS_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.RARE_100 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.OBJECTIVE_30 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.NO_DAMAGE_30_2 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.HEAVY_MELEE_10 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.TACTICAL_100 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_ELIMS_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_ELIMS_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "EXECUTIONER'S DUET": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.RARE_100 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.GUILDTECH_50 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SWITCHING_WEAPONS_25 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SWITCHING_WEAPONS_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.HEAVY_MELEE_10 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.SINGLE_MATCH_500 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.FIELD_UPGRADE_100 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.NO_DAMAGE_10X3 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_ELIMS_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_ELIMS_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        },
        "MACE": {
            campaign: [
                    { name: "TOPAZ SNAKE", challenge: CHALLENGES.C.CRITICALS_250 },
                    { name: "CINDER", challenge: CHALLENGES.C.ENDGAME_HVTS_15 },
                    { name: "CAIMAN", challenge: CHALLENGES.C.RARE_100 },
                    { name: "NETWORK", challenge: CHALLENGES.C.SPRINT_10 },
                    { name: "MOTEN GOLD", challenge: CHALLENGES.C.SPECIAL_ENEMIES_20 },
                    { name: "MOONSTONE", challenge: CHALLENGES.C.ENDGAME_ZONE_III_IV_100 },
                    { name: "CHROMA FLUX", challenge: CHALLENGES.C.ELITE_ENEMIES_10 },
                    { name: "GENESIS", challenge: CHALLENGES.C.UNLOCK_CHROMA_FLUX_30 }
                ],
            multiplayer: [
                    { name: "RUBY SNAKE", challenge: CHALLENGES.MP.KILLS_80 },
                    { name: "DIAMONDBACK", challenge: CHALLENGES.MP.SLIDE_DIVE_WALLJUMP_15 },
                    { name: "RAPTOR", challenge: CHALLENGES.MP.SWITCHING_WEAPONS_15 },
                    { name: "MAINFRAME", challenge: CHALLENGES.MP.TACTICAL_OR_SCORESTREAK_30 },
                    { name: "SHATTERED GOLD", challenge: CHALLENGES.MP.THREE_KILLS_NO_DYING_10 },
                    { name: "ARCLIGHT", challenge: CHALLENGES.MP.DOUBLE_KILLS_10 },
                    { name: "TEMPEST", challenge: CHALLENGES.MP.FIVE_KILLS_NO_DYING_3 },
                    { name: "SINGULARITY", challenge: CHALLENGES.MP.UNLOCK_TEMPEST_30 }
                ],
            zombies: [
                    { name: "EMERALD SNAKE", challenge: CHALLENGES.Z.ELIMINATIONS_1000 },
                    { name: "MUTILATE", challenge: CHALLENGES.Z.ARMOR_T2_150 },
                    { name: "SLITHER", challenge: CHALLENGES.Z.NO_DAMAGE_10X3 },
                    { name: "PATHFINDER", challenge: CHALLENGES.Z.RARE_300 },
                    { name: "GOLDEN DRAGON", challenge: CHALLENGES.Z.RAPID_KILLS_10X15 },
                    { name: "BLOODSTONE", challenge: CHALLENGES.Z.NO_DAMAGE_STREAK_20X5 },
                    { name: "DOOMSTEEL", challenge: CHALLENGES.Z.ELITE_ZOMBIES_10 },
                    { name: "INFESTATION", challenge: CHALLENGES.Z.UNLOCK_DOOMSTEEL_30 }
                ],
            warzone: [
                    { name: "SAPPHIRE SNAKE", challenge: CHALLENGES.W.ELIMINATIONS_100 },
                    { name: "SHIMMER", challenge: CHALLENGES.W.MOVING_2 },
                    { name: "TYRANT", challenge: CHALLENGES.W.NO_DAMAGE_ELIMS_2 },
                    { name: "TRACE", challenge: CHALLENGES.W.SPRINT_ELIMS_2 },
                    { name: "GOLDEN DAMASCUS", challenge: CHALLENGES.W.THREE_KILLS_SINGLE_MATCH_2 },
                    { name: "STARGLASS", challenge: CHALLENGES.W.FIVE_KILLS_NO_DYING_2 },
                    { name: "ABSOLUTE ZERO", challenge: CHALLENGES.W.TOP_10_ELIMS_3 },
                    { name: "APOCALYPSE", challenge: CHALLENGES.W.UNLOCK_ABSOLUTE_ZERO_30 }
                ]
        }
    }
};

const weaponsByType = Object.freeze(
    Object.fromEntries(
        Object.entries(weapons).map(([type, guns]) => [type, Object.freeze(Object.keys(guns))])
    )
);

Object.values(weapons).forEach(Object.freeze);
Object.freeze(weapons);

// Expose one clean data object for script.js.
window.BO7_TRACKER_DATA = {
    gunTypes,
    weaponsByType,
    modeOrder,
    modeLabels,
    weapons
};
