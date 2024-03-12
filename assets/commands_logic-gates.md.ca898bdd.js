import{_ as e,c as t,o as a,e as o}from"./404.md.4518ca80.js";const n="/assets/images/commands/logicGatesTable.jpg",y=JSON.parse('{"title":"Execute Logic Gates","description":"","frontmatter":{"title":"Execute Logic Gates","category":"Techniques","mentions":["BedrockCommands","zheaEvyline"],"nav_order":1},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Logic Gates","slug":"logic-gates","link":"#logic-gates","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":2,"title":"Example Commands","slug":"example-commands","link":"#example-commands","children":[]}],"relativePath":"commands/logic-gates.md"}'),i={name:"commands/logic-gates.md"},s=o('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><a href="https://discord.gg/SYstTYx5G5" target="_blank" rel="noreferrer">Sourced By Bedrock Commands Community Discord</a></p><p>Logic gates are devices that take one or more binary inputs and, as the name suggests, perform logical boolean operations to give a single binary output (either <code>true</code> or <code>false</code>).</p><p>They are what a computer uses to perform any function. These devices are very helpful for programming, and using them is a crucial step in creating optimized command systems. So, let&#39;s learn how you can use any of the logic gates in your systems using the <code>/execute</code> command.</p><h2 id="logic-gates" tabindex="-1">Logic Gates <a class="header-anchor" href="#logic-gates" aria-hidden="true">#</a></h2><p><strong>Chart:</strong></p><p><img src="'+n+'" alt="logicGatesTable"></p><p><strong>Converted To Commands:</strong></p><ul><li>Buffer: <ul><li><code>/execute if entity @s [tag=red] run &lt;command&gt;</code></li></ul></li><li>(Inverter) NOT: <ul><li><code>/execute if entity @s [tag=!red] run &lt;command&gt;</code></li></ul></li><li>AND Gate: <ul><li><code>/execute if entity @s [tag=red, tag=green] run &lt;command&gt;</code></li></ul></li><li>(NOT AND) NAND Gate: <ul><li><code>/execute unless entity @s [tag=red, tag=green] run &lt;command&gt;</code></li></ul></li><li>OR Gate: <ul><li><code>/execute unless entity @s [tag=!red, tag=!green] run &lt;command&gt;</code></li></ul></li><li>NOR Gate: <ul><li><code>/execute if entity @s [tag=!red, tag=!green] run &lt;command&gt;</code></li></ul></li><li>XOR Gate: <ul><li><code>/execute unless entity @s [tag=!red, tag=!green] unless entity @s [tag=red, tag=green] run &lt;command&gt;</code></li></ul></li><li>XNOR Gate: <ul><li><code>/execute unless entity @s [tag=red, tag=!green] unless entity @s [tag=!red, tag=green] run &lt;command&gt;</code></li></ul></li></ul><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h2><p><em>Explanation provided by @Champ0401:</em></p><p><strong>AND Gate:</strong></p><ul><li><code>/execute as @p [tag=red, tag=green] run say success</code></li><li>The AND gate takes at least two inputs. In this case, if the player meets both requirements (meaning they have both the tag red and the tag green), the command will run. The AND gate is the most commonly used gate in Minecraft commands.</li></ul><p><strong>NOT Gate:</strong></p><ul><li><code>/execute as @p [tag=!red] run say success</code> or:</li><li><code>/execute as @p unless entity @s [tag=red] run say success</code></li><li>The NOT gate inverses the input. In this case, the command will only run if the player does NOT have the tag red. The NOT gate is also very commonly used in Minecraft commands.</li></ul><p><strong>OR Gate:</strong></p><ul><li><code>/execute as @p unless entity @s[tag=!red, tag=!green] run say success</code></li><li>The OR gate takes two or more inputs. If the player has at least one of the requirements, the command will run. In this case, the player can either have the tag red, or the tag green, or both. The OR gate is not natural to Minecraft commands, but with the addition of the <code>/execute unless</code>, you can perform it yourself. It may seem a little confusing as to how the OR gate works. You can think about it like this: the command runs UNLESS you have neither tag. This produces the same output table as the OR gate. Try it out in the game yourself!</li></ul><p><strong>XOR Gate:</strong></p><ul><li><code>/execute as @p unless entity @s [tag=!red, tag=!green] unless entity @s [tag=red, tag=green] run say success</code></li><li>The XOR gate takes two inputs. If the player has at least one of the requirements, but not both, the command will run. In this case, the player can have either the tag red or the tag green, but if they have both tags the command will not run. The XOR gate is also not natural to Minecraft Commands, but this workaround will allow you to perform the function.</li></ul><p>The remaining gates are simply the inverse of the others, which you can change by flipping the <code>if</code> / <code>unless</code> in the command, or refer the above logic gates for examples.</p><h2 id="example-commands" tabindex="-1">Example Commands <a class="header-anchor" href="#example-commands" aria-hidden="true">#</a></h2><p>Here is a list of argument selectors that can be used in the logic gates:</p><ul><li><code>type</code></li><li><code>scores</code></li><li><code>name</code></li><li><code>tag</code></li><li><code>family</code></li><li><code>hasitem</code></li></ul><blockquote><p>Note, all of these use the OR gate as example, but any of the logic gates will work, as long as the syntax/order given above are followed in a similar fashion.</p></blockquote><p><strong>Examples:</strong></p><ul><li><code>/execute unless entity @e [type=!chicken, type=!cow] run &lt;command&gt;</code><ul><li>Run the command if the entity is either a chicken or a cow.</li></ul></li><li><code>/execute unless entity @p [scores={scoreA=!5, scoreB=!5}] run &lt;command&gt;</code><ul><li>Run the command if the player has either a score of 5 in objective scoreA or scoreB.</li></ul></li><li><code>/execute unless entity @p [hasitem={item=diamond_sword,quantity=0},{item=iron_sword,quantity=0}] run &lt;command&gt;</code><ul><li>Run the command if the player has either a diamond sword or an iron sword.</li></ul></li></ul><blockquote><p>Note, you amy use more than two filters for the OR gate, and the command will execute if it meets any one or more of the selector arguments.</p></blockquote><p>Mixing any of the different argument selectors will also work:</p><ul><li><code>/execute unless entity @p[tag=!red, scores={score1=!1..5}] run &lt;command&gt;</code></li><li><code>/execute unless entity @p[name=!player, hasitem={item=iron_sword, quantity=0}] run &lt;command&gt;</code></li><li><code>/execute unless entity @e[type=!chicken, tag=!green, scores={score1=!5}, family=!mob}] run &lt;command&gt;</code></li></ul><p>For any doubts or queries, you may join our Discord linked above and any of our community experts will be happy to assist you.</p>',30),l=[s];function r(c,d,u,m,g,h){return a(),t("div",null,l)}const f=e(i,[["render",r]]);export{y as __pageData,f as default};