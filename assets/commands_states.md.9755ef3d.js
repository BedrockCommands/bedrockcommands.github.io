import{_ as o}from"./chunks/7.d3b49dbe.js";import{_ as t,c as r,a as n,w as a,e as s,r as c,o as p,d as i}from"./404.md.eebc8d69.js";const l="/assets/images/commands/commandBlockChain/5.png",D=JSON.parse('{"title":"Movement Detections","description":"","frontmatter":{"title":"Movement Detections","category":"Techniques","mention":["BedrockCommands","zheaEvyline"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"is_moving","slug":"is-moving","link":"#is-moving","children":[]},{"level":2,"title":"is_sneaking","slug":"is-sneaking","link":"#is-sneaking","children":[]},{"level":2,"title":"is_crawling","slug":"is-crawling","link":"#is-crawling","children":[]},{"level":2,"title":"is_swimming","slug":"is-swimming","link":"#is-swimming","children":[]},{"level":2,"title":"is_gliding","slug":"is-gliding","link":"#is-gliding","children":[]},{"level":2,"title":"is_sleeping","slug":"is-sleeping","link":"#is-sleeping","children":[]}],"relativePath":"commands/states.md"}'),m={name:"commands/states.md"},d=s('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>These command-techniques allow you to detect certain player/entity &#39;states&#39; and subsequently execute your desired commands.</p><blockquote><p>Note: For a more performant and high-accuracy approach, refer to <a href="/animation-controllers/animation-controllers-intro.html">Animation Controllers</a></p></blockquote><h2 id="is-moving" tabindex="-1">is_moving <a class="header-anchor" href="#is-moving" aria-hidden="true">#</a></h2><p>This technique allows you to detect when your target is/isn&#39;t moving.</p><p>::warning</p><ol><li>Does not account for movement while the spyglass is zoomed in.</li><li>Does not account for movement when Slowness Level 6 or higher is in effect. :::</li></ol><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_moving</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_moving dummy</code></li></ul></li></ul>',10),g=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/execute as @a at @s positioned ~~10000~ if entity @e [type=leash_knot, r=0.1252] run scoreboard players set @s is_moving 0</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a at @s positioned ~~10000~ unless entity @e [type=leash_knot, r=0.1252] run scoreboard players add @s is_moving 1</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @e [type=leash_knot] at @s unless entity @s [y=-80, dy=9974] run kill @s</span></span>
<span class="line"><span style="color:#C3E88D;">/execute at @a positioned ~~10000~ run summon leash_knot ~~~</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_moving=0}] run say I&#39;m not moving</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_moving=1}] run say I started moving</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_moving=1..}] run say I&#39;m still moving</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+o+'" alt="commandBlockChain7"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_moving=0</code></strong> target is <em>not</em> moving. (used for repeating actions)</li><li><strong><code>is_moving=1</code></strong> target started moving. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_moving=1..</code></strong> target is still moving. (used for repeating actions)</li></ul><p><strong>Purpose Of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If there is a Leash Knot above them, it means they have not moved from their &quot;point&quot; from the previous game-tick. Marking them as <em>not</em> moving (0) <ul><li>Leash Knot is a Vanilla entity with anti-gravity behaviour which serves as a static entity for this system.</li></ul></li><li><strong>Command 2:</strong> If there <em>isn&#39;t</em> a Leash Knot above them, it means they have displaced from their &quot;point&quot; from the previous game-tick. Marking them as <em>moving</em> (1) by adding a score. <ul><li>The score will keep incrementing if they keep moving without pause. Allowing us to use single-execution commands each time they start moving.</li></ul></li><li><strong>Command 3:</strong> We need to delete all previous &quot;points&quot; (kill old Leash Knots) to minimise entity lag. We will also avoid affecting any Leash Knots below the ~10000 height not involved in this system. <ul><li>we are using the volume filter instead of a simple name filter to do that, because Leash Knots cannot be named.</li></ul></li><li><strong>Command 4:</strong> We will summon a new Leash Knot ~10000 blocks above the player to mark the point they are currently at, which we will test-for in command 1 &amp; 2, in the next game tick. (when this command block chain loops/repeats)</li><li><strong>Command 5, 6, 7:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="is-sneaking" tabindex="-1">is_sneaking <a class="header-anchor" href="#is-sneaking" aria-hidden="true">#</a></h2><p>This technique allows you to detect when the player is/is&#39;nt sneaking.</p><p>Thanks to the introduction of Short Sneaking parity in 1.20.10 which reduces the player hitbox to 1.5 blocks when sneaking, making a proper sneak-detection using just commands is now possible which previously required add-on assistance.</p><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_sneaking</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_sneaking dummy</code></li></ul></li></ul>',12),u=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/execute as @a at @s if entity @s [y=~1.5, dy=0] run scoreboard players set @s is_sneaking 0</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a at @s unless entity @s [y=~1.5, dy=0] if entity @s [y=~0.3, dy=0] run scoreboard players add @s is_sneaking 1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_sneaking=0}] run say I&#39;m not sneaking</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_sneaking=1}] run say I started sneaking</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_sneaking=1..}] run say I&#39;m still sneaking</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+l+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_sneaking=0</code></strong> player is <em>not</em> sneaking.</li><li><strong><code>is_sneaking=1</code></strong> player started sneaking. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_sneaking=1..</code></strong> player is still sneaking. (used for repeating actions)</li></ul><p><strong>Purpose Of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 1.4 blocks, we mark them as <em>not</em> sneaking (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 1.4 blocks, we mark them as sneaking (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop sneaking. Allowing us to use single-execution commands each time they start sneaking.</li><li>To prevent false-triggers when sleeping or crawling, we will also require their hitbox to be higher than 0.2 blocks.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="is-crawling" tabindex="-1">is_crawling <a class="header-anchor" href="#is-crawling" aria-hidden="true">#</a></h2><p>This technique allows you to detect when the player is/is&#39;nt crawling.</p><blockquote><p>Note: When crawling, the player&#39;s hitbox is reduced to 0.6 blocks.</p></blockquote><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_crawling</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_crawling dummy</code></li></ul></li></ul>',12),h=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_crawling 0</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a at @s unless entity @s [y=~0.7, dy=0] unless block ~~0.5~ air unless block ~~0.1~ water run scoreboard players add @s is_crawling 1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_crawling=0}] run say I&#39;m not crawling</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_crawling=1}] run say I started crawling</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_sneaking=1..}] run say I&#39;m still crawling</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+l+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_crawling=0</code></strong> player is <em>not</em> crawling. (used for repeating actions)</li><li><strong><code>is_crawling=1</code></strong> player started crawling. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_crawling=1..</code></strong> player is still crawling. (used for repeating actions)</li></ul><p><strong>Purpose Of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.6 blocks, we mark them as <em>not</em> crawling (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, we mark them as crawling (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop crawling. Allowing us to use single-execution commands each time they start crawling.</li><li>To prevent false-triggers when swimming or gliding, we will ignore the presence of air/water above them.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="is-swimming" tabindex="-1">is_swimming <a class="header-anchor" href="#is-swimming" aria-hidden="true">#</a></h2><p>This technique allows you to detect when the player is/is&#39;nt swimming.</p><blockquote><p>Note: When swimming, the player&#39;s hitbox is reduced to 0.6 blocks.</p></blockquote><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_swimming</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_swimming dummy</code></li></ul></li></ul>',12),y=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_swimming 0</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a at @s unless entity @s [y=~0.7, dy=0] if block ~~0.1~ water run scoreboard players add @s is_swimming 1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_swimming=0}] run say I&#39;m not swimming</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_swimming=1}] run say I started swimming</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_swimming=1..}] run say I&#39;m still swimming</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+l+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_swimming=0</code></strong> player is <em>not</em> swimming.</li><li><strong><code>is_swimming=1</code></strong> player started swimming. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_swimming=1..</code></strong> player is still swimming. (used for repeating actions)</li></ul><p><strong>Purpose Of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.6 blocks, we mark them as <em>not</em> swimming (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, we mark them as swimming (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop swimming. Allowing us to use single-execution commands each time they start swimming.</li><li>To prevent false-triggers when crawling or gliding, we will require the presence of water above them.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="is-gliding" tabindex="-1">is_gliding <a class="header-anchor" href="#is-gliding" aria-hidden="true">#</a></h2><p>This technique allows you to detect when the player is/is&#39;nt gliding.</p><blockquote><p>Note: When gliding, the player&#39;s hitbox is reduced to 0.6 blocks.</p></blockquote><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_gliding</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_gliding dummy</code></li></ul></li></ul>',12),b=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_gliding 0</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [hasitem={item=elytra,location=slot.armor.chest}] at @s unless entity @s [y=~0.7, dy=0] if block ~~-0.1~ air run scoreboard players add @s is_gliding 1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_gliding=0}] run say I&#39;m not gliding</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_gliding=1}] run say I started gliding</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_gliding=1..}] run say I&#39;m still gliding</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+l+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_gliding=0</code></strong> player is <em>not</em> gliding.</li><li><strong><code>is_gliding=1</code></strong> player started gliding. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_gliding=1..</code></strong> player is still gliding. (used for repeating actions)</li></ul><p><strong>Purpose Of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.6 blocks, we mark them as <em>not</em> gliding (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.6 blocks, we mark them as gliding (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop gliding. Allowing us to use single-execution commands each time they start gliding.</li><li>To prevent false-triggers when crawling or swimming, we will require the presence of air below them.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul><h2 id="is-sleeping" tabindex="-1">is_sleeping <a class="header-anchor" href="#is-sleeping" aria-hidden="true">#</a></h2><p>This technique allows you to detect when the player is/is&#39;nt sleeping.</p><blockquote><p>Note: When sleeping, the player&#39;s hitbox is reduced to 0.2 blocks.</p></blockquote><p><strong>Commands:</strong></p><ul><li>Make sure you add the <code>is_sleeping</code> scoreboard objective: <ul><li><code>/scoreboard objectives add is_sleeping dummy</code></li></ul></li></ul>',12),_=s(`<div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#C3E88D;">/execute as @a at @s if entity @s [y=~0.3, dy=0] run scoreboard players set @s is_sleeping 0</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a at @s unless entity @s [y=~0.3, dy=0] run scoreboard players add @s is_sleeping 1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#Your Commands Here (example)</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_sleeping=0}] run say I&#39;m not sleeping</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_sleeping=1}] run say I started sleeping</span></span>
<span class="line"><span style="color:#C3E88D;">/execute as @a [scores={is_sleeping=1..}] run say I&#39;m still sleeping</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+l+'" alt="commandBlockChain5"></p><p>It is a requirement to follow this same sequence and properly apply the <code>scores</code> selector argument as shown for your desired commands.</p><p><strong>States:</strong></p><ul><li><strong><code>is_sleeping=0</code></strong> player is <em>not</em> sleeping.</li><li><strong><code>is_sleeping=1</code></strong> player started sleeping. (used for &#39;trigger&#39; actions)</li><li><strong><code>is_sleeping=1..</code></strong> player is still sleeping. (used for repeating actions)</li></ul><p><strong>Purpose Of Each Command:</strong></p><ul><li><strong>Command 1:</strong> If the player&#39;s hitbox is higher than 0.2 blocks, we mark them as <em>not</em> sleeping (0)</li><li><strong>Command 2:</strong> If the player&#39;s hitbox is <em>not</em> higher than 0.2 blocks, we mark them as sleeping (1) by adding a score. <ul><li>The score will keep incrementing if they don&#39;t stop sleeping. Allowing us to use single-execution commands each time they start sleeping.</li></ul></li><li><strong>Command 3, 4, 5:</strong> These are example commands (for each state) which can be modified / expanded.</li></ul>',7);function w(f,k,C,v,x,T){const e=c("CodeHeader");return p(),r("div",null,[d,n(e,null,{default:a(()=>[i("BP/functions/states/is_moving.mcfunction")]),_:1}),g,n(e,null,{default:a(()=>[i("BP/functions/states/is_sneaking.mcfunction")]),_:1}),u,n(e,null,{default:a(()=>[i("BP/functions/states/is_crawling.mcfunction")]),_:1}),h,n(e,null,{default:a(()=>[i("BP/functions/states/is_swimming.mcfunction")]),_:1}),y,n(e,null,{default:a(()=>[i("BP/functions/states/is_gliding.mcfunction")]),_:1}),b,n(e,null,{default:a(()=>[i("BP/functions/states/is_sleeping.mcfunction")]),_:1}),_])}const q=t(m,[["render",w]]);export{D as __pageData,q as default};
