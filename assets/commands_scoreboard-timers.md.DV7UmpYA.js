import{_ as l}from"./chunks/7.58FQPVLC.js";import{_ as r,e as o,t as a,C as n,Q as e,D as c,d as p,E as i}from"./chunks/framework.CuLWBCQE.js";const t="/assets/images/commands/commandBlockChain/8.png",d="/assets/images/commands/longDivision.png",B=JSON.parse('{"title":"Scoreboard Timers","description":"Create timers using scoreboards.","frontmatter":{"title":"Scoreboard Timers","category":"Scoreboard Systems","mentions":["BedrockCommands","zheaEvyline"],"nav_order":5,"description":"Create timers using scoreboards."},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":2,"title":"Defining Events With Limited Intervals","slug":"defining-events-with-limited-intervals","link":"#defining-events-with-limited-intervals","children":[]},{"level":2,"title":"Executing Commands During Timeframe","slug":"executing-commands-during-timeframe","link":"#executing-commands-during-timeframe","children":[]},{"level":2,"title":"Entity Timers","slug":"entity-timers","link":"#entity-timers","children":[]}],"relativePath":"commands/scoreboard-timers.md","filePath":"commands/scoreboard-timers.md"}'),h={name:"commands/scoreboard-timers.md"},m=e('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>This system allows you to run your desired commands at specific intervals with any amount of delay that you wish to add.</p><ul><li><strong>Some Examples:</strong><ul><li>Sending a message in chat every 2 hours.</li><li>Running a &#39;lag clear&#39; function every 10 minutes.</li><li>Effecting players with &#39;speed&#39; every 30 seconds.</li></ul></li></ul><p>This system is especially useful when you need to set up multiple timers on your world. When working with command blocks, you may use the <a href="/commands/intro-to-command-blocks.html#command-block-tick-delay">Tick Delay</a> option to delay the time taken for your commands to run. However, when working with functions, you will need to use a system like this.</p><p>It is recommended to use this system while working with command blocks, as well if you wish to run all your world-timers in sync with one another, ie. with the same start time.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p><em>To be typed in chat:</em></p>',8),u=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/scoreboard objectives add ticks dummy</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/scoreboard objectives add events dummy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Once you have created these two objectives, you will need to define the interval for each repeating event you need on your world in the <code>ticks</code> objective.</p><p>To do that, first, you must know that 1 second is approximately 20 game-ticks in Minecraft. Based on this knowledge, you will need to do some basic calculations to obtain the equivalent ticks for each interval you want to define.</p>`,3),b=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2h = 20(t) × 60(s) × 60(m) × 2(h) = 144000t</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/scoreboard players set 2h ticks 144000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 10m = 20(t) × 60(s) × 10(m) = 12000t</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/scoreboard players set 10m ticks 12000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 30s = 20(t) × 30(s) = 600t</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/scoreboard players set 30s ticks 600</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>We will now use this scoreboard data to make our timers function.</p><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-label="Permalink to &quot;System&quot;">​</a></h2>`,3),k=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># World Timer/Clock</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players add timer ticks 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation * events = timer ticks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Chat Message (every 2h)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation chatMessage events %= 2h ticks</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score chatMessage events matches 0 run say Technoblade never dies!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Lag Clear (every 10m)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation lagClear events %= 10m ticks</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score lagClear events matches 0 run function clear_lag</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Speed Effect (every 30s)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation speedEffect events %= 30s ticks</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score speedEffect events matches 0 run effect @a speed 10 2 true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><img src="`+t+'" alt="Chain Of 8 Command Blocks"></p><p>Here, we have taken 3 examples to show how to implement them, but you can add any timer you prefer and as many as you need.</p><p>Just make sure to follow the given order and properly apply the <code>/execute if score</code> condition as shown for your desired commands.</p><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation&quot;">​</a></h2><ul><li><strong><code>events</code></strong> on this objective we label all the repeating events we want on our world. <ul><li><code>chatMessage</code></li><li><code>lagClear</code></li><li><code>speedEffect</code></li><li><em>Note: All 3 are fake-player-names in the objective.</em></li></ul></li><li><strong><code>ticks</code></strong> on this objective we define all the intervals for our events and also run our scoreboard timer. <ul><li><code> 2h</code> interval (static score: 144000)</li><li><code>10m</code> interval (static score: 12000)</li><li><code>30s</code> interval (static score: 600)</li><li><code>timer</code> clock (variable score: n+1)</li><li><em>Note: All 4 are fake-player-names in the objective</em></li></ul></li></ul><ol><li><p><strong>Command 1:</strong> This command adds +1 score every tick to the fake-player-name &#39;timer&#39; indicating a tick has passed in the game. This is basically our scoreboard timer/clock which we will use for all the repeating events on our world.</p></li><li><p><strong>Command 2:</strong> Here, we copy &#39;timer&#39; score to all our events using the <code>*</code> wildcard selector. This will allow us to perform operations to determine if the interval has been reached to run the commands for that particular event. Example:</p><ul><li>If <code>timer</code> score is 1200, it means 1200 game-ticks have passed.</li><li>And this command makes it so all our events fake-player-names &#39;chatMessage&#39;, &#39;lagClear&#39;, &#39;speedEffect&#39; scores are also 1200.</li></ul></li><li><p><strong>Command 3:</strong> We will use the <code>%=</code> modulo operation to check if our events scores are divisible by their corresponding interval. ie., if the remainder is equal 0.</p><ul><li>Chat Message: <code>1200/144000</code><ul><li>Q=0, R=1200</li><li><em>hence, interval not reached.</em></li></ul></li><li>Lag Clear: <code>1200/12000</code><ul><li>Q=0, R=1200</li><li><em>hence, interval not reached.</em></li></ul></li><li>Speed Effect: <code>1200/600</code><ul><li>Q=2, R=0</li><li><em>hence, interval reached and event commands can be executed.</em></li></ul></li><li>Here, we can note that the first 2 events are yet to happen, but the 3rd event is happening for the second time.</li></ul></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In Minecraft, scoreboard division is only calculated up to whole numbers and decimal values are ignored. <img src="'+d+'" alt=""></p></div><ul><li><strong>Command 4:</strong> the remainder obtained from the calculation is applied to the corresponding event&#39;s fake-player-name. Based on this knowledge, we can run our commands if the it&#39;s score is equal to <code>0</code>.</li></ul><p>The rest of the commands are identical in structure and only the event labels and interval durations are changed.</p><h2 id="defining-events-with-limited-intervals" tabindex="-1">Defining Events With Limited Intervals <a class="header-anchor" href="#defining-events-with-limited-intervals" aria-label="Permalink to &quot;Defining Events With Limited Intervals&quot;">​</a></h2><p>To limit how many times an event occurs, you need to create a new objective called <code>intervals</code> and define how many times that event should occur, as shown below.</p>',12),y=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/scoreboard objectives set chatMessage intervals 5</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/scoreboard objectives set speedEffect intervals 10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Once you have done that, modify your system as shown below.</p>`,2),g=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players add timer ticks 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation * events = timer ticks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Chat Message (every 10m)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation chatMessage events %= 2h ticks</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score chatMessage events matches 0 if score chatMessage intervals matches 1.. run say Technoblade never dies!</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score chatMessage events matches 0 if score chatMessage intervals matches 1.. run scoreboard players remove chatMessage intervals 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Speed Effect (every 30s)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation speedEffect events %= 30s ticks</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run effect @a speed 10 2 true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run scoreboard players remove speedEffect intervals 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="`+t+'" alt="Chain Of 8 Command Blocks"></p><h2 id="executing-commands-during-timeframe" tabindex="-1">Executing Commands During Timeframe <a class="header-anchor" href="#executing-commands-during-timeframe" aria-label="Permalink to &quot;Executing Commands During Timeframe&quot;">​</a></h2><p>To run commands during the timeframe between intervals for a particular system, you may employ the technique shown below.</p>',4),v=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Speed Effect (every 30s) + Particle (every tick)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players operation speedEffect events %= 30s ticks</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score speedEffect intervals matches 1.. as @a at @s run particle minecraft:shulker_bullet ~~~</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run effect @a speed 10 2 true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute if score speedEffect events matches 0 if score speedEffect intervals matches 1.. run scoreboard players remove speedEffect intervals 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>As shown in line 3, to run commands while the timer is running, all you need to do is remove the &quot;if score&quot; testing if the interval has been reached. And instead, only test if <em>any</em> interval remains to run our commands.</p><p>Let&#39;s say we had set the <code>intervals</code> for this event to <code>10</code>. Then players would also have had particle trails for 300 seconds as repeating a 30s event 10 times will total 300 seconds.</p><h2 id="entity-timers" tabindex="-1">Entity Timers <a class="header-anchor" href="#entity-timers" aria-label="Permalink to &quot;Entity Timers&quot;">​</a></h2><p>In some cases, such as an entity despawn event, you will need to run timers for each entity separately rather than a synchronised timer which could cause the event to trigger too soon. In such cases, an Async Timer can be helpful.</p><p>Let&#39;s say we want to perform the following actions:</p><ol><li>kill all entities named &quot;station&quot; 5 minutes after they&#39;ve been summoned.</li><li>play a shulker particle around them during that timeframe.</li><li>play a flame particle around them in the first 10 seconds.</li><li>play a pling sound to nearby players when the timer reaches half way.</li><li>stop the timer if a passive mob is nearby.</li><li>loop the timer if a hostile mob is nearby.</li></ol>`,7),f=e(`<div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Clock</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scoreboard players add @e [name=station, scores={ticks=0..}] ticks 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Executing Commands while timer is running</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e [name=station, scores={ticks=0..}] at @s run particle minecraft:shulker_bullet ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Executing commands within a timeframe</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e [name=station, scores={ticks=0..200}] at @s run particle minecraft:basic_flame_particle ~~~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Executing commands at specific intervals</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e [name=station, scores={ticks=3600}] at @s run playsound note.pling @a [r=10]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Stopping the timer</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e [name=station] at @s if entity @e [family=pacified, r=10, c=1] run scoreboard players set @s ticks -1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Looping the timer</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute as @e [name=station, scores={ticks=6000}] at @s if entity @e [family=monster, r=10, c=1] run scoreboard players set @s ticks 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># End</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/kill @e [name=station, scores={ticks=6000}]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img src="`+l+'" alt="Chain Of 7 Command Blocks"></p><p>As shown, setting the score to <code>0</code> when it completes the timeframe will loop the timer. And setting the score to <code>-1</code> will stop/disable it. You can still set the score to <code>0</code> to start the timer again.</p>',3);function _(F,C,w,E,T,A){const s=c("CodeHeader");return p(),o("div",null,[m,a(s),u,a(s),b,a(s,null,{default:n(()=>[i("BP/functions/world_timer.mcfunction")]),_:1}),k,a(s),y,a(s,null,{default:n(()=>[i("BP/functions/world_timer.mcfunction")]),_:1}),g,a(s),v,a(s,null,{default:n(()=>[i("BP/functions/entity_timer.mcfunction")]),_:1}),f])}const S=r(h,[["render",_]]);export{B as __pageData,S as default};