import{_ as s,e as i,t as o,C as r,Q as l,f as t,E as e,D as a,d}from"./chunks/framework.CuLWBCQE.js";const S=JSON.parse('{"title":"Custom Crafter","description":"How to make a mock custom crafting systom with commands","frontmatter":{"title":"Custom Crafter","description":"How to make a mock custom crafting systom with commands","category":"Useful Creations","tags":["easy"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]}],"relativePath":"commands/custom-crafting.md","filePath":"commands/custom-crafting.md"}'),m={name:"commands/custom-crafting.md"},h=l('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>This is a guide on how to make a custom crafting systom with jest two command blocks. Some use cases could be a way to &quot;craft&quot; tools or weapons with a custom name and enchantments for a server or for a adventure map.</p><p><em><strong>This systom was originally created by CrunchyCookie. All credit for this systom goes to him. You can find his video <a href="https://www.youtube.com/watch?v=pzQzldaSORs" target="_blank" rel="noreferrer">here</a>.</strong></em></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is not an actual way to make custom crafting recipes. This is a creative and roundabout way to make custom crafting using the clone command and droppers. For custom crafting recipes that use the crafting table, <a href="./../loot/recipes.html">see this wiki page</a>.</p></div><h2 id="system" tabindex="-1">System <a class="header-anchor" href="#system" aria-label="Permalink to &quot;System&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">Note</p><p>Every time we use the word <code>&lt;crafter&gt;</code>, we imply the coordinates of the dropper that is uesd as a crafter. If you see the word <code>&lt;crafterX&gt;</code>, <code>&lt;crafterY&gt;</code>, or <code>&lt;crafterZ&gt;</code> we imply the X.Y.Z coordinates of your dropper.</p></div><ol><li>Place a dropper facing down. This will be used to impersonate the vanilla crafter and will be refer to in the rest of this page as &quot;crafter&quot;.</li><li>Place a repeating command block sideways and paste this command in: <code>execute if blocks ~ ~1 ~ ~ ~1 ~ &lt;crafter&gt; masked run playsound random.orb @a[x=&lt;crafterX&gt;, y=&lt;crafterY&gt;, z=&lt;crafterZ&gt;, r=6]</code></li><li>Place a chain command block in front of the repeating command block and set it to conditional. Then paste this command in: <code>clone ~ ~1 ~ ~ ~1 ~ &lt;crafter&gt;</code></li><li>Place 2 droppers above the command blocks facing down. Fill the dropper above the repeating command block with the custom recipe you&#39;ve made. Then fill the second dropper with the crafted item. (Tip: place the crafted item in the middle slot in the second dropper. Makes it look nice.)</li></ol><p>At the end of this you should have some thing like this:</p>',8),p=t("h2",{id:"explanation",tabindex:"-1"},[e("Explanation "),t("a",{class:"header-anchor",href:"#explanation","aria-label":'Permalink to "Explanation"'},"​")],-1),u=t("p",null,[e("Command 1: "),t("code",null,"execute if blocks ~ ~1 ~ ~ ~1 ~ <crafter> masked run playsound random.orb @a[x=<crafterX>, y=<crafterY>, z=<crafterZ>, r=6]")],-1),f=t("p",null,"Every single in game tick the repeating command block is checking if the dropper one block above it has the same state and content as the dropper the player interacts with. If the 2 blocks are the same, the playsound command is run and we move on to the next commmand block.",-1),k=t("p",null,[e("Command 2: "),t("code",null,"clone ~ ~1 ~ ~ ~1 ~ <crafter>")],-1),g=t("p",null,"Because this command block is conditional, it won't activate until the command block behind it succeeds. When this command block activate it runs a clone command that clones the block that is one block above it to the position of the other dropper.",-1),b=t("p",null,"Here is an example structure:",-1),_=t("div",{class:"info custom-block"},[t("p",{class:"custom-block-title"},"Note"),t("p",null,[e("You still have to replace the "),t("code",null,"<crafter>"),e(" in the commands with the coordinates of the input dropper that the player will be interacting with.")])],-1);function w(y,v,x,C,T,E){const n=a("WikiImage"),c=a("Button");return d(),i("div",null,[h,o(n,{src:"/assets/images/commands/customCrafterEnd.png",alt:"alternative text",width:"800"}),p,u,f,k,g,b,o(c,{link:"/assets/packs/structures/customCrafter/customCrafterExample.mcstructure",download:""},{default:r(()=>[e(" Download MCSTRUCTURE ")]),_:1}),_])}const I=s(m,[["render",w]]);export{S as __pageData,I as default};
