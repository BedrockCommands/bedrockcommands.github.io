if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.fefb3dce.js",revision:null},{url:"assets/404.md.fefb3dce.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.100c401b.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.100c401b.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.6655054f.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.6655054f.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.72b66388.js",revision:null},{url:"assets/animation-controllers_death-commands.md.72b66388.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.a9a474f0.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.a9a474f0.lean.js",revision:null},{url:"assets/animation-controllers_index.md.9799e045.js",revision:null},{url:"assets/animation-controllers_index.md.9799e045.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.7bbcdf61.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.7bbcdf61.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.bfdbbda7.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.bfdbbda7.lean.js",revision:null},{url:"assets/app.c51171ee.js",revision:null},{url:"assets/blocks_applying-effects.md.a7e5242c.js",revision:null},{url:"assets/blocks_applying-effects.md.a7e5242c.lean.js",revision:null},{url:"assets/blocks_block-materials.md.f37e42de.js",revision:null},{url:"assets/blocks_block-materials.md.f37e42de.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.c2d2cf61.js",revision:null},{url:"assets/blocks_block-shapes.md.c2d2cf61.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.9b156f44.js",revision:null},{url:"assets/blocks_block-sounds.md.9b156f44.lean.js",revision:null},{url:"assets/blocks_block-tags.md.276cb45f.js",revision:null},{url:"assets/blocks_block-tags.md.276cb45f.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.635db77e.js",revision:null},{url:"assets/blocks_block-texture-variation.md.635db77e.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.5e147daa.js",revision:null},{url:"assets/blocks_blocks-experimental.md.5e147daa.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.0fdf0597.js",revision:null},{url:"assets/blocks_blocks-intro.md.0fdf0597.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.063c76b2.js",revision:null},{url:"assets/blocks_blocks-stable.md.063c76b2.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.2fe99d77.js",revision:null},{url:"assets/blocks_custom-crops.md.2fe99d77.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.cafc6cfe.js",revision:null},{url:"assets/blocks_custom-fluids.md.cafc6cfe.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.78912901.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.78912901.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.5819f737.js",revision:null},{url:"assets/blocks_custom-trees.md.5819f737.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.e8493b12.js",revision:null},{url:"assets/blocks_fake-blocks.md.e8493b12.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.57e65a3a.js",revision:null},{url:"assets/blocks_flipbook-textures.md.57e65a3a.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.2aab1e7a.js",revision:null},{url:"assets/blocks_head-like-rotation.md.2aab1e7a.lean.js",revision:null},{url:"assets/blocks_index.md.84f4c750.js",revision:null},{url:"assets/blocks_index.md.84f4c750.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.1cd8e964.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.1cd8e964.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.bf1589da.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.bf1589da.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.8b351f45.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.8b351f45.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.f9cfd53d.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.f9cfd53d.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/6.07d6a5aa.js",revision:null},{url:"assets/chunks/AlgoliaSearch.d590cdf9.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.7c50e61b.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-entities.md.259953e9.js",revision:null},{url:"assets/commands_block-entities.md.259953e9.lean.js",revision:null},{url:"assets/commands_block-states.md.213e77fd.js",revision:null},{url:"assets/commands_block-states.md.213e77fd.lean.js",revision:null},{url:"assets/commands_damage.md.f44fc5de.js",revision:null},{url:"assets/commands_damage.md.f44fc5de.lean.js",revision:null},{url:"assets/commands_entity-counter.md.20aa4173.js",revision:null},{url:"assets/commands_entity-counter.md.20aa4173.lean.js",revision:null},{url:"assets/commands_index.md.b3ee4bf3.js",revision:null},{url:"assets/commands_index.md.b3ee4bf3.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.b574853e.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.b574853e.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.c73c84df.js",revision:null},{url:"assets/commands_mcfunctions.md.c73c84df.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.5cdfedf0.js",revision:null},{url:"assets/commands_nbt-commands.md.5cdfedf0.lean.js",revision:null},{url:"assets/commands_new-execute.md.eec718fd.js",revision:null},{url:"assets/commands_new-execute.md.eec718fd.lean.js",revision:null},{url:"assets/commands_on-first-join.md.0673e07a.js",revision:null},{url:"assets/commands_on-first-join.md.0673e07a.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.403636fe.js",revision:null},{url:"assets/commands_on-first-world-load.md.403636fe.lean.js",revision:null},{url:"assets/commands_on-player-death.md.2f07ba9a.js",revision:null},{url:"assets/commands_on-player-death.md.2f07ba9a.lean.js",revision:null},{url:"assets/commands_on-player-join.md.44072ff6.js",revision:null},{url:"assets/commands_on-player-join.md.44072ff6.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.96fd462e.js",revision:null},{url:"assets/commands_on-player-leave.md.96fd462e.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.05ba9669.js",revision:null},{url:"assets/commands_on-player-respawn.md.05ba9669.lean.js",revision:null},{url:"assets/commands_playsound.md.ad22e47d.js",revision:null},{url:"assets/commands_playsound.md.ad22e47d.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.1578f472.js",revision:null},{url:"assets/commands_relative-coordinates.md.1578f472.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.6e80b28a.js",revision:null},{url:"assets/commands_scoreboard-operations.md.6e80b28a.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.411ac084.js",revision:null},{url:"assets/commands_scoreboard-timers.md.411ac084.lean.js",revision:null},{url:"assets/commands_selectors.md.c049cd0a.js",revision:null},{url:"assets/commands_selectors.md.c049cd0a.lean.js",revision:null},{url:"assets/commands_tellraw.md.1e24e856.js",revision:null},{url:"assets/commands_tellraw.md.1e24e856.lean.js",revision:null},{url:"assets/concepts_contents.md.7b6274ad.js",revision:null},{url:"assets/concepts_contents.md.7b6274ad.lean.js",revision:null},{url:"assets/concepts_emojis.md.785923c7.js",revision:null},{url:"assets/concepts_emojis.md.785923c7.lean.js",revision:null},{url:"assets/concepts_index.md.e6371517.js",revision:null},{url:"assets/concepts_index.md.e6371517.lean.js",revision:null},{url:"assets/concepts_molang.md.03abe930.js",revision:null},{url:"assets/concepts_molang.md.03abe930.lean.js",revision:null},{url:"assets/concepts_namespaces.md.628a199e.js",revision:null},{url:"assets/concepts_namespaces.md.628a199e.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.64565444.js",revision:null},{url:"assets/concepts_overwriting-assets.md.64565444.lean.js",revision:null},{url:"assets/concepts_shaders.md.04309d42.js",revision:null},{url:"assets/concepts_shaders.md.04309d42.lean.js",revision:null},{url:"assets/concepts_sounds.md.17195bd3.js",revision:null},{url:"assets/concepts_sounds.md.17195bd3.lean.js",revision:null},{url:"assets/concepts_subpacks.md.e7b63bd4.js",revision:null},{url:"assets/concepts_subpacks.md.e7b63bd4.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.1edeae17.js",revision:null},{url:"assets/concepts_text-and-translations.md.1edeae17.lean.js",revision:null},{url:"assets/concepts_textures-list.md.050f7484.js",revision:null},{url:"assets/concepts_textures-list.md.050f7484.lean.js",revision:null},{url:"assets/contribute-how-to.md.77f348f9.js",revision:null},{url:"assets/contribute-how-to.md.77f348f9.lean.js",revision:null},{url:"assets/contribute-style.md.8b20beba.js",revision:null},{url:"assets/contribute-style.md.8b20beba.lean.js",revision:null},{url:"assets/contribute.md.c8f8792c.js",revision:null},{url:"assets/contribute.md.c8f8792c.lean.js",revision:null},{url:"assets/discord.md.37244d35.js",revision:null},{url:"assets/discord.md.37244d35.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.a40df2e4.js",revision:null},{url:"assets/documentation_advanced-molang.md.a40df2e4.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.67b768bb.js",revision:null},{url:"assets/documentation_creative-categories.md.67b768bb.lean.js",revision:null},{url:"assets/documentation_file-types.md.d9a57828.js",revision:null},{url:"assets/documentation_file-types.md.d9a57828.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.ecc457c3.js",revision:null},{url:"assets/documentation_fog-ids.md.ecc457c3.lean.js",revision:null},{url:"assets/documentation_index.md.db434154.js",revision:null},{url:"assets/documentation_index.md.db434154.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.f45ecf44.js",revision:null},{url:"assets/documentation_material-config-description.md.f45ecf44.lean.js",revision:null},{url:"assets/documentation_materials.md.d8e4baa3.js",revision:null},{url:"assets/documentation_materials.md.d8e4baa3.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.43eea6a4.js",revision:null},{url:"assets/documentation_pack-structure.md.43eea6a4.lean.js",revision:null},{url:"assets/documentation_projectiles.md.d90a30d3.js",revision:null},{url:"assets/documentation_projectiles.md.d90a30d3.lean.js",revision:null},{url:"assets/documentation_queries.md.481afd90.js",revision:null},{url:"assets/documentation_queries.md.481afd90.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.459a59de.js",revision:null},{url:"assets/documentation_shared-constructs.md.459a59de.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.60c7f5a6.js",revision:null},{url:"assets/documentation_sound-definitions.md.60c7f5a6.lean.js",revision:null},{url:"assets/entities_boat-entities.md.964d5bd8.js",revision:null},{url:"assets/entities_boat-entities.md.964d5bd8.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b5ce11f5.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b5ce11f5.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.bc2f35f0.js",revision:null},{url:"assets/entities_disabling-team-damage.md.bc2f35f0.lean.js",revision:null},{url:"assets/entities_dummy-components.md.1ef304cd.js",revision:null},{url:"assets/entities_dummy-components.md.1ef304cd.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.c208489a.js",revision:null},{url:"assets/entities_dummy-entities.md.c208489a.lean.js",revision:null},{url:"assets/entities_entity-attack.md.ce82dc34.js",revision:null},{url:"assets/entities_entity-attack.md.ce82dc34.lean.js",revision:null},{url:"assets/entities_entity-events.md.73b2e1f8.js",revision:null},{url:"assets/entities_entity-events.md.73b2e1f8.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.3b6581cd.js",revision:null},{url:"assets/entities_entity-holds-item.md.3b6581cd.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.eaab5a97.js",revision:null},{url:"assets/entities_entity-intro-bp.md.eaab5a97.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.558ff13c.js",revision:null},{url:"assets/entities_entity-intro-rp.md.558ff13c.lean.js",revision:null},{url:"assets/entities_entity-movement.md.ac045a14.js",revision:null},{url:"assets/entities_entity-movement.md.ac045a14.lean.js",revision:null},{url:"assets/entities_entity-properties.md.4152be01.js",revision:null},{url:"assets/entities_entity-properties.md.4152be01.lean.js",revision:null},{url:"assets/entities_flying-entities.md.85d55cc5.js",revision:null},{url:"assets/entities_flying-entities.md.85d55cc5.lean.js",revision:null},{url:"assets/entities_index.md.57420630.js",revision:null},{url:"assets/entities_index.md.57420630.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.d13ade43.js",revision:null},{url:"assets/entities_introduction-to-aec.md.d13ade43.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.eed60344.js",revision:null},{url:"assets/entities_invulnerable-entities.md.eed60344.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.cdeeff96.js",revision:null},{url:"assets/entities_look-at-entity.md.cdeeff96.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.af35b38c.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.af35b38c.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.56b133bd.js",revision:null},{url:"assets/entities_npc-dialogs.md.56b133bd.lean.js",revision:null},{url:"assets/entities_render-controllers.md.18a6cd5d.js",revision:null},{url:"assets/entities_render-controllers.md.18a6cd5d.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.f17b0728.js",revision:null},{url:"assets/entities_runtime-identifier.md.f17b0728.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.7a8d05f2.js",revision:null},{url:"assets/entities_sleeping-entities.md.7a8d05f2.lean.js",revision:null},{url:"assets/entities_solid-entities.md.2040e385.js",revision:null},{url:"assets/entities_solid-entities.md.2040e385.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.20e98ee1.js",revision:null},{url:"assets/entities_spawn-rules.md.20e98ee1.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.9da98485.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.9da98485.lean.js",revision:null},{url:"assets/entities_timers.md.63835bc8.js",revision:null},{url:"assets/entities_timers.md.63835bc8.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.f682737f.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.f682737f.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.6c4ce1ec.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.6c4ce1ec.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.1ef51bc8.js",revision:null},{url:"assets/entities_village-mechanic.md.1ef51bc8.lean.js",revision:null},{url:"assets/entities_vuc-full.md.4e8ebb33.lean.js",revision:null},{url:"assets/entities_vusr-full.md.d4d00ad4.js",revision:null},{url:"assets/entities_vusr-full.md.d4d00ad4.lean.js",revision:null},{url:"assets/graph-test.md.7823d0c6.js",revision:null},{url:"assets/graph-test.md.7823d0c6.lean.js",revision:null},{url:"assets/guide_addons.md.24d128eb.js",revision:null},{url:"assets/guide_addons.md.24d128eb.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.baa1af15.js",revision:null},{url:"assets/guide_advancedmanifest.md.baa1af15.lean.js",revision:null},{url:"assets/guide_blockbench.md.c329c858.js",revision:null},{url:"assets/guide_blockbench.md.c329c858.lean.js",revision:null},{url:"assets/guide_custom-entity.md.d9aac31a.js",revision:null},{url:"assets/guide_custom-entity.md.d9aac31a.lean.js",revision:null},{url:"assets/guide_custom-item.md.c11bcb5d.js",revision:null},{url:"assets/guide_custom-item.md.c11bcb5d.lean.js",revision:null},{url:"assets/guide_download-packs.md.0c5b1e79.js",revision:null},{url:"assets/guide_download-packs.md.0c5b1e79.lean.js",revision:null},{url:"assets/guide_format-version.md.7669d806.js",revision:null},{url:"assets/guide_format-version.md.7669d806.lean.js",revision:null},{url:"assets/guide_index.md.2ceb93a5.js",revision:null},{url:"assets/guide_index.md.2ceb93a5.lean.js",revision:null},{url:"assets/guide_introduction.md.7545f73e.js",revision:null},{url:"assets/guide_introduction.md.7545f73e.lean.js",revision:null},{url:"assets/guide_loot-table.md.840ecbf2.js",revision:null},{url:"assets/guide_loot-table.md.840ecbf2.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.975ec26d.js",revision:null},{url:"assets/guide_project-setup-android.md.975ec26d.lean.js",revision:null},{url:"assets/guide_project-setup.md.1508926f.js",revision:null},{url:"assets/guide_project-setup.md.1508926f.lean.js",revision:null},{url:"assets/guide_software-preparation.md.1884800e.js",revision:null},{url:"assets/guide_software-preparation.md.1884800e.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.58586475.js",revision:null},{url:"assets/guide_troubleshooting.md.58586475.lean.js",revision:null},{url:"assets/guide_understanding-json.md.94365ba1.js",revision:null},{url:"assets/guide_understanding-json.md.94365ba1.lean.js",revision:null},{url:"assets/hacktoberfest.md.2b51a5a6.js",revision:null},{url:"assets/hacktoberfest.md.2b51a5a6.lean.js",revision:null},{url:"assets/index.md.1a618c9b.js",revision:null},{url:"assets/index.md.1a618c9b.lean.js",revision:null},{url:"assets/items_attachables.md.d8b062f6.js",revision:null},{url:"assets/items_attachables.md.d8b062f6.lean.js",revision:null},{url:"assets/items_custom-armor.md.d8a1374f.js",revision:null},{url:"assets/items_custom-armor.md.d8a1374f.lean.js",revision:null},{url:"assets/items_custom-weapon.md.d10db5f8.js",revision:null},{url:"assets/items_custom-weapon.md.d10db5f8.lean.js",revision:null},{url:"assets/items_enchantments.md.d069be2b.js",revision:null},{url:"assets/items_enchantments.md.d069be2b.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.a9a69148.js",revision:null},{url:"assets/items_equipped-item-commands.md.a9a69148.lean.js",revision:null},{url:"assets/items_index.md.daae9361.js",revision:null},{url:"assets/items_index.md.daae9361.lean.js",revision:null},{url:"assets/items_item-identifiers.md.c8aeb108.js",revision:null},{url:"assets/items_item-identifiers.md.c8aeb108.lean.js",revision:null},{url:"assets/items_items-16.md.58b5b8bb.js",revision:null},{url:"assets/items_items-16.md.58b5b8bb.lean.js",revision:null},{url:"assets/items_items-intro.md.2b5aab78.js",revision:null},{url:"assets/items_items-intro.md.2b5aab78.lean.js",revision:null},{url:"assets/items_spawning-items.md.2920e161.js",revision:null},{url:"assets/items_spawning-items.md.2920e161.lean.js",revision:null},{url:"assets/items_spear.md.ee462445.js",revision:null},{url:"assets/items_spear.md.ee462445.lean.js",revision:null},{url:"assets/items_throwable.md.3af0c6d3.js",revision:null},{url:"assets/items_throwable.md.3af0c6d3.lean.js",revision:null},{url:"assets/items_tool-durability.md.054b3289.js",revision:null},{url:"assets/items_tool-durability.md.054b3289.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.c2d16312.js",revision:null},{url:"assets/items_troubleshooting-items.md.c2d16312.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.fb8f8a21.js",revision:null},{url:"assets/items_vanilla-usage-items.md.fb8f8a21.lean.js",revision:null},{url:"assets/items_vui-full.md.e1ba67f1.js",revision:null},{url:"assets/items_vui-full.md.e1ba67f1.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.6f8a7961.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.6f8a7961.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.363aa502.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.363aa502.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.2240b222.js",revision:null},{url:"assets/json-ui_best-practices.md.2240b222.lean.js",revision:null},{url:"assets/json-ui_index.md.25cf877f.js",revision:null},{url:"assets/json-ui_index.md.25cf877f.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.c358359b.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.c358359b.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.bdbafdff.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.bdbafdff.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.34ae1ddd.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.34ae1ddd.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.0b276b2b.js",revision:null},{url:"assets/json-ui_string-to-number.md.0b276b2b.lean.js",revision:null},{url:"assets/loot_index.md.26ab38bf.js",revision:null},{url:"assets/loot_index.md.26ab38bf.lean.js",revision:null},{url:"assets/loot_item-functions.md.1abe10d1.js",revision:null},{url:"assets/loot_item-functions.md.1abe10d1.lean.js",revision:null},{url:"assets/loot_loot-tables.md.727fc30e.js",revision:null},{url:"assets/loot_loot-tables.md.727fc30e.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.620b0556.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.620b0556.lean.js",revision:null},{url:"assets/loot_recipes.md.4193c916.js",revision:null},{url:"assets/loot_recipes.md.4193c916.lean.js",revision:null},{url:"assets/loot_trade-tables.md.d203e249.js",revision:null},{url:"assets/loot_trade-tables.md.d203e249.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.6740e32c.js",revision:null},{url:"assets/loot_trading-behavior.md.6740e32c.lean.js",revision:null},{url:"assets/meta_addon-performance.md.923c64a4.js",revision:null},{url:"assets/meta_addon-performance.md.923c64a4.lean.js",revision:null},{url:"assets/meta_index.md.2c4df28c.js",revision:null},{url:"assets/meta_index.md.2c4df28c.lean.js",revision:null},{url:"assets/meta_jq.md.4792a5e2.js",revision:null},{url:"assets/meta_jq.md.4792a5e2.lean.js",revision:null},{url:"assets/meta_style-guide.md.f9585bf4.js",revision:null},{url:"assets/meta_style-guide.md.f9585bf4.lean.js",revision:null},{url:"assets/meta_useful-links.md.cffed875.js",revision:null},{url:"assets/meta_useful-links.md.cffed875.lean.js",revision:null},{url:"assets/meta_using-schemas.md.f1a545dc.js",revision:null},{url:"assets/meta_using-schemas.md.f1a545dc.lean.js",revision:null},{url:"assets/meta_version-control.md.85a6ea75.js",revision:null},{url:"assets/meta_version-control.md.85a6ea75.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.20d1baf6.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.20d1baf6.lean.js",revision:null},{url:"assets/nbt_index.md.809f8e19.js",revision:null},{url:"assets/nbt_index.md.809f8e19.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.3863f347.js",revision:null},{url:"assets/nbt_mcstructure.md.3863f347.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.4574b183.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.4574b183.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.8c91ad82.js",revision:null},{url:"assets/nbt_step-by-step-example.md.8c91ad82.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.0bec592a.js",revision:null},{url:"assets/nbt_structure-limits.md.0bec592a.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.f5e42bd6.js",revision:null},{url:"assets/particles_disabling-particles.md.f5e42bd6.lean.js",revision:null},{url:"assets/particles_index.md.a9670e6b.js",revision:null},{url:"assets/particles_index.md.a9670e6b.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.a33c249e.js",revision:null},{url:"assets/particles_particles-and-sounds.md.a33c249e.lean.js",revision:null},{url:"assets/particles_particles.md.aca15887.js",revision:null},{url:"assets/particles_particles.md.aca15887.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.8b98a0ef.js",revision:null},{url:"assets/particles_vanilla-particles.md.8b98a0ef.lean.js",revision:null},{url:"assets/privacy.md.121d0c35.js",revision:null},{url:"assets/privacy.md.121d0c35.lean.js",revision:null},{url:"assets/scripting_api-environment.md.4fc9b48d.js",revision:null},{url:"assets/scripting_api-environment.md.4fc9b48d.lean.js",revision:null},{url:"assets/scripting_custom-command.md.977c01b6.js",revision:null},{url:"assets/scripting_custom-command.md.977c01b6.lean.js",revision:null},{url:"assets/scripting_game-tests.md.8a9fdd8d.js",revision:null},{url:"assets/scripting_game-tests.md.8a9fdd8d.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.332e9328.js",revision:null},{url:"assets/scripting_gametest-form.md.332e9328.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.b93c23c7.js",revision:null},{url:"assets/scripting_gametest-qna.md.b93c23c7.lean.js",revision:null},{url:"assets/scripting_index.md.e4da7001.js",revision:null},{url:"assets/scripting_index.md.e4da7001.lean.js",revision:null},{url:"assets/scripting_resources.md.11d28ec6.js",revision:null},{url:"assets/scripting_resources.md.11d28ec6.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.a42cdcaf.js",revision:null},{url:"assets/scripting_saving-loading.md.a42cdcaf.lean.js",revision:null},{url:"assets/scripting_script-modules.md.74bc78b1.js",revision:null},{url:"assets/scripting_script-modules.md.74bc78b1.lean.js",revision:null},{url:"assets/scripting_script-net.md.0d66e2be.js",revision:null},{url:"assets/scripting_script-net.md.0d66e2be.lean.js",revision:null},{url:"assets/scripting_script-server.md.26a103fc.js",revision:null},{url:"assets/scripting_script-server.md.26a103fc.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.617c5cb3.js",revision:null},{url:"assets/scripting_script-watchdog.md.617c5cb3.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.58005172.js",revision:null},{url:"assets/scripting_scripting-intro.md.58005172.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.2f894f65.js",revision:null},{url:"assets/scripting_starting-scripts.md.2f894f65.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.9ff5ad3c.js",revision:null},{url:"assets/scripting_troubleshooting.md.9ff5ad3c.lean.js",revision:null},{url:"assets/scripting_typescript.md.faaae936.js",revision:null},{url:"assets/scripting_typescript.md.faaae936.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.159d38f7.js",revision:null},{url:"assets/scripting_what-is-script.md.159d38f7.lean.js",revision:null},{url:"assets/servers_index.md.643d5153.js",revision:null},{url:"assets/servers_index.md.643d5153.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.42987d07.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.42987d07.lean.js",revision:null},{url:"assets/servers_server-software.md.94311377.js",revision:null},{url:"assets/servers_server-software.md.94311377.lean.js",revision:null},{url:"assets/style.4f0fb741.css",revision:null},{url:"assets/test.md.226922d9.js",revision:null},{url:"assets/test.md.226922d9.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.eceb05bc.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.eceb05bc.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.13437f4a.js",revision:null},{url:"assets/visuals_animation-effects.md.13437f4a.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.4bcbe1ee.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.4bcbe1ee.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.b65b1055.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.b65b1055.lean.js",revision:null},{url:"assets/visuals_death-animations.md.e053c740.js",revision:null},{url:"assets/visuals_death-animations.md.e053c740.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.491f1904.js",revision:null},{url:"assets/visuals_glowing-texture.md.491f1904.lean.js",revision:null},{url:"assets/visuals_index.md.31e9c45f.js",revision:null},{url:"assets/visuals_index.md.31e9c45f.lean.js",revision:null},{url:"assets/visuals_introduction.md.983dbf38.js",revision:null},{url:"assets/visuals_introduction.md.983dbf38.lean.js",revision:null},{url:"assets/visuals_leash-position.md.0c1fd371.js",revision:null},{url:"assets/visuals_leash-position.md.0c1fd371.lean.js",revision:null},{url:"assets/visuals_material-creations.md.a852c650.js",revision:null},{url:"assets/visuals_material-creations.md.a852c650.lean.js",revision:null},{url:"assets/visuals_materials.md.8c6e66f4.js",revision:null},{url:"assets/visuals_materials.md.8c6e66f4.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.31a01611.js",revision:null},{url:"assets/visuals_math-based-animations.md.31a01611.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.f2fe889b.js",revision:null},{url:"assets/visuals_player-geometry.md.f2fe889b.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.c2472ce3.js",revision:null},{url:"assets/visuals_remove-shadows.md.c2472ce3.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.11202826.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.11202826.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.2d8eb59d.js",revision:null},{url:"assets/visuals_structure-presentation.md.2d8eb59d.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.d16a20ee.js",revision:null},{url:"assets/vr_editing-your-first-model.md.d16a20ee.lean.js",revision:null},{url:"assets/vr_index.md.66142175.js",revision:null},{url:"assets/vr_index.md.66142175.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.e2815e96.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.e2815e96.lean.js",revision:null},{url:"assets/vr_pack_setup.md.fd0efc8d.js",revision:null},{url:"assets/vr_pack_setup.md.fd0efc8d.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.0a6e6de0.js",revision:null},{url:"assets/world-generation_biome-tags.md.0a6e6de0.lean.js",revision:null},{url:"assets/world-generation_biomes.md.b0ecc958.js",revision:null},{url:"assets/world-generation_biomes.md.b0ecc958.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.310bfd41.js",revision:null},{url:"assets/world-generation_custom-ores.md.310bfd41.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.500b863e.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.500b863e.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.37a7155b.js",revision:null},{url:"assets/world-generation_feature-types.md.37a7155b.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.1f90ba6f.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.1f90ba6f.lean.js",revision:null},{url:"assets/world-generation_index.md.d76143d5.js",revision:null},{url:"assets/world-generation_index.md.d76143d5.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.28096082.js",revision:null},{url:"assets/world-generation_structure-features.md.28096082.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.a8ab0242.js",revision:null},{url:"assets/world-generation_surface-builder.md.a8ab0242.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.a854dee3.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.a854dee3.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
