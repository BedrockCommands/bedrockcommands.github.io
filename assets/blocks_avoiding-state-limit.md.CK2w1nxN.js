import{_ as a,e,t,C as n,Q as s,D as l,d as o,E as p}from"./chunks/framework.CuLWBCQE.js";const y=JSON.parse('{"title":"Avoiding State Limit","description":"Blocks have a limit of 16 valid values per state that cannot be exceed. This guide will explain how to avoid reaching the limit.","frontmatter":{"title":"Avoiding State Limit","category":"Tutorials","tags":["expert"],"mentions":["Kaioga5","QuazChick"],"description":"Blocks have a limit of 16 valid values per state that cannot be exceed. This guide will explain how to avoid reaching the limit."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"How It Works","slug":"how-it-works","link":"#how-it-works","children":[]},{"level":2,"title":"The Logic","slug":"the-logic","link":"#the-logic","children":[]},{"level":2,"title":"How It Looks","slug":"how-it-looks","link":"#how-it-looks","children":[]},{"level":2,"title":"What You Have Learned","slug":"what-you-have-learned","link":"#what-you-have-learned","children":[]}],"relativePath":"blocks/avoiding-state-limit.md","filePath":"blocks/avoiding-state-limit.md"}'),h={name:"blocks/avoiding-state-limit.md"},r=s(`<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Blocks have a limit of 16 valid values per state that cannot be exceed. This guide will explain how to avoid reaching the limit.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This tutorial does not show you how to have more than 16 states values, however using this method will simulate that!</p></div><h2 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works&quot;">​</a></h2><p>This method combines two or more states in order to re-use and read them in permutations or conditions. For example, a block with the English alphabet letters will need 26 values. You can use less values by using combinations.</p><h2 id="the-logic" tabindex="-1">The Logic <a class="header-anchor" href="#the-logic" aria-label="Permalink to &quot;The Logic&quot;">​</a></h2><p>What your code will do going of by the example above is the following:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1 &amp; 1 = A   1 &amp; 5 = E   1 &amp; 9 =  I   1 &amp; 13 = M</span></span>
<span class="line"><span>1 &amp; 2 = B   1 &amp; 6 = F   1 &amp; 10 = J</span></span>
<span class="line"><span>1 &amp; 3 = C   1 &amp; 7 = G   1 &amp; 11 = K</span></span>
<span class="line"><span>1 &amp; 4 = D   1 &amp; 8 = H   1 &amp; 12 = L</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>And then;</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2 &amp; 1 = N   2 &amp; 5 = R   2 &amp; 9 =  V   2 &amp; 13 = Z</span></span>
<span class="line"><span>2 &amp; 2 = O   2 &amp; 6 = S   2 &amp; 10 = W</span></span>
<span class="line"><span>2 &amp; 3 = P   2 &amp; 7 = T   2 &amp; 11 = X</span></span>
<span class="line"><span>2 &amp; 4 = Q   2 &amp; 8 = U   2 &amp; 12 = Y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Using this method, you achieve the same results with just 15 values. The more values available for combinations, the higher your state limit is.</p><h2 id="how-it-looks" tabindex="-1">How It Looks <a class="header-anchor" href="#how-it-looks" aria-label="Permalink to &quot;How It Looks&quot;">​</a></h2><p>Using the example above as reference, your states would look like this:</p>`,13),d=s(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;wiki:value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;wiki:division&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>And for your conditions, like this:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q.block_state(&#39;wiki:division&#39;) == 1 &amp;&amp; q.block_state(&#39;wiki:value&#39;) == 1&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q.block_state(&#39;wiki:division&#39;) == 1 &amp;&amp; q.block_state(&#39;wiki:value&#39;) == 2&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="what-you-have-learned" tabindex="-1">What You Have Learned <a class="header-anchor" href="#what-you-have-learned" aria-label="Permalink to &quot;What You Have Learned&quot;">​</a></h2><p>You have learned how to use less than 64 states and do more, combining states to have better possibilities.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use more than 2 values in order to have more possible combinations.</p></div>`,7);function k(c,u,m,g,b,E){const i=l("CodeHeader");return o(),e("div",null,[r,t(i,null,{default:n(()=>[p("minecraft:block > description")]),_:1}),d])}const C=a(h,[["render",k]]);export{y as __pageData,C as default};