if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.e854e0c1.js",revision:null},{url:"assets/404.md.e854e0c1.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.e8bd69dc.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.e8bd69dc.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.cd8fc632.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.cd8fc632.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.a533b34d.js",revision:null},{url:"assets/animation-controllers_death-commands.md.a533b34d.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.9c605937.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.9c605937.lean.js",revision:null},{url:"assets/animation-controllers_index.md.fa21e780.js",revision:null},{url:"assets/animation-controllers_index.md.fa21e780.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.2e70ae66.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.2e70ae66.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.42c61211.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.42c61211.lean.js",revision:null},{url:"assets/app.ea86b98c.js",revision:null},{url:"assets/blocks_applying-effects.md.c58d6a7a.js",revision:null},{url:"assets/blocks_applying-effects.md.c58d6a7a.lean.js",revision:null},{url:"assets/blocks_block-materials.md.95ab94f4.js",revision:null},{url:"assets/blocks_block-materials.md.95ab94f4.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.247403e9.js",revision:null},{url:"assets/blocks_block-shapes.md.247403e9.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.6d33e777.js",revision:null},{url:"assets/blocks_block-sounds.md.6d33e777.lean.js",revision:null},{url:"assets/blocks_block-tags.md.8a277d6c.js",revision:null},{url:"assets/blocks_block-tags.md.8a277d6c.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.914c5884.js",revision:null},{url:"assets/blocks_block-texture-variation.md.914c5884.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.bc41946f.js",revision:null},{url:"assets/blocks_blocks-16.md.bc41946f.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.4d45ac84.js",revision:null},{url:"assets/blocks_blocks-intro.md.4d45ac84.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.4a5a6f02.js",revision:null},{url:"assets/blocks_custom-crops.md.4a5a6f02.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.f96534a1.js",revision:null},{url:"assets/blocks_custom-fluids.md.f96534a1.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.7d36a034.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.7d36a034.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.5476f459.js",revision:null},{url:"assets/blocks_custom-tree.md.5476f459.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.765207fa.js",revision:null},{url:"assets/blocks_fake-blocks.md.765207fa.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.d3f6f861.js",revision:null},{url:"assets/blocks_flipbook-textures.md.d3f6f861.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.90fffd0f.js",revision:null},{url:"assets/blocks_head-like-rotation.md.90fffd0f.lean.js",revision:null},{url:"assets/blocks_index.md.2cc42664.js",revision:null},{url:"assets/blocks_index.md.2cc42664.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.1a6f0ae7.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.1a6f0ae7.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.bac0407a.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.bac0407a.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.14529277.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.14529277.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.2d06ad61.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.2d06ad61.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.8c0d1ce4.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.3a58af29.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.2a44bd8f.js",revision:null},{url:"assets/commands_block-states.md.2a44bd8f.lean.js",revision:null},{url:"assets/commands_entity-counter.md.7cd16251.js",revision:null},{url:"assets/commands_entity-counter.md.7cd16251.lean.js",revision:null},{url:"assets/commands_index.md.6c32b95a.js",revision:null},{url:"assets/commands_index.md.6c32b95a.lean.js",revision:null},{url:"assets/commands_mcfunction.md.8388cf0d.js",revision:null},{url:"assets/commands_mcfunction.md.8388cf0d.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.95407599.js",revision:null},{url:"assets/commands_nbt-commands.md.95407599.lean.js",revision:null},{url:"assets/commands_new-execute.md.2745092b.js",revision:null},{url:"assets/commands_new-execute.md.2745092b.lean.js",revision:null},{url:"assets/commands_on-first-join.md.59c39b1e.js",revision:null},{url:"assets/commands_on-first-join.md.59c39b1e.lean.js",revision:null},{url:"assets/commands_on-player-death.md.5c3aa349.js",revision:null},{url:"assets/commands_on-player-death.md.5c3aa349.lean.js",revision:null},{url:"assets/commands_on-player-join.md.ad807efa.js",revision:null},{url:"assets/commands_on-player-join.md.ad807efa.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.c3f1e5f0.js",revision:null},{url:"assets/commands_on-player-leave.md.c3f1e5f0.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.e69b4ba0.js",revision:null},{url:"assets/commands_on-player-respawn.md.e69b4ba0.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.ea840d80.js",revision:null},{url:"assets/commands_relative-coordinates.md.ea840d80.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.92edc10e.js",revision:null},{url:"assets/commands_scoreboard-operations.md.92edc10e.lean.js",revision:null},{url:"assets/commands_selectors.md.2ff00340.js",revision:null},{url:"assets/commands_selectors.md.2ff00340.lean.js",revision:null},{url:"assets/commands_tellraw.md.a3ecc9f1.js",revision:null},{url:"assets/commands_tellraw.md.a3ecc9f1.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.93c7b9fa.js",revision:null},{url:"assets/commands_tick_json-creations.md.93c7b9fa.lean.js",revision:null},{url:"assets/commands_timers.md.f3bc91b8.js",revision:null},{url:"assets/commands_timers.md.f3bc91b8.lean.js",revision:null},{url:"assets/concepts_contents.md.e1d445cf.js",revision:null},{url:"assets/concepts_contents.md.e1d445cf.lean.js",revision:null},{url:"assets/concepts_emojis.md.96a26ea8.js",revision:null},{url:"assets/concepts_emojis.md.96a26ea8.lean.js",revision:null},{url:"assets/concepts_index.md.d0ea1906.js",revision:null},{url:"assets/concepts_index.md.d0ea1906.lean.js",revision:null},{url:"assets/concepts_molang.md.67e31544.js",revision:null},{url:"assets/concepts_molang.md.67e31544.lean.js",revision:null},{url:"assets/concepts_namespaces.md.c886440c.js",revision:null},{url:"assets/concepts_namespaces.md.c886440c.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.80aef29c.js",revision:null},{url:"assets/concepts_overwriting-assets.md.80aef29c.lean.js",revision:null},{url:"assets/concepts_shaders.md.cfe203bf.js",revision:null},{url:"assets/concepts_shaders.md.cfe203bf.lean.js",revision:null},{url:"assets/concepts_sounds.md.79caa3c9.js",revision:null},{url:"assets/concepts_sounds.md.79caa3c9.lean.js",revision:null},{url:"assets/concepts_subpacks.md.219776e2.js",revision:null},{url:"assets/concepts_subpacks.md.219776e2.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.fdf3e884.js",revision:null},{url:"assets/concepts_text-and-translations.md.fdf3e884.lean.js",revision:null},{url:"assets/concepts_textures-list.md.7f3a9982.js",revision:null},{url:"assets/concepts_textures-list.md.7f3a9982.lean.js",revision:null},{url:"assets/contribute-how-to.md.51533446.js",revision:null},{url:"assets/contribute-how-to.md.51533446.lean.js",revision:null},{url:"assets/contribute-style.md.64e30ae3.js",revision:null},{url:"assets/contribute-style.md.64e30ae3.lean.js",revision:null},{url:"assets/contribute.md.f50dbb50.js",revision:null},{url:"assets/contribute.md.f50dbb50.lean.js",revision:null},{url:"assets/discord.md.eaa97161.js",revision:null},{url:"assets/discord.md.eaa97161.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.410a0fb5.js",revision:null},{url:"assets/documentation_advanced-molang.md.410a0fb5.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.63038528.js",revision:null},{url:"assets/documentation_creative-categories.md.63038528.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.5ed23321.js",revision:null},{url:"assets/documentation_fog-ids.md.5ed23321.lean.js",revision:null},{url:"assets/documentation_index.md.de70bd84.js",revision:null},{url:"assets/documentation_index.md.de70bd84.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.dff6ccb4.js",revision:null},{url:"assets/documentation_material-config-description.md.dff6ccb4.lean.js",revision:null},{url:"assets/documentation_materials.md.6b20d9a1.js",revision:null},{url:"assets/documentation_materials.md.6b20d9a1.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.68ebf549.js",revision:null},{url:"assets/documentation_pack-structure.md.68ebf549.lean.js",revision:null},{url:"assets/documentation_projectiles.md.63ad3f6d.js",revision:null},{url:"assets/documentation_projectiles.md.63ad3f6d.lean.js",revision:null},{url:"assets/documentation_queries.md.86380c5a.js",revision:null},{url:"assets/documentation_queries.md.86380c5a.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.28e2f23c.js",revision:null},{url:"assets/documentation_shared-constructs.md.28e2f23c.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.109971d8.js",revision:null},{url:"assets/documentation_sound-definitions.md.109971d8.lean.js",revision:null},{url:"assets/entities_boat-entities.md.f5747c88.js",revision:null},{url:"assets/entities_boat-entities.md.f5747c88.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.19f95510.js",revision:null},{url:"assets/entities_detecting-other-entities.md.19f95510.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.fc90294e.js",revision:null},{url:"assets/entities_disabling-team-damage.md.fc90294e.lean.js",revision:null},{url:"assets/entities_dummy-components.md.7d2c8890.js",revision:null},{url:"assets/entities_dummy-components.md.7d2c8890.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.c6898f9e.js",revision:null},{url:"assets/entities_dummy-entities.md.c6898f9e.lean.js",revision:null},{url:"assets/entities_entity-attack.md.174ddf28.js",revision:null},{url:"assets/entities_entity-attack.md.174ddf28.lean.js",revision:null},{url:"assets/entities_entity-events.md.bb3551a6.js",revision:null},{url:"assets/entities_entity-events.md.bb3551a6.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.a9dbd521.js",revision:null},{url:"assets/entities_entity-holds-item.md.a9dbd521.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.9d2c8034.js",revision:null},{url:"assets/entities_entity-intro-bp.md.9d2c8034.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.68efa445.js",revision:null},{url:"assets/entities_entity-intro-rp.md.68efa445.lean.js",revision:null},{url:"assets/entities_entity-movement.md.cb38e11f.js",revision:null},{url:"assets/entities_entity-movement.md.cb38e11f.lean.js",revision:null},{url:"assets/entities_entity-properties.md.cdda5e51.js",revision:null},{url:"assets/entities_entity-properties.md.cdda5e51.lean.js",revision:null},{url:"assets/entities_flying-entities.md.9a56a052.js",revision:null},{url:"assets/entities_flying-entities.md.9a56a052.lean.js",revision:null},{url:"assets/entities_index.md.e9a5e674.js",revision:null},{url:"assets/entities_index.md.e9a5e674.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e03cd2ea.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e03cd2ea.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.c97c45ea.js",revision:null},{url:"assets/entities_invulnerable-entities.md.c97c45ea.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.41539c1a.js",revision:null},{url:"assets/entities_look-at-entity.md.41539c1a.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.74276777.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.74276777.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.a89b6760.js",revision:null},{url:"assets/entities_npc-dialogs.md.a89b6760.lean.js",revision:null},{url:"assets/entities_render-controllers.md.c21fb86c.js",revision:null},{url:"assets/entities_render-controllers.md.c21fb86c.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.2352c58f.js",revision:null},{url:"assets/entities_runtime-identifier.md.2352c58f.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.e583b048.js",revision:null},{url:"assets/entities_sleeping-entities.md.e583b048.lean.js",revision:null},{url:"assets/entities_solid-entities.md.95c91ecb.js",revision:null},{url:"assets/entities_solid-entities.md.95c91ecb.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.0fceb018.js",revision:null},{url:"assets/entities_spawn-rules.md.0fceb018.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.43480a8a.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.43480a8a.lean.js",revision:null},{url:"assets/entities_timers.md.1be8544d.js",revision:null},{url:"assets/entities_timers.md.1be8544d.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.8bee7a39.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.8bee7a39.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.2301bb28.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.2301bb28.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.4b7e42cf.js",revision:null},{url:"assets/entities_village-mechanic.md.4b7e42cf.lean.js",revision:null},{url:"assets/entities_vuc-full.md.a0e1cc69.lean.js",revision:null},{url:"assets/entities_vusr-full.md.b11dc4cd.js",revision:null},{url:"assets/entities_vusr-full.md.b11dc4cd.lean.js",revision:null},{url:"assets/graph-test.md.f99373ca.js",revision:null},{url:"assets/graph-test.md.f99373ca.lean.js",revision:null},{url:"assets/guide_addons.md.e29d5940.js",revision:null},{url:"assets/guide_addons.md.e29d5940.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.6daa2f76.js",revision:null},{url:"assets/guide_advancedmanifest.md.6daa2f76.lean.js",revision:null},{url:"assets/guide_blockbench.md.7a6c4443.js",revision:null},{url:"assets/guide_blockbench.md.7a6c4443.lean.js",revision:null},{url:"assets/guide_custom-entity.md.e05ea94c.js",revision:null},{url:"assets/guide_custom-entity.md.e05ea94c.lean.js",revision:null},{url:"assets/guide_custom-item.md.1be9ed8c.js",revision:null},{url:"assets/guide_custom-item.md.1be9ed8c.lean.js",revision:null},{url:"assets/guide_download-packs.md.af3266b4.js",revision:null},{url:"assets/guide_download-packs.md.af3266b4.lean.js",revision:null},{url:"assets/guide_format-version.md.b6a352d4.js",revision:null},{url:"assets/guide_format-version.md.b6a352d4.lean.js",revision:null},{url:"assets/guide_index.md.c8ef42de.js",revision:null},{url:"assets/guide_index.md.c8ef42de.lean.js",revision:null},{url:"assets/guide_introduction.md.4113ff2c.js",revision:null},{url:"assets/guide_introduction.md.4113ff2c.lean.js",revision:null},{url:"assets/guide_loot-table.md.30e1b115.js",revision:null},{url:"assets/guide_loot-table.md.30e1b115.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.357a9ed3.js",revision:null},{url:"assets/guide_project-setup-android.md.357a9ed3.lean.js",revision:null},{url:"assets/guide_project-setup.md.223ae80a.js",revision:null},{url:"assets/guide_project-setup.md.223ae80a.lean.js",revision:null},{url:"assets/guide_software-preparation.md.edd4e60f.js",revision:null},{url:"assets/guide_software-preparation.md.edd4e60f.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.f47b8b35.js",revision:null},{url:"assets/guide_troubleshooting.md.f47b8b35.lean.js",revision:null},{url:"assets/guide_understanding-json.md.60343112.js",revision:null},{url:"assets/guide_understanding-json.md.60343112.lean.js",revision:null},{url:"assets/hacktoberfest.md.24b35a9a.js",revision:null},{url:"assets/hacktoberfest.md.24b35a9a.lean.js",revision:null},{url:"assets/index.md.2baeb18e.js",revision:null},{url:"assets/index.md.2baeb18e.lean.js",revision:null},{url:"assets/items_attachables.md.63330589.js",revision:null},{url:"assets/items_attachables.md.63330589.lean.js",revision:null},{url:"assets/items_custom-armor.md.8ef00903.js",revision:null},{url:"assets/items_custom-armor.md.8ef00903.lean.js",revision:null},{url:"assets/items_custom-weapon.md.f8da85be.js",revision:null},{url:"assets/items_custom-weapon.md.f8da85be.lean.js",revision:null},{url:"assets/items_enchantments.md.08660792.js",revision:null},{url:"assets/items_enchantments.md.08660792.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.f63454da.js",revision:null},{url:"assets/items_equipped-item-commands.md.f63454da.lean.js",revision:null},{url:"assets/items_index.md.655fd42b.js",revision:null},{url:"assets/items_index.md.655fd42b.lean.js",revision:null},{url:"assets/items_item-identifiers.md.21743ca1.js",revision:null},{url:"assets/items_item-identifiers.md.21743ca1.lean.js",revision:null},{url:"assets/items_items-16.md.1c919633.js",revision:null},{url:"assets/items_items-16.md.1c919633.lean.js",revision:null},{url:"assets/items_items-intro.md.b98462e0.js",revision:null},{url:"assets/items_items-intro.md.b98462e0.lean.js",revision:null},{url:"assets/items_spawning-items.md.e9f22e70.js",revision:null},{url:"assets/items_spawning-items.md.e9f22e70.lean.js",revision:null},{url:"assets/items_spear.md.6dfd7801.js",revision:null},{url:"assets/items_spear.md.6dfd7801.lean.js",revision:null},{url:"assets/items_throwable.md.7d79b235.js",revision:null},{url:"assets/items_throwable.md.7d79b235.lean.js",revision:null},{url:"assets/items_tool-durability.md.c79b4529.js",revision:null},{url:"assets/items_tool-durability.md.c79b4529.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.44a66cdd.js",revision:null},{url:"assets/items_troubleshooting-items.md.44a66cdd.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.36758f6f.js",revision:null},{url:"assets/items_vanilla-usage-items.md.36758f6f.lean.js",revision:null},{url:"assets/items_vui-full.md.9b2d0f1a.js",revision:null},{url:"assets/items_vui-full.md.9b2d0f1a.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.ce966d01.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.ce966d01.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.0d1e3fd2.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.0d1e3fd2.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.2c86a373.js",revision:null},{url:"assets/json-ui_best-practices.md.2c86a373.lean.js",revision:null},{url:"assets/json-ui_index.md.b048435c.js",revision:null},{url:"assets/json-ui_index.md.b048435c.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.d2179b87.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.d2179b87.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ea35a657.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ea35a657.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.d1dc0ed0.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.d1dc0ed0.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.d61adbba.js",revision:null},{url:"assets/json-ui_string-to-number.md.d61adbba.lean.js",revision:null},{url:"assets/loot_index.md.dda04ef3.js",revision:null},{url:"assets/loot_index.md.dda04ef3.lean.js",revision:null},{url:"assets/loot_item-functions.md.4798bd4b.js",revision:null},{url:"assets/loot_item-functions.md.4798bd4b.lean.js",revision:null},{url:"assets/loot_loot-tables.md.479305be.js",revision:null},{url:"assets/loot_loot-tables.md.479305be.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.773c43dc.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.773c43dc.lean.js",revision:null},{url:"assets/loot_recipes.md.c50c2df8.js",revision:null},{url:"assets/loot_recipes.md.c50c2df8.lean.js",revision:null},{url:"assets/loot_trade-tables.md.ad05ce90.js",revision:null},{url:"assets/loot_trade-tables.md.ad05ce90.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.7b8c1aee.js",revision:null},{url:"assets/loot_trading-behavior.md.7b8c1aee.lean.js",revision:null},{url:"assets/meta_addon-performance.md.42f2bae8.js",revision:null},{url:"assets/meta_addon-performance.md.42f2bae8.lean.js",revision:null},{url:"assets/meta_index.md.dae5e030.js",revision:null},{url:"assets/meta_index.md.dae5e030.lean.js",revision:null},{url:"assets/meta_jq.md.d80edee7.js",revision:null},{url:"assets/meta_jq.md.d80edee7.lean.js",revision:null},{url:"assets/meta_style-guide.md.68d1fdb4.js",revision:null},{url:"assets/meta_style-guide.md.68d1fdb4.lean.js",revision:null},{url:"assets/meta_useful-links.md.962f5ffa.js",revision:null},{url:"assets/meta_useful-links.md.962f5ffa.lean.js",revision:null},{url:"assets/meta_using-schemas.md.3cd8c8c4.js",revision:null},{url:"assets/meta_using-schemas.md.3cd8c8c4.lean.js",revision:null},{url:"assets/meta_version-control.md.b99ff4da.js",revision:null},{url:"assets/meta_version-control.md.b99ff4da.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.ca5653db.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.ca5653db.lean.js",revision:null},{url:"assets/nbt_index.md.d000b475.js",revision:null},{url:"assets/nbt_index.md.d000b475.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.15af5792.js",revision:null},{url:"assets/nbt_mcstructure.md.15af5792.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.3517e5c6.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.3517e5c6.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.fc8f7e9a.js",revision:null},{url:"assets/nbt_step-by-step-example.md.fc8f7e9a.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.d0d25315.js",revision:null},{url:"assets/nbt_structure-limits.md.d0d25315.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.f4f5929c.js",revision:null},{url:"assets/particles_disabling-particles.md.f4f5929c.lean.js",revision:null},{url:"assets/particles_index.md.a2997596.js",revision:null},{url:"assets/particles_index.md.a2997596.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.47efa064.js",revision:null},{url:"assets/particles_particles-and-sounds.md.47efa064.lean.js",revision:null},{url:"assets/particles_particles.md.8988d8d9.js",revision:null},{url:"assets/particles_particles.md.8988d8d9.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.5e357f48.js",revision:null},{url:"assets/particles_vanilla-particles.md.5e357f48.lean.js",revision:null},{url:"assets/privacy.md.d99049c5.js",revision:null},{url:"assets/privacy.md.d99049c5.lean.js",revision:null},{url:"assets/scripting_api-environment.md.62476e69.js",revision:null},{url:"assets/scripting_api-environment.md.62476e69.lean.js",revision:null},{url:"assets/scripting_custom-command.md.a4af911c.js",revision:null},{url:"assets/scripting_custom-command.md.a4af911c.lean.js",revision:null},{url:"assets/scripting_game-tests.md.aca1ac36.js",revision:null},{url:"assets/scripting_game-tests.md.aca1ac36.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.f6779611.js",revision:null},{url:"assets/scripting_gametest-form.md.f6779611.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.85971441.js",revision:null},{url:"assets/scripting_gametest-qna.md.85971441.lean.js",revision:null},{url:"assets/scripting_index.md.d97a6392.js",revision:null},{url:"assets/scripting_index.md.d97a6392.lean.js",revision:null},{url:"assets/scripting_resources.md.59de3a49.js",revision:null},{url:"assets/scripting_resources.md.59de3a49.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.254fbb83.js",revision:null},{url:"assets/scripting_saving-loading.md.254fbb83.lean.js",revision:null},{url:"assets/scripting_script-net.md.54ab8677.js",revision:null},{url:"assets/scripting_script-net.md.54ab8677.lean.js",revision:null},{url:"assets/scripting_script-server.md.4df80f66.js",revision:null},{url:"assets/scripting_script-server.md.4df80f66.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.854ffe1c.js",revision:null},{url:"assets/scripting_script-watchdog.md.854ffe1c.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.fb6952e0.js",revision:null},{url:"assets/scripting_scripting-intro.md.fb6952e0.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.8e48eea0.js",revision:null},{url:"assets/scripting_starting-scripts.md.8e48eea0.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.4b0036e4.js",revision:null},{url:"assets/scripting_troubleshooting.md.4b0036e4.lean.js",revision:null},{url:"assets/scripting_typescript.md.e9c74019.js",revision:null},{url:"assets/scripting_typescript.md.e9c74019.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.259b5235.js",revision:null},{url:"assets/scripting_what-is-script.md.259b5235.lean.js",revision:null},{url:"assets/servers_index.md.336e3b28.js",revision:null},{url:"assets/servers_index.md.336e3b28.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.fa45eec1.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.fa45eec1.lean.js",revision:null},{url:"assets/servers_server-software.md.d68716d6.js",revision:null},{url:"assets/servers_server-software.md.d68716d6.lean.js",revision:null},{url:"assets/style.1c46c954.css",revision:null},{url:"assets/test.md.539d9e97.js",revision:null},{url:"assets/test.md.539d9e97.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.3a378374.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.3a378374.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.b0198b8d.js",revision:null},{url:"assets/visuals_animation-effects.md.b0198b8d.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.c8ff843b.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.c8ff843b.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.6c7c75ae.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.6c7c75ae.lean.js",revision:null},{url:"assets/visuals_death-animations.md.0509382d.js",revision:null},{url:"assets/visuals_death-animations.md.0509382d.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.ff3989e5.js",revision:null},{url:"assets/visuals_glowing-texture.md.ff3989e5.lean.js",revision:null},{url:"assets/visuals_index.md.28957ec6.js",revision:null},{url:"assets/visuals_index.md.28957ec6.lean.js",revision:null},{url:"assets/visuals_introduction.md.1da908b2.js",revision:null},{url:"assets/visuals_introduction.md.1da908b2.lean.js",revision:null},{url:"assets/visuals_leash-position.md.d7265652.js",revision:null},{url:"assets/visuals_leash-position.md.d7265652.lean.js",revision:null},{url:"assets/visuals_materials.md.db054cfb.js",revision:null},{url:"assets/visuals_materials.md.db054cfb.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.a953e5b0.js",revision:null},{url:"assets/visuals_math-based-animations.md.a953e5b0.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.c05ce74a.js",revision:null},{url:"assets/visuals_player-geometry.md.c05ce74a.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.3fbdf66b.js",revision:null},{url:"assets/visuals_remove-shadows.md.3fbdf66b.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.c1026ed5.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.c1026ed5.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.dda1f9c5.js",revision:null},{url:"assets/visuals_structure-presentation.md.dda1f9c5.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.96eb3be0.js",revision:null},{url:"assets/vr_editing-your-first-model.md.96eb3be0.lean.js",revision:null},{url:"assets/vr_index.md.5725f835.js",revision:null},{url:"assets/vr_index.md.5725f835.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.3ce335d7.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.3ce335d7.lean.js",revision:null},{url:"assets/vr_pack_setup.md.f2e73898.js",revision:null},{url:"assets/vr_pack_setup.md.f2e73898.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.72264e1f.js",revision:null},{url:"assets/world-generation_biome-tags.md.72264e1f.lean.js",revision:null},{url:"assets/world-generation_biomes.md.af240a07.js",revision:null},{url:"assets/world-generation_biomes.md.af240a07.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.3a947dd8.js",revision:null},{url:"assets/world-generation_custom-ores.md.3a947dd8.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.4e81703d.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.4e81703d.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.5ed20bb2.js",revision:null},{url:"assets/world-generation_feature-types.md.5ed20bb2.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.74963d40.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.74963d40.lean.js",revision:null},{url:"assets/world-generation_index.md.fc604e9d.js",revision:null},{url:"assets/world-generation_index.md.fc604e9d.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.b576c75f.js",revision:null},{url:"assets/world-generation_structure-features.md.b576c75f.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.91120ca9.js",revision:null},{url:"assets/world-generation_surface-builder.md.91120ca9.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.073e9366.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.073e9366.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
