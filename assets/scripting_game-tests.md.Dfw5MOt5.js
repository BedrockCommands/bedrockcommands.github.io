import{_ as n,e as l,t as a,C as e,Q as s,D as r,d as p,E as t}from"./chunks/framework.CuLWBCQE.js";const f=JSON.parse('{"title":"GameTests","description":"The GameTest Framework allows us to create unit tests (\\"GameTests\\") which make it easier to test if game mechanics work.","frontmatter":{"title":"GameTests","category":"Tutorials","tags":["experimental"],"mentions":["cda94581","SirLich","Joelant05","solvedDev","sermah","stirante","Paty007gr","JaylyDev","Fabrimat","Herobrine643928","kumja1"],"description":"The GameTest Framework allows us to create unit tests (\\"GameTests\\") which make it easier to test if game mechanics work."},"headers":[{"level":2,"title":"Get started with GameTest","slug":"get-started-with-gametest","link":"#get-started-with-gametest","children":[]}],"relativePath":"scripting/game-tests.md","filePath":"scripting/game-tests.md"}'),h={name:"scripting/game-tests.md"},k=s('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The Script API is currently in active development, and breaking changes are frequent. This page assumes the format of Minecraft 1.20.40</p></div><p>The GameTest Framework allows us to create unit tests (&quot;GameTests&quot;) which make it easier to test if game mechanics work.</p><p>GameTests can be used with the <code>/gametest</code> command.</p><ul><li><code>/gametest runthis</code> - Runs the nearest GameTest in range.</li><li><code>/gametest runthese</code> - Runs all GameTests in range.</li><li><code>/gametest pos</code> - It tells you the relative coordinates of the nearest GameTest.</li><li><code>/gametest clearall [radius: int]</code> - Removes all GameTests in the specified radius.</li><li><code>/gametest run &lt;testName: GameTestName&gt; [rotationSteps: int]</code> - Creates and runs the specified GameTest.</li><li><code>/gametest runset [tagTag: GameTestTag] [rotationSteps: int]</code> - Creates and runs all GameTests with the specified tag.</li><li><code>/gametest create &lt;testName: string&gt; [width: int] [height: int] [depth: int]</code> - Creates a blank GameTest area with the specified dimensions.</li><li><code>/reload</code> - Reloads all function and script files from all behavior packs. (1.19+)</li></ul><p>(1.19.40+) Vanilla GameTests are removed from the Minecraft game files, so you cannot run any gametests without adding your own custom behavior pack. You can find them in the <a href="https://github.com/microsoft/minecraft-gametests/tree/main/behavior_packs/vanilla_gametest" target="_blank" rel="noreferrer"><strong>official repo</strong></a>.</p><h2 id="get-started-with-gametest" tabindex="-1">Get started with GameTest <a class="header-anchor" href="#get-started-with-gametest" aria-label="Permalink to &quot;Get started with GameTest&quot;">​</a></h2><p>To get started, you&#39;ll want to begin with your own behavior pack and decent knowledge of scripting and API. If you&#39;re getting started check out <a href="/scripting/starting-scripts.html">this article</a>.</p><p>To use the GameTest Framework, the <code>@minecraft/server-gametest</code> module is required. The GameTest API module also requires the <code>@minecraft/server</code> module, so in your dependency in your manifest.json requires the following:</p>',8),o=s(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;module_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@minecraft/server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.7.0-beta&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;module_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@minecraft/server-gametest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0-beta&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>To run a GameTest, a structure file is required on your behavior pack and the command needs to be registered via <code>register</code> function.</p>`,2),d=s(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GameTest </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@minecraft/server-gametest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Registration Code for our test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GameTest.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;wiki&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Name of the class of tests.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;simpleTest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Name of this test.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Implementation of the test</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {import(&quot;@minecraft/server&quot;).Vector3}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         * location from the test of where the cow should spawn in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, y: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, z: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> test.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:cow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, location); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// returns Entity instance</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        test.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">succeedWhen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          test.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assertEntityPresentInArea</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;minecraft:cow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">maxTicks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">410</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">structureName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mystructure:wiki&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* use the wiki.mcstructure file */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>The test function is locked when the command is registered, meaning the test function can not access to variables outside the test function after the command is registered.</p><p>If you&#39;re having issues with the Script API, consider checking out an article of <a href="https://learn.microsoft.com/en-us/minecraft/creator/documents/gametestbuildyourfirstgametest" target="_blank" rel="noreferrer"><strong>Building your first GameTest</strong></a> in Microsoft learn, or joining <strong>Bedrock Add-Ons</strong> for support, which you can find alongside a vast array of other resources on the <a href="/meta/useful-links.html#discord-links">Useful Links</a> page!</p>`,3);function c(g,E,m,u,y,b){const i=r("CodeHeader");return p(),l("div",null,[k,a(i,null,{default:e(()=>[t("BP/manifest.json/")]),_:1}),o,a(i,null,{default:e(()=>[t("BP/scripts/Main.js")]),_:1}),d])}const T=n(h,[["render",c]]);export{f as __pageData,T as default};