if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.5f3493a0.js",revision:null},{url:"assets/404.md.5f3493a0.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.8b7625ac.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.8b7625ac.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.c0596b5d.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.c0596b5d.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.930c3a4a.js",revision:null},{url:"assets/animation-controllers_death-commands.md.930c3a4a.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.005811f7.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.005811f7.lean.js",revision:null},{url:"assets/animation-controllers_index.md.9c1e88fa.js",revision:null},{url:"assets/animation-controllers_index.md.9c1e88fa.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.ff0d4fc7.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.ff0d4fc7.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.2138d12e.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.2138d12e.lean.js",revision:null},{url:"assets/app.18f015ae.js",revision:null},{url:"assets/blocks_applying-effects.md.09be2bf7.js",revision:null},{url:"assets/blocks_applying-effects.md.09be2bf7.lean.js",revision:null},{url:"assets/blocks_block-materials.md.ea81999f.js",revision:null},{url:"assets/blocks_block-materials.md.ea81999f.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.a721a3cc.js",revision:null},{url:"assets/blocks_block-shapes.md.a721a3cc.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.68ee8192.js",revision:null},{url:"assets/blocks_block-sounds.md.68ee8192.lean.js",revision:null},{url:"assets/blocks_block-tags.md.8e6aece4.js",revision:null},{url:"assets/blocks_block-tags.md.8e6aece4.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.45c37ac1.js",revision:null},{url:"assets/blocks_block-texture-variation.md.45c37ac1.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.60c35590.js",revision:null},{url:"assets/blocks_blocks-experimental.md.60c35590.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.712e3b39.js",revision:null},{url:"assets/blocks_blocks-intro.md.712e3b39.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.6faa8c2f.js",revision:null},{url:"assets/blocks_blocks-stable.md.6faa8c2f.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.98ceca3c.js",revision:null},{url:"assets/blocks_custom-crops.md.98ceca3c.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.c94c23bd.js",revision:null},{url:"assets/blocks_custom-fluids.md.c94c23bd.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.a143bcfb.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.a143bcfb.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.188e33ad.js",revision:null},{url:"assets/blocks_custom-tree.md.188e33ad.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.40b066f4.js",revision:null},{url:"assets/blocks_fake-blocks.md.40b066f4.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.f7f5a33b.js",revision:null},{url:"assets/blocks_flipbook-textures.md.f7f5a33b.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.b6d9da61.js",revision:null},{url:"assets/blocks_head-like-rotation.md.b6d9da61.lean.js",revision:null},{url:"assets/blocks_index.md.c0714aa0.js",revision:null},{url:"assets/blocks_index.md.c0714aa0.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d2533f17.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d2533f17.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c39a8c6d.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c39a8c6d.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.b250eb84.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.b250eb84.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.59f3af27.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.59f3af27.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.fdf5740b.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.c1c31ae7.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.9499c257.js",revision:null},{url:"assets/commands_block-states.md.9499c257.lean.js",revision:null},{url:"assets/commands_damage.md.00fed93d.js",revision:null},{url:"assets/commands_damage.md.00fed93d.lean.js",revision:null},{url:"assets/commands_entity-counter.md.7d32447b.js",revision:null},{url:"assets/commands_entity-counter.md.7d32447b.lean.js",revision:null},{url:"assets/commands_index.md.b15d32df.js",revision:null},{url:"assets/commands_index.md.b15d32df.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.b0461cbb.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.b0461cbb.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.ea1bd074.js",revision:null},{url:"assets/commands_mcfunctions.md.ea1bd074.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.4b99fcf4.js",revision:null},{url:"assets/commands_nbt-commands.md.4b99fcf4.lean.js",revision:null},{url:"assets/commands_new-execute.md.181253cd.js",revision:null},{url:"assets/commands_new-execute.md.181253cd.lean.js",revision:null},{url:"assets/commands_on-first-join.md.64e4260a.js",revision:null},{url:"assets/commands_on-first-join.md.64e4260a.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.abfe0672.js",revision:null},{url:"assets/commands_on-first-world-load.md.abfe0672.lean.js",revision:null},{url:"assets/commands_on-player-death.md.6709a1a8.js",revision:null},{url:"assets/commands_on-player-death.md.6709a1a8.lean.js",revision:null},{url:"assets/commands_on-player-join.md.ced02597.js",revision:null},{url:"assets/commands_on-player-join.md.ced02597.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.ff1cda06.js",revision:null},{url:"assets/commands_on-player-leave.md.ff1cda06.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.f6e9576f.js",revision:null},{url:"assets/commands_on-player-respawn.md.f6e9576f.lean.js",revision:null},{url:"assets/commands_playsound.md.cbce9d33.js",revision:null},{url:"assets/commands_playsound.md.cbce9d33.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.8dd62abf.js",revision:null},{url:"assets/commands_relative-coordinates.md.8dd62abf.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.83bdd306.js",revision:null},{url:"assets/commands_scoreboard-operations.md.83bdd306.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.a30b968b.js",revision:null},{url:"assets/commands_scoreboard-timers.md.a30b968b.lean.js",revision:null},{url:"assets/commands_selectors.md.efa933d8.js",revision:null},{url:"assets/commands_selectors.md.efa933d8.lean.js",revision:null},{url:"assets/commands_tellraw.md.b9c70445.js",revision:null},{url:"assets/commands_tellraw.md.b9c70445.lean.js",revision:null},{url:"assets/concepts_contents.md.dcab2cda.js",revision:null},{url:"assets/concepts_contents.md.dcab2cda.lean.js",revision:null},{url:"assets/concepts_emojis.md.c9f39f5a.js",revision:null},{url:"assets/concepts_emojis.md.c9f39f5a.lean.js",revision:null},{url:"assets/concepts_index.md.600dc22b.js",revision:null},{url:"assets/concepts_index.md.600dc22b.lean.js",revision:null},{url:"assets/concepts_molang.md.13a4ab49.js",revision:null},{url:"assets/concepts_molang.md.13a4ab49.lean.js",revision:null},{url:"assets/concepts_namespaces.md.8cc177f2.js",revision:null},{url:"assets/concepts_namespaces.md.8cc177f2.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.3dbfc208.js",revision:null},{url:"assets/concepts_overwriting-assets.md.3dbfc208.lean.js",revision:null},{url:"assets/concepts_shaders.md.a97a4a09.js",revision:null},{url:"assets/concepts_shaders.md.a97a4a09.lean.js",revision:null},{url:"assets/concepts_sounds.md.67526ea4.js",revision:null},{url:"assets/concepts_sounds.md.67526ea4.lean.js",revision:null},{url:"assets/concepts_subpacks.md.806f9118.js",revision:null},{url:"assets/concepts_subpacks.md.806f9118.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.a5ec7fde.js",revision:null},{url:"assets/concepts_text-and-translations.md.a5ec7fde.lean.js",revision:null},{url:"assets/concepts_textures-list.md.da146954.js",revision:null},{url:"assets/concepts_textures-list.md.da146954.lean.js",revision:null},{url:"assets/contribute-how-to.md.ff964724.js",revision:null},{url:"assets/contribute-how-to.md.ff964724.lean.js",revision:null},{url:"assets/contribute-style.md.98970bd2.js",revision:null},{url:"assets/contribute-style.md.98970bd2.lean.js",revision:null},{url:"assets/contribute.md.4fa313b4.js",revision:null},{url:"assets/contribute.md.4fa313b4.lean.js",revision:null},{url:"assets/discord.md.1ac9834b.js",revision:null},{url:"assets/discord.md.1ac9834b.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.15801110.js",revision:null},{url:"assets/documentation_advanced-molang.md.15801110.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.e8d721e8.js",revision:null},{url:"assets/documentation_creative-categories.md.e8d721e8.lean.js",revision:null},{url:"assets/documentation_file-types.md.72fbe04e.js",revision:null},{url:"assets/documentation_file-types.md.72fbe04e.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.b04bc8b0.js",revision:null},{url:"assets/documentation_fog-ids.md.b04bc8b0.lean.js",revision:null},{url:"assets/documentation_index.md.dc6e5820.js",revision:null},{url:"assets/documentation_index.md.dc6e5820.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.7eb17e55.js",revision:null},{url:"assets/documentation_material-config-description.md.7eb17e55.lean.js",revision:null},{url:"assets/documentation_materials.md.4bb34166.js",revision:null},{url:"assets/documentation_materials.md.4bb34166.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.54c4957f.js",revision:null},{url:"assets/documentation_pack-structure.md.54c4957f.lean.js",revision:null},{url:"assets/documentation_projectiles.md.51f012cc.js",revision:null},{url:"assets/documentation_projectiles.md.51f012cc.lean.js",revision:null},{url:"assets/documentation_queries.md.93c2ee5b.js",revision:null},{url:"assets/documentation_queries.md.93c2ee5b.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.4a2a6a04.js",revision:null},{url:"assets/documentation_shared-constructs.md.4a2a6a04.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.d97b3159.js",revision:null},{url:"assets/documentation_sound-definitions.md.d97b3159.lean.js",revision:null},{url:"assets/entities_boat-entities.md.77b368ba.js",revision:null},{url:"assets/entities_boat-entities.md.77b368ba.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b7e97504.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b7e97504.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.042ec297.js",revision:null},{url:"assets/entities_disabling-team-damage.md.042ec297.lean.js",revision:null},{url:"assets/entities_dummy-components.md.fdbee097.js",revision:null},{url:"assets/entities_dummy-components.md.fdbee097.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.7a985ac6.js",revision:null},{url:"assets/entities_dummy-entities.md.7a985ac6.lean.js",revision:null},{url:"assets/entities_entity-attack.md.ff49c960.js",revision:null},{url:"assets/entities_entity-attack.md.ff49c960.lean.js",revision:null},{url:"assets/entities_entity-events.md.06dc384b.js",revision:null},{url:"assets/entities_entity-events.md.06dc384b.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.0abc0502.js",revision:null},{url:"assets/entities_entity-holds-item.md.0abc0502.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.285381ac.js",revision:null},{url:"assets/entities_entity-intro-bp.md.285381ac.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.3145efa8.js",revision:null},{url:"assets/entities_entity-intro-rp.md.3145efa8.lean.js",revision:null},{url:"assets/entities_entity-movement.md.c0c863e9.js",revision:null},{url:"assets/entities_entity-movement.md.c0c863e9.lean.js",revision:null},{url:"assets/entities_entity-properties.md.a5346666.js",revision:null},{url:"assets/entities_entity-properties.md.a5346666.lean.js",revision:null},{url:"assets/entities_flying-entities.md.7be688f4.js",revision:null},{url:"assets/entities_flying-entities.md.7be688f4.lean.js",revision:null},{url:"assets/entities_index.md.3c624e8b.js",revision:null},{url:"assets/entities_index.md.3c624e8b.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.62ce5381.js",revision:null},{url:"assets/entities_introduction-to-aec.md.62ce5381.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1d1dc80e.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1d1dc80e.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.c7ff3c0e.js",revision:null},{url:"assets/entities_look-at-entity.md.c7ff3c0e.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.fc4ccabe.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.fc4ccabe.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.b66c4869.js",revision:null},{url:"assets/entities_npc-dialogs.md.b66c4869.lean.js",revision:null},{url:"assets/entities_render-controllers.md.36fa8074.js",revision:null},{url:"assets/entities_render-controllers.md.36fa8074.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.a3663d76.js",revision:null},{url:"assets/entities_runtime-identifier.md.a3663d76.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.2dffe5c1.js",revision:null},{url:"assets/entities_sleeping-entities.md.2dffe5c1.lean.js",revision:null},{url:"assets/entities_solid-entities.md.56e90518.js",revision:null},{url:"assets/entities_solid-entities.md.56e90518.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.b51f1182.js",revision:null},{url:"assets/entities_spawn-rules.md.b51f1182.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.7a51047b.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.7a51047b.lean.js",revision:null},{url:"assets/entities_timers.md.35ac450e.js",revision:null},{url:"assets/entities_timers.md.35ac450e.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.51635002.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.51635002.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.2f899edb.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.2f899edb.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.ef8b4781.js",revision:null},{url:"assets/entities_village-mechanic.md.ef8b4781.lean.js",revision:null},{url:"assets/entities_vuc-full.md.62501533.lean.js",revision:null},{url:"assets/entities_vusr-full.md.07314816.js",revision:null},{url:"assets/entities_vusr-full.md.07314816.lean.js",revision:null},{url:"assets/graph-test.md.97d7cbf0.js",revision:null},{url:"assets/graph-test.md.97d7cbf0.lean.js",revision:null},{url:"assets/guide_addons.md.e31114c8.js",revision:null},{url:"assets/guide_addons.md.e31114c8.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.c98254d1.js",revision:null},{url:"assets/guide_advancedmanifest.md.c98254d1.lean.js",revision:null},{url:"assets/guide_blockbench.md.2079fa3c.js",revision:null},{url:"assets/guide_blockbench.md.2079fa3c.lean.js",revision:null},{url:"assets/guide_custom-entity.md.f706798f.js",revision:null},{url:"assets/guide_custom-entity.md.f706798f.lean.js",revision:null},{url:"assets/guide_custom-item.md.264cfc45.js",revision:null},{url:"assets/guide_custom-item.md.264cfc45.lean.js",revision:null},{url:"assets/guide_download-packs.md.ad33e5b3.js",revision:null},{url:"assets/guide_download-packs.md.ad33e5b3.lean.js",revision:null},{url:"assets/guide_format-version.md.0b603b58.js",revision:null},{url:"assets/guide_format-version.md.0b603b58.lean.js",revision:null},{url:"assets/guide_index.md.a039e187.js",revision:null},{url:"assets/guide_index.md.a039e187.lean.js",revision:null},{url:"assets/guide_introduction.md.cec59159.js",revision:null},{url:"assets/guide_introduction.md.cec59159.lean.js",revision:null},{url:"assets/guide_loot-table.md.099c2555.js",revision:null},{url:"assets/guide_loot-table.md.099c2555.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.81f4ad1b.js",revision:null},{url:"assets/guide_project-setup-android.md.81f4ad1b.lean.js",revision:null},{url:"assets/guide_project-setup.md.b22c5282.js",revision:null},{url:"assets/guide_project-setup.md.b22c5282.lean.js",revision:null},{url:"assets/guide_software-preparation.md.2b318f33.js",revision:null},{url:"assets/guide_software-preparation.md.2b318f33.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.fcd4e5e7.js",revision:null},{url:"assets/guide_troubleshooting.md.fcd4e5e7.lean.js",revision:null},{url:"assets/guide_understanding-json.md.853aa7c8.js",revision:null},{url:"assets/guide_understanding-json.md.853aa7c8.lean.js",revision:null},{url:"assets/hacktoberfest.md.d90384b1.js",revision:null},{url:"assets/hacktoberfest.md.d90384b1.lean.js",revision:null},{url:"assets/index.md.8ade0238.js",revision:null},{url:"assets/index.md.8ade0238.lean.js",revision:null},{url:"assets/items_attachables.md.59a80f9d.js",revision:null},{url:"assets/items_attachables.md.59a80f9d.lean.js",revision:null},{url:"assets/items_custom-armor.md.f31fac90.js",revision:null},{url:"assets/items_custom-armor.md.f31fac90.lean.js",revision:null},{url:"assets/items_custom-weapon.md.0321c7c2.js",revision:null},{url:"assets/items_custom-weapon.md.0321c7c2.lean.js",revision:null},{url:"assets/items_enchantments.md.e39b10f5.js",revision:null},{url:"assets/items_enchantments.md.e39b10f5.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.a609636b.js",revision:null},{url:"assets/items_equipped-item-commands.md.a609636b.lean.js",revision:null},{url:"assets/items_index.md.fcd4edfa.js",revision:null},{url:"assets/items_index.md.fcd4edfa.lean.js",revision:null},{url:"assets/items_item-identifiers.md.be31dc90.js",revision:null},{url:"assets/items_item-identifiers.md.be31dc90.lean.js",revision:null},{url:"assets/items_items-16.md.f1cc7496.js",revision:null},{url:"assets/items_items-16.md.f1cc7496.lean.js",revision:null},{url:"assets/items_items-intro.md.dd2c56bd.js",revision:null},{url:"assets/items_items-intro.md.dd2c56bd.lean.js",revision:null},{url:"assets/items_spawning-items.md.07a36437.js",revision:null},{url:"assets/items_spawning-items.md.07a36437.lean.js",revision:null},{url:"assets/items_spear.md.414b7053.js",revision:null},{url:"assets/items_spear.md.414b7053.lean.js",revision:null},{url:"assets/items_throwable.md.31fd74a9.js",revision:null},{url:"assets/items_throwable.md.31fd74a9.lean.js",revision:null},{url:"assets/items_tool-durability.md.46e91fba.js",revision:null},{url:"assets/items_tool-durability.md.46e91fba.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.c158938d.js",revision:null},{url:"assets/items_troubleshooting-items.md.c158938d.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.79869dab.js",revision:null},{url:"assets/items_vanilla-usage-items.md.79869dab.lean.js",revision:null},{url:"assets/items_vui-full.md.64e9c407.js",revision:null},{url:"assets/items_vui-full.md.64e9c407.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.cfc56513.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.cfc56513.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.fea204b8.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.fea204b8.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.3cb087ce.js",revision:null},{url:"assets/json-ui_best-practices.md.3cb087ce.lean.js",revision:null},{url:"assets/json-ui_index.md.e1b1ccd8.js",revision:null},{url:"assets/json-ui_index.md.e1b1ccd8.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.4ac4c28b.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.4ac4c28b.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.933734a0.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.933734a0.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b54932fd.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b54932fd.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.def66f34.js",revision:null},{url:"assets/json-ui_string-to-number.md.def66f34.lean.js",revision:null},{url:"assets/loot_index.md.0c81ab52.js",revision:null},{url:"assets/loot_index.md.0c81ab52.lean.js",revision:null},{url:"assets/loot_item-functions.md.288fdc3d.js",revision:null},{url:"assets/loot_item-functions.md.288fdc3d.lean.js",revision:null},{url:"assets/loot_loot-tables.md.7f3a03ef.js",revision:null},{url:"assets/loot_loot-tables.md.7f3a03ef.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.2f345226.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.2f345226.lean.js",revision:null},{url:"assets/loot_recipes.md.c37e9ad6.js",revision:null},{url:"assets/loot_recipes.md.c37e9ad6.lean.js",revision:null},{url:"assets/loot_trade-tables.md.5e6f606f.js",revision:null},{url:"assets/loot_trade-tables.md.5e6f606f.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.0028979f.js",revision:null},{url:"assets/loot_trading-behavior.md.0028979f.lean.js",revision:null},{url:"assets/meta_addon-performance.md.4a96e8d3.js",revision:null},{url:"assets/meta_addon-performance.md.4a96e8d3.lean.js",revision:null},{url:"assets/meta_index.md.ac02f8d5.js",revision:null},{url:"assets/meta_index.md.ac02f8d5.lean.js",revision:null},{url:"assets/meta_jq.md.fee7fbf7.js",revision:null},{url:"assets/meta_jq.md.fee7fbf7.lean.js",revision:null},{url:"assets/meta_style-guide.md.92ac19e6.js",revision:null},{url:"assets/meta_style-guide.md.92ac19e6.lean.js",revision:null},{url:"assets/meta_useful-links.md.75d2f7e7.js",revision:null},{url:"assets/meta_useful-links.md.75d2f7e7.lean.js",revision:null},{url:"assets/meta_using-schemas.md.5ed658f2.js",revision:null},{url:"assets/meta_using-schemas.md.5ed658f2.lean.js",revision:null},{url:"assets/meta_version-control.md.c563fe75.js",revision:null},{url:"assets/meta_version-control.md.c563fe75.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.868b3871.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.868b3871.lean.js",revision:null},{url:"assets/nbt_index.md.6598aa0d.js",revision:null},{url:"assets/nbt_index.md.6598aa0d.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.9a957748.js",revision:null},{url:"assets/nbt_mcstructure.md.9a957748.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.c5986d37.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.c5986d37.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.91a3448f.js",revision:null},{url:"assets/nbt_step-by-step-example.md.91a3448f.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.3480e445.js",revision:null},{url:"assets/nbt_structure-limits.md.3480e445.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.512510e7.js",revision:null},{url:"assets/particles_disabling-particles.md.512510e7.lean.js",revision:null},{url:"assets/particles_index.md.199e8543.js",revision:null},{url:"assets/particles_index.md.199e8543.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.1e7f5dbf.js",revision:null},{url:"assets/particles_particles-and-sounds.md.1e7f5dbf.lean.js",revision:null},{url:"assets/particles_particles.md.38418a5f.js",revision:null},{url:"assets/particles_particles.md.38418a5f.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.05689d4d.js",revision:null},{url:"assets/particles_vanilla-particles.md.05689d4d.lean.js",revision:null},{url:"assets/privacy.md.df1771ce.js",revision:null},{url:"assets/privacy.md.df1771ce.lean.js",revision:null},{url:"assets/scripting_api-environment.md.e0a7855d.js",revision:null},{url:"assets/scripting_api-environment.md.e0a7855d.lean.js",revision:null},{url:"assets/scripting_custom-command.md.c005f554.js",revision:null},{url:"assets/scripting_custom-command.md.c005f554.lean.js",revision:null},{url:"assets/scripting_game-tests.md.01f05efa.js",revision:null},{url:"assets/scripting_game-tests.md.01f05efa.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.ba02d25f.js",revision:null},{url:"assets/scripting_gametest-form.md.ba02d25f.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.a0577c28.js",revision:null},{url:"assets/scripting_gametest-qna.md.a0577c28.lean.js",revision:null},{url:"assets/scripting_index.md.1c163ca6.js",revision:null},{url:"assets/scripting_index.md.1c163ca6.lean.js",revision:null},{url:"assets/scripting_resources.md.b9e9c80b.js",revision:null},{url:"assets/scripting_resources.md.b9e9c80b.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.873524fb.js",revision:null},{url:"assets/scripting_saving-loading.md.873524fb.lean.js",revision:null},{url:"assets/scripting_script-net.md.0bea0a67.js",revision:null},{url:"assets/scripting_script-net.md.0bea0a67.lean.js",revision:null},{url:"assets/scripting_script-server.md.7aaa8dd8.js",revision:null},{url:"assets/scripting_script-server.md.7aaa8dd8.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.32a6ad85.js",revision:null},{url:"assets/scripting_script-watchdog.md.32a6ad85.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.58ff494a.js",revision:null},{url:"assets/scripting_scripting-intro.md.58ff494a.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.221d2f5b.js",revision:null},{url:"assets/scripting_starting-scripts.md.221d2f5b.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.fdf0b903.js",revision:null},{url:"assets/scripting_troubleshooting.md.fdf0b903.lean.js",revision:null},{url:"assets/scripting_typescript.md.61d4bf7e.js",revision:null},{url:"assets/scripting_typescript.md.61d4bf7e.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.8d75efe2.js",revision:null},{url:"assets/scripting_what-is-script.md.8d75efe2.lean.js",revision:null},{url:"assets/servers_index.md.4c5d212a.js",revision:null},{url:"assets/servers_index.md.4c5d212a.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.236044ec.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.236044ec.lean.js",revision:null},{url:"assets/servers_server-software.md.5b4583fa.js",revision:null},{url:"assets/servers_server-software.md.5b4583fa.lean.js",revision:null},{url:"assets/style.e44c8e98.css",revision:null},{url:"assets/test.md.50636ca3.js",revision:null},{url:"assets/test.md.50636ca3.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.6f83c52a.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.6f83c52a.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.3b666232.js",revision:null},{url:"assets/visuals_animation-effects.md.3b666232.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.baa9b627.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.baa9b627.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.f959f8a4.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.f959f8a4.lean.js",revision:null},{url:"assets/visuals_death-animations.md.991270ee.js",revision:null},{url:"assets/visuals_death-animations.md.991270ee.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.9e831e3f.js",revision:null},{url:"assets/visuals_glowing-texture.md.9e831e3f.lean.js",revision:null},{url:"assets/visuals_index.md.3397e3df.js",revision:null},{url:"assets/visuals_index.md.3397e3df.lean.js",revision:null},{url:"assets/visuals_introduction.md.c5458bc4.js",revision:null},{url:"assets/visuals_introduction.md.c5458bc4.lean.js",revision:null},{url:"assets/visuals_leash-position.md.615f0189.js",revision:null},{url:"assets/visuals_leash-position.md.615f0189.lean.js",revision:null},{url:"assets/visuals_materials.md.159a53c2.js",revision:null},{url:"assets/visuals_materials.md.159a53c2.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.3a62206e.js",revision:null},{url:"assets/visuals_math-based-animations.md.3a62206e.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.800804bd.js",revision:null},{url:"assets/visuals_player-geometry.md.800804bd.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.dc74cc16.js",revision:null},{url:"assets/visuals_remove-shadows.md.dc74cc16.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.a83bba8a.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.a83bba8a.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.bfb7119f.js",revision:null},{url:"assets/visuals_structure-presentation.md.bfb7119f.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.261be3bd.js",revision:null},{url:"assets/vr_editing-your-first-model.md.261be3bd.lean.js",revision:null},{url:"assets/vr_index.md.78fafaef.js",revision:null},{url:"assets/vr_index.md.78fafaef.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.0d66cfd7.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.0d66cfd7.lean.js",revision:null},{url:"assets/vr_pack_setup.md.de923a7e.js",revision:null},{url:"assets/vr_pack_setup.md.de923a7e.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.8b0261b6.js",revision:null},{url:"assets/world-generation_biome-tags.md.8b0261b6.lean.js",revision:null},{url:"assets/world-generation_biomes.md.4bcf5045.js",revision:null},{url:"assets/world-generation_biomes.md.4bcf5045.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.9cf31246.js",revision:null},{url:"assets/world-generation_custom-ores.md.9cf31246.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.cd591246.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.cd591246.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.56a1c040.js",revision:null},{url:"assets/world-generation_feature-types.md.56a1c040.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.a55efccc.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.a55efccc.lean.js",revision:null},{url:"assets/world-generation_index.md.a194b68a.js",revision:null},{url:"assets/world-generation_index.md.a194b68a.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.480ef7fb.js",revision:null},{url:"assets/world-generation_structure-features.md.480ef7fb.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.e7d05f95.js",revision:null},{url:"assets/world-generation_surface-builder.md.e7d05f95.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.b974ede5.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.b974ede5.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
