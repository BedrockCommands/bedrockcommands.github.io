if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.e15266da.js",revision:null},{url:"assets/404.md.e15266da.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.2ea6b755.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.2ea6b755.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.467e3315.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.467e3315.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.bfccb4e6.js",revision:null},{url:"assets/animation-controllers_death-commands.md.bfccb4e6.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.143a668f.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.143a668f.lean.js",revision:null},{url:"assets/animation-controllers_index.md.762c3cab.js",revision:null},{url:"assets/animation-controllers_index.md.762c3cab.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.f42ae693.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.f42ae693.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.1e0e031f.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.1e0e031f.lean.js",revision:null},{url:"assets/app.5a843763.js",revision:null},{url:"assets/blocks_applying-effects.md.d5680ec3.js",revision:null},{url:"assets/blocks_applying-effects.md.d5680ec3.lean.js",revision:null},{url:"assets/blocks_block-materials.md.c64146dc.js",revision:null},{url:"assets/blocks_block-materials.md.c64146dc.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.97cbdd77.js",revision:null},{url:"assets/blocks_block-shapes.md.97cbdd77.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.1416239d.js",revision:null},{url:"assets/blocks_block-sounds.md.1416239d.lean.js",revision:null},{url:"assets/blocks_block-tags.md.7cc2fc0f.js",revision:null},{url:"assets/blocks_block-tags.md.7cc2fc0f.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.479e3d69.js",revision:null},{url:"assets/blocks_block-texture-variation.md.479e3d69.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.6919f7b1.js",revision:null},{url:"assets/blocks_blocks-16.md.6919f7b1.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.6949c375.js",revision:null},{url:"assets/blocks_blocks-intro.md.6949c375.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.bbf15de5.js",revision:null},{url:"assets/blocks_custom-crops.md.bbf15de5.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.c0877848.js",revision:null},{url:"assets/blocks_custom-fluids.md.c0877848.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.938b267e.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.938b267e.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.a405dba6.js",revision:null},{url:"assets/blocks_custom-tree.md.a405dba6.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.1d6c763b.js",revision:null},{url:"assets/blocks_fake-blocks.md.1d6c763b.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.7dc5e4ed.js",revision:null},{url:"assets/blocks_flipbook-textures.md.7dc5e4ed.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.1b3c09c4.js",revision:null},{url:"assets/blocks_head-like-rotation.md.1b3c09c4.lean.js",revision:null},{url:"assets/blocks_index.md.083186bc.js",revision:null},{url:"assets/blocks_index.md.083186bc.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.15503307.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.15503307.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.64c25704.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.64c25704.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.65b7215d.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.65b7215d.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.cd6ba807.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.cd6ba807.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.b90beae6.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.b3f6db8f.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.add881e5.js",revision:null},{url:"assets/commands_block-states.md.add881e5.lean.js",revision:null},{url:"assets/commands_damage.md.e45c6df0.js",revision:null},{url:"assets/commands_damage.md.e45c6df0.lean.js",revision:null},{url:"assets/commands_entity-counter.md.1ede9fd8.js",revision:null},{url:"assets/commands_entity-counter.md.1ede9fd8.lean.js",revision:null},{url:"assets/commands_index.md.3c434a80.js",revision:null},{url:"assets/commands_index.md.3c434a80.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.cf011cca.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.cf011cca.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.a4730131.js",revision:null},{url:"assets/commands_mcfunctions.md.a4730131.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.410e896e.js",revision:null},{url:"assets/commands_nbt-commands.md.410e896e.lean.js",revision:null},{url:"assets/commands_new-execute.md.2ab4c7a9.js",revision:null},{url:"assets/commands_new-execute.md.2ab4c7a9.lean.js",revision:null},{url:"assets/commands_on-first-join.md.c5697a57.js",revision:null},{url:"assets/commands_on-first-join.md.c5697a57.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.d3758946.js",revision:null},{url:"assets/commands_on-first-world-load.md.d3758946.lean.js",revision:null},{url:"assets/commands_on-player-death.md.2ffa7134.js",revision:null},{url:"assets/commands_on-player-death.md.2ffa7134.lean.js",revision:null},{url:"assets/commands_on-player-join.md.f6609eae.js",revision:null},{url:"assets/commands_on-player-join.md.f6609eae.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.4fc72839.js",revision:null},{url:"assets/commands_on-player-leave.md.4fc72839.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.ace51ea6.js",revision:null},{url:"assets/commands_on-player-respawn.md.ace51ea6.lean.js",revision:null},{url:"assets/commands_playsound.md.0aa2d567.js",revision:null},{url:"assets/commands_playsound.md.0aa2d567.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.4f003b5b.js",revision:null},{url:"assets/commands_relative-coordinates.md.4f003b5b.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.8595eeb6.js",revision:null},{url:"assets/commands_scoreboard-operations.md.8595eeb6.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.fb4aba99.js",revision:null},{url:"assets/commands_scoreboard-timers.md.fb4aba99.lean.js",revision:null},{url:"assets/commands_selectors.md.2beb5e88.js",revision:null},{url:"assets/commands_selectors.md.2beb5e88.lean.js",revision:null},{url:"assets/commands_tellraw.md.df31e12f.js",revision:null},{url:"assets/commands_tellraw.md.df31e12f.lean.js",revision:null},{url:"assets/concepts_contents.md.bd7fc51a.js",revision:null},{url:"assets/concepts_contents.md.bd7fc51a.lean.js",revision:null},{url:"assets/concepts_emojis.md.86eb5c15.js",revision:null},{url:"assets/concepts_emojis.md.86eb5c15.lean.js",revision:null},{url:"assets/concepts_index.md.3a778778.js",revision:null},{url:"assets/concepts_index.md.3a778778.lean.js",revision:null},{url:"assets/concepts_molang.md.1ffba20a.js",revision:null},{url:"assets/concepts_molang.md.1ffba20a.lean.js",revision:null},{url:"assets/concepts_namespaces.md.aa980a83.js",revision:null},{url:"assets/concepts_namespaces.md.aa980a83.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.e1fcc2bf.js",revision:null},{url:"assets/concepts_overwriting-assets.md.e1fcc2bf.lean.js",revision:null},{url:"assets/concepts_shaders.md.328adb81.js",revision:null},{url:"assets/concepts_shaders.md.328adb81.lean.js",revision:null},{url:"assets/concepts_sounds.md.4abf7896.js",revision:null},{url:"assets/concepts_sounds.md.4abf7896.lean.js",revision:null},{url:"assets/concepts_subpacks.md.4bd5f7db.js",revision:null},{url:"assets/concepts_subpacks.md.4bd5f7db.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.40ed8341.js",revision:null},{url:"assets/concepts_text-and-translations.md.40ed8341.lean.js",revision:null},{url:"assets/concepts_textures-list.md.d3ba6e2d.js",revision:null},{url:"assets/concepts_textures-list.md.d3ba6e2d.lean.js",revision:null},{url:"assets/contribute-how-to.md.c98b4e92.js",revision:null},{url:"assets/contribute-how-to.md.c98b4e92.lean.js",revision:null},{url:"assets/contribute-style.md.d37ab82c.js",revision:null},{url:"assets/contribute-style.md.d37ab82c.lean.js",revision:null},{url:"assets/contribute.md.f5af0e88.js",revision:null},{url:"assets/contribute.md.f5af0e88.lean.js",revision:null},{url:"assets/discord.md.87aa9359.js",revision:null},{url:"assets/discord.md.87aa9359.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.84dd415c.js",revision:null},{url:"assets/documentation_advanced-molang.md.84dd415c.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.1d708113.js",revision:null},{url:"assets/documentation_creative-categories.md.1d708113.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.a3ea9256.js",revision:null},{url:"assets/documentation_fog-ids.md.a3ea9256.lean.js",revision:null},{url:"assets/documentation_index.md.6572065a.js",revision:null},{url:"assets/documentation_index.md.6572065a.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.67244795.js",revision:null},{url:"assets/documentation_material-config-description.md.67244795.lean.js",revision:null},{url:"assets/documentation_materials.md.a02711bb.js",revision:null},{url:"assets/documentation_materials.md.a02711bb.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.378d9196.js",revision:null},{url:"assets/documentation_pack-structure.md.378d9196.lean.js",revision:null},{url:"assets/documentation_projectiles.md.a7d1fa9c.js",revision:null},{url:"assets/documentation_projectiles.md.a7d1fa9c.lean.js",revision:null},{url:"assets/documentation_queries.md.7163af09.js",revision:null},{url:"assets/documentation_queries.md.7163af09.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.5bc69f44.js",revision:null},{url:"assets/documentation_shared-constructs.md.5bc69f44.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.6d23731b.js",revision:null},{url:"assets/documentation_sound-definitions.md.6d23731b.lean.js",revision:null},{url:"assets/entities_boat-entities.md.92344b8b.js",revision:null},{url:"assets/entities_boat-entities.md.92344b8b.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.6c68e1c0.js",revision:null},{url:"assets/entities_detecting-other-entities.md.6c68e1c0.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9118e6fd.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9118e6fd.lean.js",revision:null},{url:"assets/entities_dummy-components.md.b0a2556a.js",revision:null},{url:"assets/entities_dummy-components.md.b0a2556a.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.1f4a00b5.js",revision:null},{url:"assets/entities_dummy-entities.md.1f4a00b5.lean.js",revision:null},{url:"assets/entities_entity-attack.md.ae7fd781.js",revision:null},{url:"assets/entities_entity-attack.md.ae7fd781.lean.js",revision:null},{url:"assets/entities_entity-events.md.5d6f27ea.js",revision:null},{url:"assets/entities_entity-events.md.5d6f27ea.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.86e6046f.js",revision:null},{url:"assets/entities_entity-holds-item.md.86e6046f.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.1343db43.js",revision:null},{url:"assets/entities_entity-intro-bp.md.1343db43.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.33af8067.js",revision:null},{url:"assets/entities_entity-intro-rp.md.33af8067.lean.js",revision:null},{url:"assets/entities_entity-movement.md.d8b060aa.js",revision:null},{url:"assets/entities_entity-movement.md.d8b060aa.lean.js",revision:null},{url:"assets/entities_entity-properties.md.319cf330.js",revision:null},{url:"assets/entities_entity-properties.md.319cf330.lean.js",revision:null},{url:"assets/entities_flying-entities.md.13d445d6.js",revision:null},{url:"assets/entities_flying-entities.md.13d445d6.lean.js",revision:null},{url:"assets/entities_index.md.947e234d.js",revision:null},{url:"assets/entities_index.md.947e234d.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.891254ce.js",revision:null},{url:"assets/entities_introduction-to-aec.md.891254ce.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.340a27e1.js",revision:null},{url:"assets/entities_invulnerable-entities.md.340a27e1.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.7d7e584b.js",revision:null},{url:"assets/entities_look-at-entity.md.7d7e584b.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.e390c9a3.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.e390c9a3.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.0e0b57fd.js",revision:null},{url:"assets/entities_npc-dialogs.md.0e0b57fd.lean.js",revision:null},{url:"assets/entities_render-controllers.md.8e16465b.js",revision:null},{url:"assets/entities_render-controllers.md.8e16465b.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.d8325cc5.js",revision:null},{url:"assets/entities_runtime-identifier.md.d8325cc5.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.327e8e7e.js",revision:null},{url:"assets/entities_sleeping-entities.md.327e8e7e.lean.js",revision:null},{url:"assets/entities_solid-entities.md.0202ed94.js",revision:null},{url:"assets/entities_solid-entities.md.0202ed94.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.0f1e7082.js",revision:null},{url:"assets/entities_spawn-rules.md.0f1e7082.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.a1eb0f2a.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.a1eb0f2a.lean.js",revision:null},{url:"assets/entities_timers.md.bceff1f0.js",revision:null},{url:"assets/entities_timers.md.bceff1f0.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.8cfdeb1e.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.8cfdeb1e.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.3b789256.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.3b789256.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.b21b4e06.js",revision:null},{url:"assets/entities_village-mechanic.md.b21b4e06.lean.js",revision:null},{url:"assets/entities_vuc-full.md.b06fec36.lean.js",revision:null},{url:"assets/entities_vusr-full.md.3a487de7.js",revision:null},{url:"assets/entities_vusr-full.md.3a487de7.lean.js",revision:null},{url:"assets/graph-test.md.23eb86d6.js",revision:null},{url:"assets/graph-test.md.23eb86d6.lean.js",revision:null},{url:"assets/guide_addons.md.a61cb300.js",revision:null},{url:"assets/guide_addons.md.a61cb300.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.011239c2.js",revision:null},{url:"assets/guide_advancedmanifest.md.011239c2.lean.js",revision:null},{url:"assets/guide_blockbench.md.67996f01.js",revision:null},{url:"assets/guide_blockbench.md.67996f01.lean.js",revision:null},{url:"assets/guide_custom-entity.md.40bc3802.js",revision:null},{url:"assets/guide_custom-entity.md.40bc3802.lean.js",revision:null},{url:"assets/guide_custom-item.md.7c863ebc.js",revision:null},{url:"assets/guide_custom-item.md.7c863ebc.lean.js",revision:null},{url:"assets/guide_download-packs.md.b85b386f.js",revision:null},{url:"assets/guide_download-packs.md.b85b386f.lean.js",revision:null},{url:"assets/guide_format-version.md.fa244ffd.js",revision:null},{url:"assets/guide_format-version.md.fa244ffd.lean.js",revision:null},{url:"assets/guide_index.md.92e94a5e.js",revision:null},{url:"assets/guide_index.md.92e94a5e.lean.js",revision:null},{url:"assets/guide_introduction.md.9abe2e33.js",revision:null},{url:"assets/guide_introduction.md.9abe2e33.lean.js",revision:null},{url:"assets/guide_loot-table.md.3d637e8d.js",revision:null},{url:"assets/guide_loot-table.md.3d637e8d.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.926f7dd7.js",revision:null},{url:"assets/guide_project-setup-android.md.926f7dd7.lean.js",revision:null},{url:"assets/guide_project-setup.md.7976f77d.js",revision:null},{url:"assets/guide_project-setup.md.7976f77d.lean.js",revision:null},{url:"assets/guide_software-preparation.md.82519114.js",revision:null},{url:"assets/guide_software-preparation.md.82519114.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.add83fad.js",revision:null},{url:"assets/guide_troubleshooting.md.add83fad.lean.js",revision:null},{url:"assets/guide_understanding-json.md.1e862604.js",revision:null},{url:"assets/guide_understanding-json.md.1e862604.lean.js",revision:null},{url:"assets/hacktoberfest.md.151a4b3f.js",revision:null},{url:"assets/hacktoberfest.md.151a4b3f.lean.js",revision:null},{url:"assets/index.md.97a9177d.js",revision:null},{url:"assets/index.md.97a9177d.lean.js",revision:null},{url:"assets/items_attachables.md.d149916d.js",revision:null},{url:"assets/items_attachables.md.d149916d.lean.js",revision:null},{url:"assets/items_custom-armor.md.cab379d1.js",revision:null},{url:"assets/items_custom-armor.md.cab379d1.lean.js",revision:null},{url:"assets/items_custom-weapon.md.7543da68.js",revision:null},{url:"assets/items_custom-weapon.md.7543da68.lean.js",revision:null},{url:"assets/items_enchantments.md.9532424f.js",revision:null},{url:"assets/items_enchantments.md.9532424f.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.3db692e6.js",revision:null},{url:"assets/items_equipped-item-commands.md.3db692e6.lean.js",revision:null},{url:"assets/items_index.md.d53ba9e3.js",revision:null},{url:"assets/items_index.md.d53ba9e3.lean.js",revision:null},{url:"assets/items_item-identifiers.md.4c950142.js",revision:null},{url:"assets/items_item-identifiers.md.4c950142.lean.js",revision:null},{url:"assets/items_items-16.md.401dd0d7.js",revision:null},{url:"assets/items_items-16.md.401dd0d7.lean.js",revision:null},{url:"assets/items_items-intro.md.274cb20d.js",revision:null},{url:"assets/items_items-intro.md.274cb20d.lean.js",revision:null},{url:"assets/items_spawning-items.md.fa67546a.js",revision:null},{url:"assets/items_spawning-items.md.fa67546a.lean.js",revision:null},{url:"assets/items_spear.md.f9060489.js",revision:null},{url:"assets/items_spear.md.f9060489.lean.js",revision:null},{url:"assets/items_throwable.md.5f322f55.js",revision:null},{url:"assets/items_throwable.md.5f322f55.lean.js",revision:null},{url:"assets/items_tool-durability.md.f63ed1c7.js",revision:null},{url:"assets/items_tool-durability.md.f63ed1c7.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.3755d5b2.js",revision:null},{url:"assets/items_troubleshooting-items.md.3755d5b2.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.cd6e5f40.js",revision:null},{url:"assets/items_vanilla-usage-items.md.cd6e5f40.lean.js",revision:null},{url:"assets/items_vui-full.md.4c7eb8f9.js",revision:null},{url:"assets/items_vui-full.md.4c7eb8f9.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.19f444a9.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.19f444a9.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.35496c4a.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.35496c4a.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.7fc64ddd.js",revision:null},{url:"assets/json-ui_best-practices.md.7fc64ddd.lean.js",revision:null},{url:"assets/json-ui_index.md.a15ad46a.js",revision:null},{url:"assets/json-ui_index.md.a15ad46a.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.9ed73dd5.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.9ed73dd5.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.f4b2f980.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.f4b2f980.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.5aa5229a.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.5aa5229a.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.dc69288a.js",revision:null},{url:"assets/json-ui_string-to-number.md.dc69288a.lean.js",revision:null},{url:"assets/loot_index.md.f17d5029.js",revision:null},{url:"assets/loot_index.md.f17d5029.lean.js",revision:null},{url:"assets/loot_item-functions.md.c0efec87.js",revision:null},{url:"assets/loot_item-functions.md.c0efec87.lean.js",revision:null},{url:"assets/loot_loot-tables.md.5145dc01.js",revision:null},{url:"assets/loot_loot-tables.md.5145dc01.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.c160b06d.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.c160b06d.lean.js",revision:null},{url:"assets/loot_recipes.md.97fd5625.js",revision:null},{url:"assets/loot_recipes.md.97fd5625.lean.js",revision:null},{url:"assets/loot_trade-tables.md.203faf40.js",revision:null},{url:"assets/loot_trade-tables.md.203faf40.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.70d05492.js",revision:null},{url:"assets/loot_trading-behavior.md.70d05492.lean.js",revision:null},{url:"assets/meta_addon-performance.md.b2cc957a.js",revision:null},{url:"assets/meta_addon-performance.md.b2cc957a.lean.js",revision:null},{url:"assets/meta_index.md.653d387e.js",revision:null},{url:"assets/meta_index.md.653d387e.lean.js",revision:null},{url:"assets/meta_jq.md.9ab1e3f4.js",revision:null},{url:"assets/meta_jq.md.9ab1e3f4.lean.js",revision:null},{url:"assets/meta_style-guide.md.bcbef3b7.js",revision:null},{url:"assets/meta_style-guide.md.bcbef3b7.lean.js",revision:null},{url:"assets/meta_useful-links.md.1019eef4.js",revision:null},{url:"assets/meta_useful-links.md.1019eef4.lean.js",revision:null},{url:"assets/meta_using-schemas.md.8de87fbf.js",revision:null},{url:"assets/meta_using-schemas.md.8de87fbf.lean.js",revision:null},{url:"assets/meta_version-control.md.283bfd26.js",revision:null},{url:"assets/meta_version-control.md.283bfd26.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.85336a61.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.85336a61.lean.js",revision:null},{url:"assets/nbt_index.md.91ac2d4c.js",revision:null},{url:"assets/nbt_index.md.91ac2d4c.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.2bfba92e.js",revision:null},{url:"assets/nbt_mcstructure.md.2bfba92e.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.91a9e478.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.91a9e478.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.0de4ed8a.js",revision:null},{url:"assets/nbt_step-by-step-example.md.0de4ed8a.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.43ef6371.js",revision:null},{url:"assets/nbt_structure-limits.md.43ef6371.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.2e068b64.js",revision:null},{url:"assets/particles_disabling-particles.md.2e068b64.lean.js",revision:null},{url:"assets/particles_index.md.7f4648ec.js",revision:null},{url:"assets/particles_index.md.7f4648ec.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.60e5caf7.js",revision:null},{url:"assets/particles_particles-and-sounds.md.60e5caf7.lean.js",revision:null},{url:"assets/particles_particles.md.6c4b754d.js",revision:null},{url:"assets/particles_particles.md.6c4b754d.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.6934928c.js",revision:null},{url:"assets/particles_vanilla-particles.md.6934928c.lean.js",revision:null},{url:"assets/privacy.md.005ed348.js",revision:null},{url:"assets/privacy.md.005ed348.lean.js",revision:null},{url:"assets/scripting_api-environment.md.9d40bc58.js",revision:null},{url:"assets/scripting_api-environment.md.9d40bc58.lean.js",revision:null},{url:"assets/scripting_custom-command.md.bd641a9d.js",revision:null},{url:"assets/scripting_custom-command.md.bd641a9d.lean.js",revision:null},{url:"assets/scripting_game-tests.md.d1e749d4.js",revision:null},{url:"assets/scripting_game-tests.md.d1e749d4.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.861f4481.js",revision:null},{url:"assets/scripting_gametest-form.md.861f4481.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.72ac8388.js",revision:null},{url:"assets/scripting_gametest-qna.md.72ac8388.lean.js",revision:null},{url:"assets/scripting_index.md.21a84e1a.js",revision:null},{url:"assets/scripting_index.md.21a84e1a.lean.js",revision:null},{url:"assets/scripting_resources.md.5adc65ea.js",revision:null},{url:"assets/scripting_resources.md.5adc65ea.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.88967871.js",revision:null},{url:"assets/scripting_saving-loading.md.88967871.lean.js",revision:null},{url:"assets/scripting_script-net.md.328277b9.js",revision:null},{url:"assets/scripting_script-net.md.328277b9.lean.js",revision:null},{url:"assets/scripting_script-server.md.d36d0ccb.js",revision:null},{url:"assets/scripting_script-server.md.d36d0ccb.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.62afa176.js",revision:null},{url:"assets/scripting_script-watchdog.md.62afa176.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.86299316.js",revision:null},{url:"assets/scripting_scripting-intro.md.86299316.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.b8abc9e6.js",revision:null},{url:"assets/scripting_starting-scripts.md.b8abc9e6.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.257cd7ce.js",revision:null},{url:"assets/scripting_troubleshooting.md.257cd7ce.lean.js",revision:null},{url:"assets/scripting_typescript.md.328a0515.js",revision:null},{url:"assets/scripting_typescript.md.328a0515.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.1ad6ecae.js",revision:null},{url:"assets/scripting_what-is-script.md.1ad6ecae.lean.js",revision:null},{url:"assets/servers_index.md.eb1356e6.js",revision:null},{url:"assets/servers_index.md.eb1356e6.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.45852a45.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.45852a45.lean.js",revision:null},{url:"assets/servers_server-software.md.f0052b41.js",revision:null},{url:"assets/servers_server-software.md.f0052b41.lean.js",revision:null},{url:"assets/style.e44c8e98.css",revision:null},{url:"assets/test.md.b15b4d42.js",revision:null},{url:"assets/test.md.b15b4d42.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.b162cdff.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.b162cdff.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.aa34d02f.js",revision:null},{url:"assets/visuals_animation-effects.md.aa34d02f.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.0cc118fa.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.0cc118fa.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.35e6354c.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.35e6354c.lean.js",revision:null},{url:"assets/visuals_death-animations.md.4005821b.js",revision:null},{url:"assets/visuals_death-animations.md.4005821b.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.5d1cfe72.js",revision:null},{url:"assets/visuals_glowing-texture.md.5d1cfe72.lean.js",revision:null},{url:"assets/visuals_index.md.c37447b1.js",revision:null},{url:"assets/visuals_index.md.c37447b1.lean.js",revision:null},{url:"assets/visuals_introduction.md.803f3d68.js",revision:null},{url:"assets/visuals_introduction.md.803f3d68.lean.js",revision:null},{url:"assets/visuals_leash-position.md.cc1ef6b6.js",revision:null},{url:"assets/visuals_leash-position.md.cc1ef6b6.lean.js",revision:null},{url:"assets/visuals_materials.md.564a2e9f.js",revision:null},{url:"assets/visuals_materials.md.564a2e9f.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.f04a1ef1.js",revision:null},{url:"assets/visuals_math-based-animations.md.f04a1ef1.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.072ccdc8.js",revision:null},{url:"assets/visuals_player-geometry.md.072ccdc8.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.94ef7aa0.js",revision:null},{url:"assets/visuals_remove-shadows.md.94ef7aa0.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.16680921.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.16680921.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.d47df53a.js",revision:null},{url:"assets/visuals_structure-presentation.md.d47df53a.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.dea9d6e9.js",revision:null},{url:"assets/vr_editing-your-first-model.md.dea9d6e9.lean.js",revision:null},{url:"assets/vr_index.md.eae12371.js",revision:null},{url:"assets/vr_index.md.eae12371.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.b42e1398.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.b42e1398.lean.js",revision:null},{url:"assets/vr_pack_setup.md.e39cf359.js",revision:null},{url:"assets/vr_pack_setup.md.e39cf359.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.e7f412bd.js",revision:null},{url:"assets/world-generation_biome-tags.md.e7f412bd.lean.js",revision:null},{url:"assets/world-generation_biomes.md.d5c1c8e4.js",revision:null},{url:"assets/world-generation_biomes.md.d5c1c8e4.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.a7fe4f4b.js",revision:null},{url:"assets/world-generation_custom-ores.md.a7fe4f4b.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.bb1be230.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.bb1be230.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.49eb1787.js",revision:null},{url:"assets/world-generation_feature-types.md.49eb1787.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.778d1284.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.778d1284.lean.js",revision:null},{url:"assets/world-generation_index.md.36b28d28.js",revision:null},{url:"assets/world-generation_index.md.36b28d28.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.00cc1a67.js",revision:null},{url:"assets/world-generation_structure-features.md.00cc1a67.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.b98a310e.js",revision:null},{url:"assets/world-generation_surface-builder.md.b98a310e.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.0857405a.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.0857405a.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
