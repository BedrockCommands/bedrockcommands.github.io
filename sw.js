if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const a=s=>l(s,t),u={module:{uri:t},exports:r,require:a};e[t]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(i(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.e9dfd717.js",revision:null},{url:"assets/404.md.e9dfd717.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.4428ccb6.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.4428ccb6.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.9424144a.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.9424144a.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.f57e32ef.js",revision:null},{url:"assets/animation-controllers_death-commands.md.f57e32ef.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.b315d306.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.b315d306.lean.js",revision:null},{url:"assets/animation-controllers_index.md.1a3d12f7.js",revision:null},{url:"assets/animation-controllers_index.md.1a3d12f7.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.8178f065.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.8178f065.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.d7d321f1.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.d7d321f1.lean.js",revision:null},{url:"assets/app.c2540c1f.js",revision:null},{url:"assets/blocks_applying-effects.md.845ad923.js",revision:null},{url:"assets/blocks_applying-effects.md.845ad923.lean.js",revision:null},{url:"assets/blocks_block-materials.md.321de168.js",revision:null},{url:"assets/blocks_block-materials.md.321de168.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.e99669c0.js",revision:null},{url:"assets/blocks_block-shapes.md.e99669c0.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.e90d975c.js",revision:null},{url:"assets/blocks_block-sounds.md.e90d975c.lean.js",revision:null},{url:"assets/blocks_block-tags.md.ff259057.js",revision:null},{url:"assets/blocks_block-tags.md.ff259057.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.6de1c71f.js",revision:null},{url:"assets/blocks_block-texture-variation.md.6de1c71f.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.a29bc690.js",revision:null},{url:"assets/blocks_blocks-16.md.a29bc690.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.ad011c5b.js",revision:null},{url:"assets/blocks_blocks-intro.md.ad011c5b.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.276685d8.js",revision:null},{url:"assets/blocks_custom-crops.md.276685d8.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.ea6cb2cd.js",revision:null},{url:"assets/blocks_custom-fluids.md.ea6cb2cd.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.c1497de2.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.c1497de2.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.cd213e98.js",revision:null},{url:"assets/blocks_custom-tree.md.cd213e98.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.bc4673f7.js",revision:null},{url:"assets/blocks_fake-blocks.md.bc4673f7.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.bf8405c1.js",revision:null},{url:"assets/blocks_flipbook-textures.md.bf8405c1.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.c316cc8e.js",revision:null},{url:"assets/blocks_head-like-rotation.md.c316cc8e.lean.js",revision:null},{url:"assets/blocks_index.md.3e8a81db.js",revision:null},{url:"assets/blocks_index.md.3e8a81db.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.398d01c6.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.398d01c6.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.2b18aa2b.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.2b18aa2b.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.11798405.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.11798405.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.2147b53d.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.2147b53d.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.bbac1243.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.7a085dbf.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.9416d497.js",revision:null},{url:"assets/commands_block-states.md.9416d497.lean.js",revision:null},{url:"assets/commands_entity-counter.md.97f63b1f.js",revision:null},{url:"assets/commands_entity-counter.md.97f63b1f.lean.js",revision:null},{url:"assets/commands_index.md.ffa981da.js",revision:null},{url:"assets/commands_index.md.ffa981da.lean.js",revision:null},{url:"assets/commands_mcfunction.md.7c9e0f76.js",revision:null},{url:"assets/commands_mcfunction.md.7c9e0f76.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.9c3ee709.js",revision:null},{url:"assets/commands_nbt-commands.md.9c3ee709.lean.js",revision:null},{url:"assets/commands_new-execute.md.d933a87c.js",revision:null},{url:"assets/commands_new-execute.md.d933a87c.lean.js",revision:null},{url:"assets/commands_on-first-join.md.2dd709fa.js",revision:null},{url:"assets/commands_on-first-join.md.2dd709fa.lean.js",revision:null},{url:"assets/commands_on-player-death.md.5f1e73f2.js",revision:null},{url:"assets/commands_on-player-death.md.5f1e73f2.lean.js",revision:null},{url:"assets/commands_on-player-join.md.1ef9a9f7.js",revision:null},{url:"assets/commands_on-player-join.md.1ef9a9f7.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.567e8aca.js",revision:null},{url:"assets/commands_on-player-leave.md.567e8aca.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.d720e07f.js",revision:null},{url:"assets/commands_relative-coordinates.md.d720e07f.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5d9c486a.js",revision:null},{url:"assets/commands_scoreboard-operations.md.5d9c486a.lean.js",revision:null},{url:"assets/commands_selectors.md.31d98f68.js",revision:null},{url:"assets/commands_selectors.md.31d98f68.lean.js",revision:null},{url:"assets/commands_tellraw.md.dc9bd870.js",revision:null},{url:"assets/commands_tellraw.md.dc9bd870.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.91fd4479.js",revision:null},{url:"assets/commands_tick_json-creations.md.91fd4479.lean.js",revision:null},{url:"assets/commands_timers.md.8e8abdaa.js",revision:null},{url:"assets/commands_timers.md.8e8abdaa.lean.js",revision:null},{url:"assets/concepts_contents.md.036acd41.js",revision:null},{url:"assets/concepts_contents.md.036acd41.lean.js",revision:null},{url:"assets/concepts_emojis.md.6b2d443b.js",revision:null},{url:"assets/concepts_emojis.md.6b2d443b.lean.js",revision:null},{url:"assets/concepts_index.md.82eaa5b9.js",revision:null},{url:"assets/concepts_index.md.82eaa5b9.lean.js",revision:null},{url:"assets/concepts_molang.md.31a2f378.js",revision:null},{url:"assets/concepts_molang.md.31a2f378.lean.js",revision:null},{url:"assets/concepts_namespaces.md.4ff1dbf9.js",revision:null},{url:"assets/concepts_namespaces.md.4ff1dbf9.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.e2c525c2.js",revision:null},{url:"assets/concepts_overwriting-assets.md.e2c525c2.lean.js",revision:null},{url:"assets/concepts_shaders.md.59bc1ede.js",revision:null},{url:"assets/concepts_shaders.md.59bc1ede.lean.js",revision:null},{url:"assets/concepts_sounds.md.e9f232ab.js",revision:null},{url:"assets/concepts_sounds.md.e9f232ab.lean.js",revision:null},{url:"assets/concepts_subpacks.md.f236cacc.js",revision:null},{url:"assets/concepts_subpacks.md.f236cacc.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.4d0bb6bb.js",revision:null},{url:"assets/concepts_text-and-translations.md.4d0bb6bb.lean.js",revision:null},{url:"assets/concepts_textures-list.md.0c4f9db4.js",revision:null},{url:"assets/concepts_textures-list.md.0c4f9db4.lean.js",revision:null},{url:"assets/contribute-how-to.md.56f976cd.js",revision:null},{url:"assets/contribute-how-to.md.56f976cd.lean.js",revision:null},{url:"assets/contribute-style.md.61951172.js",revision:null},{url:"assets/contribute-style.md.61951172.lean.js",revision:null},{url:"assets/contribute.md.39576566.js",revision:null},{url:"assets/contribute.md.39576566.lean.js",revision:null},{url:"assets/discord.md.4aa4ba18.js",revision:null},{url:"assets/discord.md.4aa4ba18.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.e0e77cb5.js",revision:null},{url:"assets/documentation_advanced-molang.md.e0e77cb5.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.f24bb397.js",revision:null},{url:"assets/documentation_creative-categories.md.f24bb397.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.6f2f2422.js",revision:null},{url:"assets/documentation_fog-ids.md.6f2f2422.lean.js",revision:null},{url:"assets/documentation_index.md.5cfcf51c.js",revision:null},{url:"assets/documentation_index.md.5cfcf51c.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.f3b3e7ab.js",revision:null},{url:"assets/documentation_material-config-description.md.f3b3e7ab.lean.js",revision:null},{url:"assets/documentation_materials.md.060bfce4.js",revision:null},{url:"assets/documentation_materials.md.060bfce4.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.2d773e17.js",revision:null},{url:"assets/documentation_pack-structure.md.2d773e17.lean.js",revision:null},{url:"assets/documentation_projectiles.md.f1af604a.js",revision:null},{url:"assets/documentation_projectiles.md.f1af604a.lean.js",revision:null},{url:"assets/documentation_queries.md.afb35c75.js",revision:null},{url:"assets/documentation_queries.md.afb35c75.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.98e0ff85.js",revision:null},{url:"assets/documentation_shared-constructs.md.98e0ff85.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.d7ce9102.js",revision:null},{url:"assets/documentation_sound-definitions.md.d7ce9102.lean.js",revision:null},{url:"assets/entities_boat-entities.md.b9b24ee4.js",revision:null},{url:"assets/entities_boat-entities.md.b9b24ee4.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3582969d.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3582969d.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.3c3b0e05.js",revision:null},{url:"assets/entities_disabling-team-damage.md.3c3b0e05.lean.js",revision:null},{url:"assets/entities_dummy-components.md.ef3cb1d9.js",revision:null},{url:"assets/entities_dummy-components.md.ef3cb1d9.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.dc2c1180.js",revision:null},{url:"assets/entities_dummy-entities.md.dc2c1180.lean.js",revision:null},{url:"assets/entities_entity-attack.md.9c06438b.js",revision:null},{url:"assets/entities_entity-attack.md.9c06438b.lean.js",revision:null},{url:"assets/entities_entity-events.md.95a779ed.js",revision:null},{url:"assets/entities_entity-events.md.95a779ed.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.b23e144e.js",revision:null},{url:"assets/entities_entity-holds-item.md.b23e144e.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.0c3d4830.js",revision:null},{url:"assets/entities_entity-intro-bp.md.0c3d4830.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.5833deda.js",revision:null},{url:"assets/entities_entity-intro-rp.md.5833deda.lean.js",revision:null},{url:"assets/entities_entity-movement.md.12690b33.js",revision:null},{url:"assets/entities_entity-movement.md.12690b33.lean.js",revision:null},{url:"assets/entities_entity-properties.md.8ee0db46.js",revision:null},{url:"assets/entities_entity-properties.md.8ee0db46.lean.js",revision:null},{url:"assets/entities_flying-entities.md.ea038ce9.js",revision:null},{url:"assets/entities_flying-entities.md.ea038ce9.lean.js",revision:null},{url:"assets/entities_index.md.0094fefd.js",revision:null},{url:"assets/entities_index.md.0094fefd.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.b553fa02.js",revision:null},{url:"assets/entities_introduction-to-aec.md.b553fa02.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3717410d.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3717410d.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.b75af484.js",revision:null},{url:"assets/entities_look-at-entity.md.b75af484.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.41b1b581.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.41b1b581.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.d71df87c.js",revision:null},{url:"assets/entities_npc-dialogs.md.d71df87c.lean.js",revision:null},{url:"assets/entities_render-controllers.md.b4921df2.js",revision:null},{url:"assets/entities_render-controllers.md.b4921df2.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.e5268cb3.js",revision:null},{url:"assets/entities_runtime-identifier.md.e5268cb3.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.6c6cc936.js",revision:null},{url:"assets/entities_sleeping-entities.md.6c6cc936.lean.js",revision:null},{url:"assets/entities_solid-entities.md.738f5f23.js",revision:null},{url:"assets/entities_solid-entities.md.738f5f23.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.2ae3fd95.js",revision:null},{url:"assets/entities_spawn-rules.md.2ae3fd95.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.52ed3015.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.52ed3015.lean.js",revision:null},{url:"assets/entities_timers.md.8c748979.js",revision:null},{url:"assets/entities_timers.md.8c748979.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.d80b2cd3.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.d80b2cd3.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.305b1949.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.305b1949.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.fbb94625.js",revision:null},{url:"assets/entities_village-mechanic.md.fbb94625.lean.js",revision:null},{url:"assets/entities_vuc-full.md.7c52c2bd.lean.js",revision:null},{url:"assets/entities_vusr-full.md.d96cc618.js",revision:null},{url:"assets/entities_vusr-full.md.d96cc618.lean.js",revision:null},{url:"assets/graph-test.md.8ff8935c.js",revision:null},{url:"assets/graph-test.md.8ff8935c.lean.js",revision:null},{url:"assets/guide_addons.md.3931cefa.js",revision:null},{url:"assets/guide_addons.md.3931cefa.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.fb06b7ad.js",revision:null},{url:"assets/guide_advancedmanifest.md.fb06b7ad.lean.js",revision:null},{url:"assets/guide_blockbench.md.8d1d5ac6.js",revision:null},{url:"assets/guide_blockbench.md.8d1d5ac6.lean.js",revision:null},{url:"assets/guide_custom-entity.md.2c69481f.js",revision:null},{url:"assets/guide_custom-entity.md.2c69481f.lean.js",revision:null},{url:"assets/guide_custom-item.md.afade603.js",revision:null},{url:"assets/guide_custom-item.md.afade603.lean.js",revision:null},{url:"assets/guide_download-packs.md.d3652c76.js",revision:null},{url:"assets/guide_download-packs.md.d3652c76.lean.js",revision:null},{url:"assets/guide_format-version.md.2efac656.js",revision:null},{url:"assets/guide_format-version.md.2efac656.lean.js",revision:null},{url:"assets/guide_index.md.f25fe785.js",revision:null},{url:"assets/guide_index.md.f25fe785.lean.js",revision:null},{url:"assets/guide_introduction.md.57c80a95.js",revision:null},{url:"assets/guide_introduction.md.57c80a95.lean.js",revision:null},{url:"assets/guide_loot-table.md.290fdd0b.js",revision:null},{url:"assets/guide_loot-table.md.290fdd0b.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.faa98e5b.js",revision:null},{url:"assets/guide_project-setup-android.md.faa98e5b.lean.js",revision:null},{url:"assets/guide_project-setup.md.203cfed3.js",revision:null},{url:"assets/guide_project-setup.md.203cfed3.lean.js",revision:null},{url:"assets/guide_software-preparation.md.9fa3b53a.js",revision:null},{url:"assets/guide_software-preparation.md.9fa3b53a.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.d4aa787c.js",revision:null},{url:"assets/guide_troubleshooting.md.d4aa787c.lean.js",revision:null},{url:"assets/guide_understanding-json.md.048abe56.js",revision:null},{url:"assets/guide_understanding-json.md.048abe56.lean.js",revision:null},{url:"assets/hacktoberfest.md.22bb4d26.js",revision:null},{url:"assets/hacktoberfest.md.22bb4d26.lean.js",revision:null},{url:"assets/index.md.c0548f1f.js",revision:null},{url:"assets/index.md.c0548f1f.lean.js",revision:null},{url:"assets/items_attachables.md.7e5c7ca3.js",revision:null},{url:"assets/items_attachables.md.7e5c7ca3.lean.js",revision:null},{url:"assets/items_custom-armor.md.94d2b9a4.js",revision:null},{url:"assets/items_custom-armor.md.94d2b9a4.lean.js",revision:null},{url:"assets/items_custom-weapon.md.b84d0d76.js",revision:null},{url:"assets/items_custom-weapon.md.b84d0d76.lean.js",revision:null},{url:"assets/items_enchantments.md.e79998cf.js",revision:null},{url:"assets/items_enchantments.md.e79998cf.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.454875bf.js",revision:null},{url:"assets/items_equipped-item-commands.md.454875bf.lean.js",revision:null},{url:"assets/items_index.md.6bb8c9e9.js",revision:null},{url:"assets/items_index.md.6bb8c9e9.lean.js",revision:null},{url:"assets/items_item-identifiers.md.3a16ca32.js",revision:null},{url:"assets/items_item-identifiers.md.3a16ca32.lean.js",revision:null},{url:"assets/items_items-16.md.111ddef5.js",revision:null},{url:"assets/items_items-16.md.111ddef5.lean.js",revision:null},{url:"assets/items_items-intro.md.3339bffc.js",revision:null},{url:"assets/items_items-intro.md.3339bffc.lean.js",revision:null},{url:"assets/items_spawning-items.md.a17e6534.js",revision:null},{url:"assets/items_spawning-items.md.a17e6534.lean.js",revision:null},{url:"assets/items_spear.md.576f2cd9.js",revision:null},{url:"assets/items_spear.md.576f2cd9.lean.js",revision:null},{url:"assets/items_throwable.md.5199b5ea.js",revision:null},{url:"assets/items_throwable.md.5199b5ea.lean.js",revision:null},{url:"assets/items_tool-durability.md.2f528a01.js",revision:null},{url:"assets/items_tool-durability.md.2f528a01.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.84bf5b74.js",revision:null},{url:"assets/items_troubleshooting-items.md.84bf5b74.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.23d89c55.js",revision:null},{url:"assets/items_vanilla-usage-items.md.23d89c55.lean.js",revision:null},{url:"assets/items_vui-full.md.97007769.js",revision:null},{url:"assets/items_vui-full.md.97007769.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.f61ff94f.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.f61ff94f.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.07e0ec34.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.07e0ec34.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.2813d28e.js",revision:null},{url:"assets/json-ui_best-practices.md.2813d28e.lean.js",revision:null},{url:"assets/json-ui_index.md.72bce29d.js",revision:null},{url:"assets/json-ui_index.md.72bce29d.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2d4e3fc7.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2d4e3fc7.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.04af9272.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.04af9272.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.69bb68a9.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.69bb68a9.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.29967fac.js",revision:null},{url:"assets/json-ui_string-to-number.md.29967fac.lean.js",revision:null},{url:"assets/loot_index.md.e3de5645.js",revision:null},{url:"assets/loot_index.md.e3de5645.lean.js",revision:null},{url:"assets/loot_item-functions.md.23087244.js",revision:null},{url:"assets/loot_item-functions.md.23087244.lean.js",revision:null},{url:"assets/loot_loot-tables.md.0eded690.js",revision:null},{url:"assets/loot_loot-tables.md.0eded690.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.4ef750c0.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.4ef750c0.lean.js",revision:null},{url:"assets/loot_recipes.md.bbe8d94f.js",revision:null},{url:"assets/loot_recipes.md.bbe8d94f.lean.js",revision:null},{url:"assets/loot_trade-tables.md.3c1837a2.js",revision:null},{url:"assets/loot_trade-tables.md.3c1837a2.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.8ef86923.js",revision:null},{url:"assets/loot_trading-behavior.md.8ef86923.lean.js",revision:null},{url:"assets/meta_addon-performance.md.c6df4b84.js",revision:null},{url:"assets/meta_addon-performance.md.c6df4b84.lean.js",revision:null},{url:"assets/meta_index.md.8808a46e.js",revision:null},{url:"assets/meta_index.md.8808a46e.lean.js",revision:null},{url:"assets/meta_jq.md.02c5c3a7.js",revision:null},{url:"assets/meta_jq.md.02c5c3a7.lean.js",revision:null},{url:"assets/meta_style-guide.md.d6aae879.js",revision:null},{url:"assets/meta_style-guide.md.d6aae879.lean.js",revision:null},{url:"assets/meta_useful-links.md.0126f4c7.js",revision:null},{url:"assets/meta_useful-links.md.0126f4c7.lean.js",revision:null},{url:"assets/meta_using-schemas.md.e4b0852b.js",revision:null},{url:"assets/meta_using-schemas.md.e4b0852b.lean.js",revision:null},{url:"assets/meta_version-control.md.4591fefb.js",revision:null},{url:"assets/meta_version-control.md.4591fefb.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.36b92824.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.36b92824.lean.js",revision:null},{url:"assets/nbt_index.md.47626c3d.js",revision:null},{url:"assets/nbt_index.md.47626c3d.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.6386a3d0.js",revision:null},{url:"assets/nbt_mcstructure.md.6386a3d0.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.f1782407.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.f1782407.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.228952ab.js",revision:null},{url:"assets/nbt_step-by-step-example.md.228952ab.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.0203e6e7.js",revision:null},{url:"assets/nbt_structure-limits.md.0203e6e7.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.9c95f8e5.js",revision:null},{url:"assets/particles_disabling-particles.md.9c95f8e5.lean.js",revision:null},{url:"assets/particles_index.md.9d0b1022.js",revision:null},{url:"assets/particles_index.md.9d0b1022.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.f9d75d55.js",revision:null},{url:"assets/particles_particles-and-sounds.md.f9d75d55.lean.js",revision:null},{url:"assets/particles_particles.md.0b0f61aa.js",revision:null},{url:"assets/particles_particles.md.0b0f61aa.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.a771936f.js",revision:null},{url:"assets/particles_vanilla-particles.md.a771936f.lean.js",revision:null},{url:"assets/privacy.md.9020c343.js",revision:null},{url:"assets/privacy.md.9020c343.lean.js",revision:null},{url:"assets/scripting_api-environment.md.fc3c58b1.js",revision:null},{url:"assets/scripting_api-environment.md.fc3c58b1.lean.js",revision:null},{url:"assets/scripting_custom-command.md.f10fb5cf.js",revision:null},{url:"assets/scripting_custom-command.md.f10fb5cf.lean.js",revision:null},{url:"assets/scripting_game-tests.md.227e7dea.js",revision:null},{url:"assets/scripting_game-tests.md.227e7dea.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.32c2cf23.js",revision:null},{url:"assets/scripting_gametest-form.md.32c2cf23.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.54b27e92.js",revision:null},{url:"assets/scripting_gametest-qna.md.54b27e92.lean.js",revision:null},{url:"assets/scripting_index.md.18ee8126.js",revision:null},{url:"assets/scripting_index.md.18ee8126.lean.js",revision:null},{url:"assets/scripting_resources.md.e40dbee6.js",revision:null},{url:"assets/scripting_resources.md.e40dbee6.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.3a9944cf.js",revision:null},{url:"assets/scripting_saving-loading.md.3a9944cf.lean.js",revision:null},{url:"assets/scripting_script-net.md.8caaaf11.js",revision:null},{url:"assets/scripting_script-net.md.8caaaf11.lean.js",revision:null},{url:"assets/scripting_script-server.md.cde287c6.js",revision:null},{url:"assets/scripting_script-server.md.cde287c6.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.579bf321.js",revision:null},{url:"assets/scripting_script-watchdog.md.579bf321.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.ee581439.js",revision:null},{url:"assets/scripting_scripting-intro.md.ee581439.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.25e96413.js",revision:null},{url:"assets/scripting_starting-scripts.md.25e96413.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.d5278f68.js",revision:null},{url:"assets/scripting_troubleshooting.md.d5278f68.lean.js",revision:null},{url:"assets/scripting_typescript.md.4c025217.js",revision:null},{url:"assets/scripting_typescript.md.4c025217.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.a42d47a4.js",revision:null},{url:"assets/scripting_what-is-script.md.a42d47a4.lean.js",revision:null},{url:"assets/servers_index.md.4426d05e.js",revision:null},{url:"assets/servers_index.md.4426d05e.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.d0054e86.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.d0054e86.lean.js",revision:null},{url:"assets/servers_server-software.md.bf373b62.js",revision:null},{url:"assets/servers_server-software.md.bf373b62.lean.js",revision:null},{url:"assets/style.1c46c954.css",revision:null},{url:"assets/test.md.01d2cc55.js",revision:null},{url:"assets/test.md.01d2cc55.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.4e77f495.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.4e77f495.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.d1e81c6c.js",revision:null},{url:"assets/visuals_animation-effects.md.d1e81c6c.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.91c2986d.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.91c2986d.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.ff17fe31.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.ff17fe31.lean.js",revision:null},{url:"assets/visuals_death-animations.md.d15470bf.js",revision:null},{url:"assets/visuals_death-animations.md.d15470bf.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.a4bcde03.js",revision:null},{url:"assets/visuals_glowing-texture.md.a4bcde03.lean.js",revision:null},{url:"assets/visuals_index.md.b3258b15.js",revision:null},{url:"assets/visuals_index.md.b3258b15.lean.js",revision:null},{url:"assets/visuals_introduction.md.cbdca646.js",revision:null},{url:"assets/visuals_introduction.md.cbdca646.lean.js",revision:null},{url:"assets/visuals_leash-position.md.d4aebd4e.js",revision:null},{url:"assets/visuals_leash-position.md.d4aebd4e.lean.js",revision:null},{url:"assets/visuals_materials.md.774663c0.js",revision:null},{url:"assets/visuals_materials.md.774663c0.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.cdbf8a01.js",revision:null},{url:"assets/visuals_math-based-animations.md.cdbf8a01.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.898f1f8b.js",revision:null},{url:"assets/visuals_player-geometry.md.898f1f8b.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.7a42c6ac.js",revision:null},{url:"assets/visuals_remove-shadows.md.7a42c6ac.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.28c3e11c.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.28c3e11c.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.7549e051.js",revision:null},{url:"assets/visuals_structure-presentation.md.7549e051.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.301ea3bf.js",revision:null},{url:"assets/vr_editing-your-first-model.md.301ea3bf.lean.js",revision:null},{url:"assets/vr_index.md.f6f62b12.js",revision:null},{url:"assets/vr_index.md.f6f62b12.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.6a297576.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.6a297576.lean.js",revision:null},{url:"assets/vr_pack_setup.md.feece096.js",revision:null},{url:"assets/vr_pack_setup.md.feece096.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.1a8da894.js",revision:null},{url:"assets/world-generation_biome-tags.md.1a8da894.lean.js",revision:null},{url:"assets/world-generation_biomes.md.17510a30.js",revision:null},{url:"assets/world-generation_biomes.md.17510a30.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.e9c98d74.js",revision:null},{url:"assets/world-generation_custom-ores.md.e9c98d74.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.956cd4e2.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.956cd4e2.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.c8c280cc.js",revision:null},{url:"assets/world-generation_feature-types.md.c8c280cc.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.708bc82c.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.708bc82c.lean.js",revision:null},{url:"assets/world-generation_index.md.1f0c90b2.js",revision:null},{url:"assets/world-generation_index.md.1f0c90b2.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.a0b5e2cd.js",revision:null},{url:"assets/world-generation_structure-features.md.a0b5e2cd.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.40b327c4.js",revision:null},{url:"assets/world-generation_surface-builder.md.40b327c4.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.7dcda2ef.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.7dcda2ef.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
