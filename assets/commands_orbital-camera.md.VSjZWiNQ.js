import{_ as n}from"./chunks/1.CTHyirBC.js";import{_ as c,e as d,t as e,C as o,Q as t,f as s,E as a,D as r,d as m}from"./chunks/framework.CuLWBCQE.js";const u="/assets/images/commands/orbitcam/OrbitCamVisualRep.gif",S=JSON.parse('{"title":"Orbital Camera","description":"This technique allows you to confine your camera rotations to an orbit around the player, an entity, or position, with the height and radius of the orbit being fully adjustable.","frontmatter":{"title":"Orbital Camera","category":"Techniques","mention":["BedrockCommands","zheaEvyline"],"description":"This technique allows you to confine your camera rotations to an orbit around the player, an entity, or position, with the height and radius of the orbit being fully adjustable."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Video Demonstration","slug":"video-demonstration","link":"#video-demonstration","children":[]},{"level":2,"title":"Command","slug":"command","link":"#command","children":[]}],"relativePath":"commands/orbital-camera.md","filePath":"commands/orbital-camera.md"}'),h={name:"commands/orbital-camera.md"},p=t('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>This technique allows you to confine your camera rotations to an orbit around the player, an entity, or position, with the height and radius of the orbit being fully adjustable.</p><h2 id="video-demonstration" tabindex="-1">Video Demonstration <a class="header-anchor" href="#video-demonstration" aria-label="Permalink to &quot;Video Demonstration&quot;">​</a></h2>',4),b=s("h2",{id:"command",tabindex:"-1"},[a("Command "),s("a",{class:"header-anchor",href:"#command","aria-label":'Permalink to "Command"'},"​")],-1),_=t('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @p at @s anchored eyes rotated ~ 0 positioned ^^1^-2 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @s</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+n+'" alt="commandBlockChain1"></p><p><strong>2D Visualisation:</strong></p><p><img src="'+u+'" alt="OrbitCamVisualRep"></p><p><strong>Command Breakdown:</strong></p><ul><li><code>as @p</code><ul><li>sets the execution target to closest player.</li></ul></li><li><code>at @s</code><ul><li>sets the execution position to the target player&#39;s self.</li></ul></li><li><code>anchored eyes</code><ul><li>brings the execution position up to the target player&#39;s eye level.</li></ul></li><li><code>rotated ~ 0</code><ul><li>sets the execution rotation relative to the target player&#39;s horizontal rotation but confines the vertical rotation to 0° (straight).</li><li>if you wish to lock the horizontal rotation instead, simply do: <code>rotated 0 ~</code><ul><li>note: value <code>0</code> can be changed to face the direction you need. Refer to <a href="/commands/selectors.html#rotation">Rotations</a> for more info.</li></ul></li><li>if you do not wish to lock the vertical rotation, simply omit this part altogether to get a full spherical rotation. However, this will not prevent the camera from going underground.</li></ul></li><li><code>positioned ^^1^-2</code><ul><li>pushes the execution position 1 block above the player and 2 blocks behind.</li><li>increase or decrease value 1 to increase / decrease orbit height.</li><li>increase or decrease value -2 to increase / decrease orbit radius. <ul><li>Negative value will set the position behind the player.</li><li>Positive value will set the position in front of the player.</li><li>To learn more, refer to: <a href="/commands/relative-coordinates.html">Coordinates System</a></li></ul></li></ul></li><li><code>run camera @s set minecraft:free ease 0.1 linear pos ~~~</code><ul><li>sets the camera for the target player with the <code>minecraft:free</code> preset with a <code>linear</code> ease value of <code>0.1</code> at relative coordinates (1 block above and 2 blocks behind from the target player&#39;s sight)</li><li>To adjust camera movement speed increase / decrease ease value <code>0.1</code></li><li>To learn about the <code>/camera</code> command and it&#39;s available options such as presets and ease, refer to the following resources: <ul><li><a href="https://learn.microsoft.com/en-us/minecraft/creator/documents/cameracommandintroduction" target="_blank" rel="noreferrer">Introduction to Camera Command</a></li><li><a href="https://youtu.be/GnYrZlBCyWg" target="_blank" rel="noreferrer">Camera Command Video Tutorial</a></li></ul></li></ul></li><li><code>facing @s</code><ul><li>shifts the camera view direction to face the target player&#39;s self.</li></ul></li></ul><p><strong>Similar Examples:</strong></p>',7),g=t(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#To orbit camera around entity tagged with &#39;orbit_center&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @p at @e [tag=orbit_center] anchored eyes rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing @e [tag=orbit_center]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+n+'" alt="A Repeating Command Block"></p>',2),f=t(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#To orbit camera around position 6 7 8</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @p positioned 6 7 8 rotated as @s rotated ~ 0 positioned ^^1^-5 run camera @s set minecraft:free ease 0.1 linear pos ~~~ facing 6 7 8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+n+'" alt="A Repeating Command Block"></p>',2);function y(v,k,C,T,w,x){const l=r("YouTubeEmbed"),i=r("CodeHeader");return m(),d("div",null,[p,e(l,{id:"yOlWjTpInFE"}),b,e(i,null,{default:o(()=>[a("BP/functions/orbital_camera.mcfunction")]),_:1}),_,e(i,null,{default:o(()=>[a("BP/functions/orbital_camera.mcfunction")]),_:1}),g,e(i,null,{default:o(()=>[a("BP/functions/orbital_camera.mcfunction")]),_:1}),f])}const B=c(h,[["render",y]]);export{S as __pageData,B as default};
