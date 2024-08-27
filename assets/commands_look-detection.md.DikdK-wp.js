import{_ as o}from"./chunks/1.CTHyirBC.js";import{_ as a,e as n,t as i,Q as e,d as s,D as l}from"./chunks/framework.CuLWBCQE.js";const c="/assets/images/commands/lookDetectionVisualRep.gif",T=JSON.parse('{"title":"Look Detection","description":"This command-technique allows you to detect when a target looks at a player/entity/coordinate and subsequently run your desired commands.","frontmatter":{"title":"Look Detection","category":"Techniques","mention":["BedrockCommands","AjaxGb","Plagiatus","zheaEvyline"],"description":"This command-technique allows you to detect when a target looks at a player/entity/coordinate and subsequently run your desired commands."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Command","slug":"command","link":"#command","children":[]},{"level":2,"title":"Calculate Viewing Angle","slug":"calculate-viewing-angle","link":"#calculate-viewing-angle","children":[]}],"relativePath":"commands/look-detection.md","filePath":"commands/look-detection.md"}'),d={name:"commands/look-detection.md"},r=e('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p><strong>Credits:</strong> <em>@AjaxGb</em></p><p>This command-technique allows you to detect when a target looks at a player/entity/coordinate and subsequently run your desired commands.</p><h2 id="command" tabindex="-1">Command <a class="header-anchor" href="#command" aria-label="Permalink to &quot;Command&quot;">​</a></h2>',5),p=e('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as &lt;target&gt; at @s anchored eyes facing &lt;entity | coordinate&gt; positioned ^^^1 positioned ~~-1.62~ rotated as @s positioned ^^^-1 if entity @s [r=0.2] run &lt;command&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="A Repeating Command Block"></p><p><strong>Visualisation:</strong></p><p><img src="'+c+'" alt="Alex Looking At A Pig&#39;s Head"></p><blockquote><p><em>Note: This is a rough visual representation, not precise measurements.</em></p></blockquote><p><strong>Command Breakdown:</strong></p><ul><li><code>as &lt;target&gt;</code><ul><li>sets the execution target. Example: <ul><li><code>as @p</code> (closest player)</li><li><code>as @e [type=zombie]</code> (all zombies)</li></ul></li></ul></li><li><code>at @s</code><ul><li>sets the execution position to the target&#39;s feet.</li></ul></li><li><code>anchored eyes</code><ul><li>brings the execution position up to the target&#39;s eye level.</li></ul></li><li><code>facing &lt;entity | coordinate&gt;</code><ul><li>sets the execution rotation facing an entity or coordinate. Example: <ul><li><code>facing 0 0 0</code> facing coordinate: 0,0,0.</li><li><code>facing entity @e [type=pig, c=1] eyes</code> (facing eyes of nearest pig)</li><li><code>facing entity @e [type=zombie, c=1] feet</code> (facing feet of nearest zombie)</li></ul></li></ul></li><li><code>positioned ^^^1</code><ul><li>from previous point, pushes the execution position 1 block forward in the direction of the entity/coordinate.</li></ul></li><li><code>positioned ~~-1.62~</code><ul><li>lowers the execution position back to that of the player&#39;s feet on the y axis. Which is 1.62 blocks below eye level.</li><li>Note: Due to the <a href="https://bugs.mojang.com/browse/MCPE-165051" target="_blank" rel="noreferrer">MCPE-165051</a> bug, you cannot use <code>anchored eyes</code> in place of this.</li></ul></li><li><code>rotated as @s</code><ul><li>Reverts the execution rotation to that of the target.</li></ul></li><li><code>positioned ^^^-1</code><ul><li>from previous point, pushes the execution position 1 block backwards from the direction the target is facing.</li></ul></li><li><code>if entity @s [r=0.2]</code><ul><li>checks if the target is within a 0.2 block radius from the execution position. ie., check if after this back and forth we&#39;ve arrived roughly back at the target&#39;s feet position.</li><li>To increase or decrease the tolerance for what is considered &quot;close enough&quot;, change the <code>0.2</code> distance argument. <ul><li>it needs to be between <code>0.2</code> and <code>2</code>, as <code>2</code> basically means you can look in the opposite direction and it&#39;s still &quot;close enough&quot;. So, realistically, you want to most likely stay well below <code>1</code>.</li></ul></li><li>To calculate the exact viewing cone angle, see below.</li></ul></li></ul><p><strong>Examples:</strong></p><ol><li>Run a <code>/say</code> command when looking at the eyes of the nearest cow tagged &#39;target&#39;:</li></ol>',9),u=e('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s anchored eyes facing entity @e [type=cow, tag=target, c=1] eyes positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s [r=0.2] run say hello cow!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="A Repeating Command Block"></p><ol start="2"><li>Run a <code>/say</code> command when looking at the position 10,20,30:</li></ol>',3),h=e('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @a at @s anchored eyes facing 10 20 30 positioned ~~-1.62~ positioned ^^^1 rotated as @s positioned ^^^-1 if entity @s [r=0.2] run say hello block!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="A Repeating Command Block"></p><p><strong>Alternative Structure:</strong></p>',3),g=e('<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as &lt;target&gt; at &lt;coordinate | entity&gt; facing entity @s eyes positioned as @s positioned ^^^1 rotated as @s positioned ^^^1 if entity @s[r=0.02] run &lt;command&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="A Repeating Command Block"></p><p>If you don&#39;t need to detect the target looking at the <em>eyes</em> of an entity but their feet or a coordinate, you may use this structure which negates the need for the <code>anchored eyes</code> condition as the execution position begins from the entity/coordinate rather than the target.</p><h2 id="calculate-viewing-angle" tabindex="-1">Calculate Viewing Angle <a class="header-anchor" href="#calculate-viewing-angle" aria-label="Permalink to &quot;Calculate Viewing Angle&quot;">​</a></h2><p>To approximate the distance/radius you want to use based on your viewing angle, you can use the following formula, where <code>α</code> is the angle that you want this method to trigger inside of, left and right of the target:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>r = 2 * sin ( α / 2 )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or, the inverse to calculate what viewing angle a certain radius / distance (<code>r</code>) value will give you:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>α = sin^(-1) (r / 2) * 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>Note: Depending on your calculator, you&#39;ll need to convert from radians to degrees.</p></blockquote><p>With the above calculation, the example value of <code>r=0.2</code> leaves us with roughly a 12° angle by which we can miss the exact target in either direction and still have it considered &quot;close enough.&quot;</p>',10);function m(y,b,_,k,v,f){const t=l("CodeHeader");return s(),n("div",null,[r,i(t),p,i(t),u,i(t),h,i(t),g])}const x=a(d,[["render",m]]);export{T as __pageData,x as default};
