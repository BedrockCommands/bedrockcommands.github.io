if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.c675e376.js",revision:null},{url:"assets/404.md.c675e376.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.d8962e5a.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.d8962e5a.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.c7ca31c8.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.c7ca31c8.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.d0afd6e9.js",revision:null},{url:"assets/animation-controllers_death-commands.md.d0afd6e9.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.a11ca670.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.a11ca670.lean.js",revision:null},{url:"assets/animation-controllers_index.md.7f3b67a2.js",revision:null},{url:"assets/animation-controllers_index.md.7f3b67a2.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.9bdde85b.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.9bdde85b.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.f1becbd6.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.f1becbd6.lean.js",revision:null},{url:"assets/app.b9969de9.js",revision:null},{url:"assets/blocks_applying-effects.md.ec992458.js",revision:null},{url:"assets/blocks_applying-effects.md.ec992458.lean.js",revision:null},{url:"assets/blocks_block-materials.md.08669bb8.js",revision:null},{url:"assets/blocks_block-materials.md.08669bb8.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.dacf453e.js",revision:null},{url:"assets/blocks_block-shapes.md.dacf453e.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.a4ba8a9c.js",revision:null},{url:"assets/blocks_block-sounds.md.a4ba8a9c.lean.js",revision:null},{url:"assets/blocks_block-tags.md.d8e42bc2.js",revision:null},{url:"assets/blocks_block-tags.md.d8e42bc2.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.d4d7ae4d.js",revision:null},{url:"assets/blocks_block-texture-variation.md.d4d7ae4d.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.73d5a64f.js",revision:null},{url:"assets/blocks_blocks-16.md.73d5a64f.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.9268ee11.js",revision:null},{url:"assets/blocks_blocks-intro.md.9268ee11.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.e6bc5ac3.js",revision:null},{url:"assets/blocks_custom-crops.md.e6bc5ac3.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.e248c051.js",revision:null},{url:"assets/blocks_custom-fluids.md.e248c051.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.bda24f52.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.bda24f52.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.bf46a2f3.js",revision:null},{url:"assets/blocks_custom-tree.md.bf46a2f3.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.e1f9ec51.js",revision:null},{url:"assets/blocks_fake-blocks.md.e1f9ec51.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.877d5538.js",revision:null},{url:"assets/blocks_flipbook-textures.md.877d5538.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.f24a45bf.js",revision:null},{url:"assets/blocks_head-like-rotation.md.f24a45bf.lean.js",revision:null},{url:"assets/blocks_index.md.961e1ae3.js",revision:null},{url:"assets/blocks_index.md.961e1ae3.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d0545182.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.d0545182.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c6124428.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c6124428.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.51dd8270.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.51dd8270.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.d8b32b3d.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.d8b32b3d.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.95480732.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.76fc46dc.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.44b9c8dd.js",revision:null},{url:"assets/commands_block-states.md.44b9c8dd.lean.js",revision:null},{url:"assets/commands_entity-counter.md.ff9031a2.js",revision:null},{url:"assets/commands_entity-counter.md.ff9031a2.lean.js",revision:null},{url:"assets/commands_index.md.cba2a381.js",revision:null},{url:"assets/commands_index.md.cba2a381.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.31c9b140.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.31c9b140.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.fe31e0f9.js",revision:null},{url:"assets/commands_mcfunctions.md.fe31e0f9.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.c3c79d6d.js",revision:null},{url:"assets/commands_nbt-commands.md.c3c79d6d.lean.js",revision:null},{url:"assets/commands_new-execute.md.ae660d1b.js",revision:null},{url:"assets/commands_new-execute.md.ae660d1b.lean.js",revision:null},{url:"assets/commands_on-first-join.md.2035a352.js",revision:null},{url:"assets/commands_on-first-join.md.2035a352.lean.js",revision:null},{url:"assets/commands_on-player-death.md.3d991bc6.js",revision:null},{url:"assets/commands_on-player-death.md.3d991bc6.lean.js",revision:null},{url:"assets/commands_on-player-join.md.84112668.js",revision:null},{url:"assets/commands_on-player-join.md.84112668.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.d41f2f6f.js",revision:null},{url:"assets/commands_on-player-leave.md.d41f2f6f.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.2588224e.js",revision:null},{url:"assets/commands_on-player-respawn.md.2588224e.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.0e792d61.js",revision:null},{url:"assets/commands_relative-coordinates.md.0e792d61.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.f3e6a3bd.js",revision:null},{url:"assets/commands_scoreboard-operations.md.f3e6a3bd.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.efd994ba.js",revision:null},{url:"assets/commands_scoreboard-timers.md.efd994ba.lean.js",revision:null},{url:"assets/commands_selectors.md.37084782.js",revision:null},{url:"assets/commands_selectors.md.37084782.lean.js",revision:null},{url:"assets/commands_tellraw.md.b1ab1e5d.js",revision:null},{url:"assets/commands_tellraw.md.b1ab1e5d.lean.js",revision:null},{url:"assets/concepts_contents.md.fb42e3ca.js",revision:null},{url:"assets/concepts_contents.md.fb42e3ca.lean.js",revision:null},{url:"assets/concepts_emojis.md.f03a2e5a.js",revision:null},{url:"assets/concepts_emojis.md.f03a2e5a.lean.js",revision:null},{url:"assets/concepts_index.md.2714a513.js",revision:null},{url:"assets/concepts_index.md.2714a513.lean.js",revision:null},{url:"assets/concepts_molang.md.d11788ab.js",revision:null},{url:"assets/concepts_molang.md.d11788ab.lean.js",revision:null},{url:"assets/concepts_namespaces.md.1c31a45d.js",revision:null},{url:"assets/concepts_namespaces.md.1c31a45d.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.972cd6ec.js",revision:null},{url:"assets/concepts_overwriting-assets.md.972cd6ec.lean.js",revision:null},{url:"assets/concepts_shaders.md.d66c50fc.js",revision:null},{url:"assets/concepts_shaders.md.d66c50fc.lean.js",revision:null},{url:"assets/concepts_sounds.md.397e681d.js",revision:null},{url:"assets/concepts_sounds.md.397e681d.lean.js",revision:null},{url:"assets/concepts_subpacks.md.08978c25.js",revision:null},{url:"assets/concepts_subpacks.md.08978c25.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.236e4fe7.js",revision:null},{url:"assets/concepts_text-and-translations.md.236e4fe7.lean.js",revision:null},{url:"assets/concepts_textures-list.md.a5252077.js",revision:null},{url:"assets/concepts_textures-list.md.a5252077.lean.js",revision:null},{url:"assets/contribute-how-to.md.6439a52f.js",revision:null},{url:"assets/contribute-how-to.md.6439a52f.lean.js",revision:null},{url:"assets/contribute-style.md.a83db5ed.js",revision:null},{url:"assets/contribute-style.md.a83db5ed.lean.js",revision:null},{url:"assets/contribute.md.a7be1a02.js",revision:null},{url:"assets/contribute.md.a7be1a02.lean.js",revision:null},{url:"assets/discord.md.15e90aea.js",revision:null},{url:"assets/discord.md.15e90aea.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.10d1220c.js",revision:null},{url:"assets/documentation_advanced-molang.md.10d1220c.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.60fc31a9.js",revision:null},{url:"assets/documentation_creative-categories.md.60fc31a9.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.f8eebdfe.js",revision:null},{url:"assets/documentation_fog-ids.md.f8eebdfe.lean.js",revision:null},{url:"assets/documentation_index.md.89caf2bb.js",revision:null},{url:"assets/documentation_index.md.89caf2bb.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.1933fc1c.js",revision:null},{url:"assets/documentation_material-config-description.md.1933fc1c.lean.js",revision:null},{url:"assets/documentation_materials.md.a0a478a8.js",revision:null},{url:"assets/documentation_materials.md.a0a478a8.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.4c98d151.js",revision:null},{url:"assets/documentation_pack-structure.md.4c98d151.lean.js",revision:null},{url:"assets/documentation_projectiles.md.c8b08d3f.js",revision:null},{url:"assets/documentation_projectiles.md.c8b08d3f.lean.js",revision:null},{url:"assets/documentation_queries.md.5544d45c.js",revision:null},{url:"assets/documentation_queries.md.5544d45c.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.9df65c52.js",revision:null},{url:"assets/documentation_shared-constructs.md.9df65c52.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.09fbb4d2.js",revision:null},{url:"assets/documentation_sound-definitions.md.09fbb4d2.lean.js",revision:null},{url:"assets/entities_boat-entities.md.4c017d10.js",revision:null},{url:"assets/entities_boat-entities.md.4c017d10.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.fe1f73a5.js",revision:null},{url:"assets/entities_detecting-other-entities.md.fe1f73a5.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.e3b3e1e0.js",revision:null},{url:"assets/entities_disabling-team-damage.md.e3b3e1e0.lean.js",revision:null},{url:"assets/entities_dummy-components.md.02bf1e4e.js",revision:null},{url:"assets/entities_dummy-components.md.02bf1e4e.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.75dc0b0c.js",revision:null},{url:"assets/entities_dummy-entities.md.75dc0b0c.lean.js",revision:null},{url:"assets/entities_entity-attack.md.8bc28593.js",revision:null},{url:"assets/entities_entity-attack.md.8bc28593.lean.js",revision:null},{url:"assets/entities_entity-events.md.55b005da.js",revision:null},{url:"assets/entities_entity-events.md.55b005da.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.7650ff5c.js",revision:null},{url:"assets/entities_entity-holds-item.md.7650ff5c.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.10124c23.js",revision:null},{url:"assets/entities_entity-intro-bp.md.10124c23.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.493986c6.js",revision:null},{url:"assets/entities_entity-intro-rp.md.493986c6.lean.js",revision:null},{url:"assets/entities_entity-movement.md.dd2c32cd.js",revision:null},{url:"assets/entities_entity-movement.md.dd2c32cd.lean.js",revision:null},{url:"assets/entities_entity-properties.md.65042eb2.js",revision:null},{url:"assets/entities_entity-properties.md.65042eb2.lean.js",revision:null},{url:"assets/entities_flying-entities.md.2816bdb1.js",revision:null},{url:"assets/entities_flying-entities.md.2816bdb1.lean.js",revision:null},{url:"assets/entities_index.md.a7c9ab5e.js",revision:null},{url:"assets/entities_index.md.a7c9ab5e.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.38f048a5.js",revision:null},{url:"assets/entities_introduction-to-aec.md.38f048a5.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.206c3e50.js",revision:null},{url:"assets/entities_invulnerable-entities.md.206c3e50.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.52cb5206.js",revision:null},{url:"assets/entities_look-at-entity.md.52cb5206.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c18b9128.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.c18b9128.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.01cd02d3.js",revision:null},{url:"assets/entities_npc-dialogs.md.01cd02d3.lean.js",revision:null},{url:"assets/entities_render-controllers.md.b0bec4e1.js",revision:null},{url:"assets/entities_render-controllers.md.b0bec4e1.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.3d6490b6.js",revision:null},{url:"assets/entities_runtime-identifier.md.3d6490b6.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.fa93c60a.js",revision:null},{url:"assets/entities_sleeping-entities.md.fa93c60a.lean.js",revision:null},{url:"assets/entities_solid-entities.md.502fb414.js",revision:null},{url:"assets/entities_solid-entities.md.502fb414.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.bdcb5038.js",revision:null},{url:"assets/entities_spawn-rules.md.bdcb5038.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2124dfd4.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2124dfd4.lean.js",revision:null},{url:"assets/entities_timers.md.f441f31f.js",revision:null},{url:"assets/entities_timers.md.f441f31f.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.afc52e8a.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.afc52e8a.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.204ab72c.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.204ab72c.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.d36e3162.js",revision:null},{url:"assets/entities_village-mechanic.md.d36e3162.lean.js",revision:null},{url:"assets/entities_vuc-full.md.360f5033.lean.js",revision:null},{url:"assets/entities_vusr-full.md.b5cfb9be.js",revision:null},{url:"assets/entities_vusr-full.md.b5cfb9be.lean.js",revision:null},{url:"assets/graph-test.md.729a6561.js",revision:null},{url:"assets/graph-test.md.729a6561.lean.js",revision:null},{url:"assets/guide_addons.md.ee5df0b1.js",revision:null},{url:"assets/guide_addons.md.ee5df0b1.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.6f611a88.js",revision:null},{url:"assets/guide_advancedmanifest.md.6f611a88.lean.js",revision:null},{url:"assets/guide_blockbench.md.2cf5f41a.js",revision:null},{url:"assets/guide_blockbench.md.2cf5f41a.lean.js",revision:null},{url:"assets/guide_custom-entity.md.92d6cbe6.js",revision:null},{url:"assets/guide_custom-entity.md.92d6cbe6.lean.js",revision:null},{url:"assets/guide_custom-item.md.41cbbf54.js",revision:null},{url:"assets/guide_custom-item.md.41cbbf54.lean.js",revision:null},{url:"assets/guide_download-packs.md.c4be190a.js",revision:null},{url:"assets/guide_download-packs.md.c4be190a.lean.js",revision:null},{url:"assets/guide_format-version.md.bd43d062.js",revision:null},{url:"assets/guide_format-version.md.bd43d062.lean.js",revision:null},{url:"assets/guide_index.md.032674e4.js",revision:null},{url:"assets/guide_index.md.032674e4.lean.js",revision:null},{url:"assets/guide_introduction.md.55d48786.js",revision:null},{url:"assets/guide_introduction.md.55d48786.lean.js",revision:null},{url:"assets/guide_loot-table.md.176e132e.js",revision:null},{url:"assets/guide_loot-table.md.176e132e.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.368c89f8.js",revision:null},{url:"assets/guide_project-setup-android.md.368c89f8.lean.js",revision:null},{url:"assets/guide_project-setup.md.dbc4e3d9.js",revision:null},{url:"assets/guide_project-setup.md.dbc4e3d9.lean.js",revision:null},{url:"assets/guide_software-preparation.md.4e2691e9.js",revision:null},{url:"assets/guide_software-preparation.md.4e2691e9.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.217aa89c.js",revision:null},{url:"assets/guide_troubleshooting.md.217aa89c.lean.js",revision:null},{url:"assets/guide_understanding-json.md.1dd490d5.js",revision:null},{url:"assets/guide_understanding-json.md.1dd490d5.lean.js",revision:null},{url:"assets/hacktoberfest.md.c6ddb828.js",revision:null},{url:"assets/hacktoberfest.md.c6ddb828.lean.js",revision:null},{url:"assets/index.md.2dd471be.js",revision:null},{url:"assets/index.md.2dd471be.lean.js",revision:null},{url:"assets/items_attachables.md.9e562ea7.js",revision:null},{url:"assets/items_attachables.md.9e562ea7.lean.js",revision:null},{url:"assets/items_custom-armor.md.a5589464.js",revision:null},{url:"assets/items_custom-armor.md.a5589464.lean.js",revision:null},{url:"assets/items_custom-weapon.md.dcc24886.js",revision:null},{url:"assets/items_custom-weapon.md.dcc24886.lean.js",revision:null},{url:"assets/items_enchantments.md.11cd98e4.js",revision:null},{url:"assets/items_enchantments.md.11cd98e4.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.0978b1cd.js",revision:null},{url:"assets/items_equipped-item-commands.md.0978b1cd.lean.js",revision:null},{url:"assets/items_index.md.e81cd7d9.js",revision:null},{url:"assets/items_index.md.e81cd7d9.lean.js",revision:null},{url:"assets/items_item-identifiers.md.52e3790f.js",revision:null},{url:"assets/items_item-identifiers.md.52e3790f.lean.js",revision:null},{url:"assets/items_items-16.md.28d4953f.js",revision:null},{url:"assets/items_items-16.md.28d4953f.lean.js",revision:null},{url:"assets/items_items-intro.md.2ccbb4cb.js",revision:null},{url:"assets/items_items-intro.md.2ccbb4cb.lean.js",revision:null},{url:"assets/items_spawning-items.md.fef1eb68.js",revision:null},{url:"assets/items_spawning-items.md.fef1eb68.lean.js",revision:null},{url:"assets/items_spear.md.0a8c7ad2.js",revision:null},{url:"assets/items_spear.md.0a8c7ad2.lean.js",revision:null},{url:"assets/items_throwable.md.4814120c.js",revision:null},{url:"assets/items_throwable.md.4814120c.lean.js",revision:null},{url:"assets/items_tool-durability.md.5ff563cd.js",revision:null},{url:"assets/items_tool-durability.md.5ff563cd.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.a3dca8ca.js",revision:null},{url:"assets/items_troubleshooting-items.md.a3dca8ca.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.11ad96df.js",revision:null},{url:"assets/items_vanilla-usage-items.md.11ad96df.lean.js",revision:null},{url:"assets/items_vui-full.md.4e015055.js",revision:null},{url:"assets/items_vui-full.md.4e015055.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.00376fc3.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.00376fc3.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.44d2fab8.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.44d2fab8.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.79d4527b.js",revision:null},{url:"assets/json-ui_best-practices.md.79d4527b.lean.js",revision:null},{url:"assets/json-ui_index.md.b02a42f0.js",revision:null},{url:"assets/json-ui_index.md.b02a42f0.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.bf04dcdc.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.bf04dcdc.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ce6c498a.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.ce6c498a.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.be729021.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.be729021.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.0dc4f666.js",revision:null},{url:"assets/json-ui_string-to-number.md.0dc4f666.lean.js",revision:null},{url:"assets/loot_index.md.e57a6eea.js",revision:null},{url:"assets/loot_index.md.e57a6eea.lean.js",revision:null},{url:"assets/loot_item-functions.md.405f943d.js",revision:null},{url:"assets/loot_item-functions.md.405f943d.lean.js",revision:null},{url:"assets/loot_loot-tables.md.82c9b37e.js",revision:null},{url:"assets/loot_loot-tables.md.82c9b37e.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.8026bf72.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.8026bf72.lean.js",revision:null},{url:"assets/loot_recipes.md.1f67b106.js",revision:null},{url:"assets/loot_recipes.md.1f67b106.lean.js",revision:null},{url:"assets/loot_trade-tables.md.d5ade70e.js",revision:null},{url:"assets/loot_trade-tables.md.d5ade70e.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.fcaa9b3b.js",revision:null},{url:"assets/loot_trading-behavior.md.fcaa9b3b.lean.js",revision:null},{url:"assets/meta_addon-performance.md.1c6dedab.js",revision:null},{url:"assets/meta_addon-performance.md.1c6dedab.lean.js",revision:null},{url:"assets/meta_index.md.0b026123.js",revision:null},{url:"assets/meta_index.md.0b026123.lean.js",revision:null},{url:"assets/meta_jq.md.611f0f71.js",revision:null},{url:"assets/meta_jq.md.611f0f71.lean.js",revision:null},{url:"assets/meta_style-guide.md.fc2cdbdb.js",revision:null},{url:"assets/meta_style-guide.md.fc2cdbdb.lean.js",revision:null},{url:"assets/meta_useful-links.md.3868b86a.js",revision:null},{url:"assets/meta_useful-links.md.3868b86a.lean.js",revision:null},{url:"assets/meta_using-schemas.md.9fa59efc.js",revision:null},{url:"assets/meta_using-schemas.md.9fa59efc.lean.js",revision:null},{url:"assets/meta_version-control.md.d594eb3c.js",revision:null},{url:"assets/meta_version-control.md.d594eb3c.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.868812b3.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.868812b3.lean.js",revision:null},{url:"assets/nbt_index.md.6f96368f.js",revision:null},{url:"assets/nbt_index.md.6f96368f.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.e88f2d86.js",revision:null},{url:"assets/nbt_mcstructure.md.e88f2d86.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.2dba1258.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.2dba1258.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.66412b1e.js",revision:null},{url:"assets/nbt_step-by-step-example.md.66412b1e.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.293131c4.js",revision:null},{url:"assets/nbt_structure-limits.md.293131c4.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.dc18d978.js",revision:null},{url:"assets/particles_disabling-particles.md.dc18d978.lean.js",revision:null},{url:"assets/particles_index.md.a4504626.js",revision:null},{url:"assets/particles_index.md.a4504626.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.01696f06.js",revision:null},{url:"assets/particles_particles-and-sounds.md.01696f06.lean.js",revision:null},{url:"assets/particles_particles.md.55dfe8a2.js",revision:null},{url:"assets/particles_particles.md.55dfe8a2.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.4619778f.js",revision:null},{url:"assets/particles_vanilla-particles.md.4619778f.lean.js",revision:null},{url:"assets/privacy.md.03a0c503.js",revision:null},{url:"assets/privacy.md.03a0c503.lean.js",revision:null},{url:"assets/scripting_api-environment.md.d3e971f6.js",revision:null},{url:"assets/scripting_api-environment.md.d3e971f6.lean.js",revision:null},{url:"assets/scripting_custom-command.md.f1cf5364.js",revision:null},{url:"assets/scripting_custom-command.md.f1cf5364.lean.js",revision:null},{url:"assets/scripting_game-tests.md.faf0acb3.js",revision:null},{url:"assets/scripting_game-tests.md.faf0acb3.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.15c20914.js",revision:null},{url:"assets/scripting_gametest-form.md.15c20914.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.3a1ac875.js",revision:null},{url:"assets/scripting_gametest-qna.md.3a1ac875.lean.js",revision:null},{url:"assets/scripting_index.md.2dc377cd.js",revision:null},{url:"assets/scripting_index.md.2dc377cd.lean.js",revision:null},{url:"assets/scripting_resources.md.84391675.js",revision:null},{url:"assets/scripting_resources.md.84391675.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.0f48e4ca.js",revision:null},{url:"assets/scripting_saving-loading.md.0f48e4ca.lean.js",revision:null},{url:"assets/scripting_script-net.md.05a45ace.js",revision:null},{url:"assets/scripting_script-net.md.05a45ace.lean.js",revision:null},{url:"assets/scripting_script-server.md.060bd18d.js",revision:null},{url:"assets/scripting_script-server.md.060bd18d.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.533eb4db.js",revision:null},{url:"assets/scripting_script-watchdog.md.533eb4db.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.5a514caf.js",revision:null},{url:"assets/scripting_scripting-intro.md.5a514caf.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.5bfca921.js",revision:null},{url:"assets/scripting_starting-scripts.md.5bfca921.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.a7433ed3.js",revision:null},{url:"assets/scripting_troubleshooting.md.a7433ed3.lean.js",revision:null},{url:"assets/scripting_typescript.md.7c28d58e.js",revision:null},{url:"assets/scripting_typescript.md.7c28d58e.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.ae4b0de1.js",revision:null},{url:"assets/scripting_what-is-script.md.ae4b0de1.lean.js",revision:null},{url:"assets/servers_index.md.cb210c53.js",revision:null},{url:"assets/servers_index.md.cb210c53.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.6c369d95.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.6c369d95.lean.js",revision:null},{url:"assets/servers_server-software.md.d8b3cb99.js",revision:null},{url:"assets/servers_server-software.md.d8b3cb99.lean.js",revision:null},{url:"assets/style.1c46c954.css",revision:null},{url:"assets/test.md.f575ab7b.js",revision:null},{url:"assets/test.md.f575ab7b.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.3128a902.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.3128a902.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.dba67346.js",revision:null},{url:"assets/visuals_animation-effects.md.dba67346.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.26f64b6d.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.26f64b6d.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.9c1f0d98.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.9c1f0d98.lean.js",revision:null},{url:"assets/visuals_death-animations.md.09485940.js",revision:null},{url:"assets/visuals_death-animations.md.09485940.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.186019d4.js",revision:null},{url:"assets/visuals_glowing-texture.md.186019d4.lean.js",revision:null},{url:"assets/visuals_index.md.55f4b6cf.js",revision:null},{url:"assets/visuals_index.md.55f4b6cf.lean.js",revision:null},{url:"assets/visuals_introduction.md.bba14aae.js",revision:null},{url:"assets/visuals_introduction.md.bba14aae.lean.js",revision:null},{url:"assets/visuals_leash-position.md.9deaef57.js",revision:null},{url:"assets/visuals_leash-position.md.9deaef57.lean.js",revision:null},{url:"assets/visuals_materials.md.cca6a948.js",revision:null},{url:"assets/visuals_materials.md.cca6a948.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.4feee3e4.js",revision:null},{url:"assets/visuals_math-based-animations.md.4feee3e4.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.e610df34.js",revision:null},{url:"assets/visuals_player-geometry.md.e610df34.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.337a89b8.js",revision:null},{url:"assets/visuals_remove-shadows.md.337a89b8.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.2d2a68fc.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.2d2a68fc.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.2c03b334.js",revision:null},{url:"assets/visuals_structure-presentation.md.2c03b334.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.761678de.js",revision:null},{url:"assets/vr_editing-your-first-model.md.761678de.lean.js",revision:null},{url:"assets/vr_index.md.60655c71.js",revision:null},{url:"assets/vr_index.md.60655c71.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.0e19a115.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.0e19a115.lean.js",revision:null},{url:"assets/vr_pack_setup.md.97de0b56.js",revision:null},{url:"assets/vr_pack_setup.md.97de0b56.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.11d32079.js",revision:null},{url:"assets/world-generation_biome-tags.md.11d32079.lean.js",revision:null},{url:"assets/world-generation_biomes.md.9a32d374.js",revision:null},{url:"assets/world-generation_biomes.md.9a32d374.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.90a0a708.js",revision:null},{url:"assets/world-generation_custom-ores.md.90a0a708.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.35c5e5b7.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.35c5e5b7.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.39e6e1d4.js",revision:null},{url:"assets/world-generation_feature-types.md.39e6e1d4.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.1982eaeb.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.1982eaeb.lean.js",revision:null},{url:"assets/world-generation_index.md.256d10c7.js",revision:null},{url:"assets/world-generation_index.md.256d10c7.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.324df788.js",revision:null},{url:"assets/world-generation_structure-features.md.324df788.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.b5636ac0.js",revision:null},{url:"assets/world-generation_surface-builder.md.b5636ac0.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.03731109.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.03731109.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
