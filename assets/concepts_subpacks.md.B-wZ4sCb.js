import{_ as p,e as h,t as i,C as k,Q as t,f as s,E as a,D as e,d as r}from"./chunks/framework.CuLWBCQE.js";const B=JSON.parse(`{"title":"Subpacks","description":"Subpacks allow you to select between different add-on 'configurations'.","frontmatter":{"title":"Subpacks","mentions":["SirLich","solvedDev","Joelant05","ChilRx","SmokeyStack","MedicalJewel105","TheItsNameless"],"description":"Subpacks allow you to select between different add-on 'configurations'."},"headers":[{"level":2,"title":"What are Subpacks?","slug":"what-are-subpacks","link":"#what-are-subpacks","children":[]},{"level":2,"title":"How do Subpacks work?","slug":"how-do-subpacks-work","link":"#how-do-subpacks-work","children":[]},{"level":2,"title":"Creating Subpacks","slug":"creating-subpacks","link":"#creating-subpacks","children":[]},{"level":2,"title":"Manifest Part","slug":"manifest-part","link":"#manifest-part","children":[]},{"level":2,"title":"Known Things","slug":"known-things","link":"#known-things","children":[]}],"relativePath":"concepts/subpacks.md","filePath":"concepts/subpacks.md"}`),o={name:"concepts/subpacks.md"},c=t('<h2 id="what-are-subpacks" tabindex="-1">What are Subpacks? <a class="header-anchor" href="#what-are-subpacks" aria-label="Permalink to &quot;What are Subpacks?&quot;">​</a></h2><p>Subpacks allow you to select between different add-on &#39;configurations&#39;.</p><p>They are intended for texture resolutions to load on different memory capacities, but can also be used to create file variations in behavior and resource packs. These variations can be selected by clicking the gear icon and adjusting the slider.</p><h2 id="how-do-subpacks-work" tabindex="-1">How do Subpacks work? <a class="header-anchor" href="#how-do-subpacks-work" aria-label="Permalink to &quot;How do Subpacks work?&quot;">​</a></h2><p>Files placed in you subpack folder will override files placed in your main add-on folder, if the subpack is selected. For example, if your add-on contains both <code>RP/textures/entities/ghost.png</code> and <code>RP/subpacks/pack_1/textures/ghost.png</code>, the second image file will replace the first, if subpack <code>pack_1</code> is selected.</p><p>For more information about how files override each other, please see our page on <a href="/concepts/overwriting-assets.html">overriding vanilla assets</a>.</p><h2 id="creating-subpacks" tabindex="-1">Creating Subpacks <a class="header-anchor" href="#creating-subpacks" aria-label="Permalink to &quot;Creating Subpacks&quot;">​</a></h2><ul><li>To start adding a subpack you need to create a <code>subpacks</code> folder inside the root of your <code>BP</code>/<code>RP</code>.</li><li>Then inside the <code>subpacks</code> folder add a folder for each subpack you want to have e.g.</li></ul>',8),d=s("ul",null,[s("li",null,"Inside each of these folders you can add the content of each subpack. This can be anything that normally goes in your behavior or resource pack. e.g.")],-1),u=s("h2",{id:"manifest-part",tabindex:"-1"},[a("Manifest Part "),s("a",{class:"header-anchor",href:"#manifest-part","aria-label":'Permalink to "Manifest Part"'},"​")],-1),E=s("p",null,[a("To register the subpacks in the manifest you need to add "),s("code",null,"subpacks"),a(" and this contains an array of subpacks.")],-1),b=s("p",null,"Example:",-1),g=t(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;format_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;header&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Pack Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Pack Description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;uuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2fc2dd6f-86cb-4370-af70-21490a1ae471&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;min_engine_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;resources&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;uuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;f6821b4a-1854-44fc-a8a4-0c2847ffda46&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;subpacks&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;folder_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subpack_1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First Subpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;memory_tier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;folder_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subpack_2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Second Subpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;memory_tier&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li><p><code>name</code> - name that will show when selecting subpacks.</p></li><li><p><code>memory_tier</code>- amount of RAM that device must have to enable this subpack. 1 memory tier = 0.25 GB.</p></li><li><p><code>folder_name</code> - name of the folder to be used for this subpack, for example in the examples above this would be <code>subpack_1</code> or <code>subpack_2</code>.</p></li></ul><h2 id="known-things" tabindex="-1">Known Things <a class="header-anchor" href="#known-things" aria-label="Permalink to &quot;Known Things&quot;">​</a></h2><p>If you add only one subpack, there will be 2 options at the subpacks selection section, however second resolution (no subpack actually) does <strong>not</strong> make content in the root folder override subpacks.</p>`,4);function y(m,F,C,f,_,q){const n=e("FolderView"),l=e("CodeHeader");return r(),h("div",null,[c,i(n,{paths:["RP/subpacks/subpack_1","RP/subpacks/subpack_2"]}),d,i(n,{paths:["RP/subpacks/subpack_1/textures/blocks/dirt.png","RP/subpacks/subpack_1/textures/items/example_item.png","RP/subpacks/subpack_2/textures/blocks/dirt.png","RP/subpacks/subpack_2/textures/items/example_item.png"]}),u,E,b,i(l,null,{default:k(()=>[a("RP/manifest.json")]),_:1}),g])}const v=p(o,[["render",y]]);export{B as __pageData,v as default};