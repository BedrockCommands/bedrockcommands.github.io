import{_ as e,e as h,t as n,C as t,f as s,E as i,Q as l,D as p,d as k}from"./chunks/framework.CuLWBCQE.js";const B=JSON.parse('{"title":"Molang into Scoreboard","description":"Turn MoLang variable value into scoreboard value.","frontmatter":{"title":"Molang into Scoreboard","mentions":["SirLich","MedicalJewel105","shanewolf38","Luthorius","TheItsNameless","ThomasOrs"],"description":"Turn MoLang variable value into scoreboard value."},"headers":[],"relativePath":"animation-controllers/molang-into-scoreboard.md","filePath":"animation-controllers/molang-into-scoreboard.md"}'),r={name:"animation-controllers/molang-into-scoreboard.md"},o=s("p",null,[i("The following provides a method to read any Molang (variable, query, etc.) into a score instantly. Ensure that the animation name called in the controllers "),s("code",null,"convert"),i(" state matches the name of the animation (animation.namespace.molang_to_score) as defined in the entity.")],-1),E=s("p",null,[s("strong",null,"NOTE:"),i(" These two commands must be run in the world as part of the setup: "),s("code",null,"/scoreboard objectives add MoLang dummy"),s("code",null,'/scoreboard players set "#10" MoLang 10')],-1),d=l(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;controller.animation.namespace.molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;initial_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;idle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;states&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;idle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;transitions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;convert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;condition to start conversion&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;on_exit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set @s MoLang 0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v.convert = &lt;variable to convert&gt;;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v.digit = 1000000000;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;convert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;animations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;molang_to_score&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;transitions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;idle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,1),F=l(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;animation.namespace.molang_to_score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;animation_length&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;anim_time_update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;t.digit = Math.mod(Math.floor(v.convert / v.digit), 10) + 0.1; v.digit = v.digit / 10; return t.digit;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;timeline&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players operation @s MoLang *= </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players operation @s MoLang += </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;3.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;4.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;5.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;6.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;7.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 7&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;8.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;9.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/scoreboard players set </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MoLang 9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>Explanation:</strong> When the conversion begins, the controller resets the player&#39;s Molang score and <code>#var</code>&#39;s (fake player) Molang score. The conversion variable <code>v.convert</code> is initialized and the digit variable <code>v.digit</code> is set to grab the 10th digit (10^10). The first animation then runs, setting the animation time equal to the 10th digit and setting the digit variable to grab the next digit (digit 9, 10^9). Because all timeline indices are run up until the time set, the &quot;0.0&quot; entry of the timeline will always run. This multiplies the player&#39;s Molang score by 10 to set the correct digit and then adds on the last digit grabbed (for the first run this will always be 0, as <code>#var</code> was reset by the controller). The process then repeats 10 more times to grab all 10 digits of the conversion variable. Recall that each animation grabs the digit set by the previous animation, which is why the animation is run 11 times.</p><p>To perform a test of the conversion in-game, set <code>&lt;condition to start conversion&gt;</code> to <code>q.is_using_item</code> and <code>&lt;variable to convert&gt;</code> to <code>Math.random_integer(0, 9999)</code>. Grab yourself an apple, start eating and watch the numbers roll.</p>`,3);function g(u,c,y,C,b,q){const a=p("CodeHeader");return k(),h("div",null,[o,E,n(a,null,{default:t(()=>[i("BP/animation_controllers/molang_to_score.animation_controllers.json")]),_:1}),d,n(a,null,{default:t(()=>[i("BP/animations/molang_to_score.animation.json")]),_:1}),F])}const _=e(r,[["render",g]]);export{B as __pageData,_ as default};