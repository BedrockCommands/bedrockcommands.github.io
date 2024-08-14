import{_ as c}from"./chunks/7.caf9e800.js";import{_ as p,c as d,a as n,w as a,e as i,r,o as m,d as e,b as s}from"./404.md.eebc8d69.js";const g="/assets/images/commands/states/moving.gif",u="/assets/images/commands/states/sneaking.png",t="/assets/images/commands/commandBlockChain/5.png",h="/assets/images/commands/states/crawling.png",y="/assets/images/commands/commandBlockChain/9.png",b="/assets/images/commands/states/sleeping.png",L=JSON.parse('{"title":"Movement Detections","description":"","frontmatter":{"title":"Movement Detections","category":"Techniques","mention":["BedrockCommands","zheaEvyline"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"is_moving","slug":"is-moving","link":"#is-moving","children":[]},{"level":2,"title":"is_sneaking","slug":"is-sneaking","link":"#is-sneaking","children":[]},{"level":2,"title":"is_crawling","slug":"is-crawling","link":"#is-crawling","children":[{"level":3,"title":"Differentiating Crawling, Gliding And Swimming","slug":"differentiating-crawling-gliding-and-swimming","link":"#differentiating-crawling-gliding-and-swimming","children":[]}]},{"level":2,"title":"is_sleeping","slug":"is-sleeping","link":"#is-sleeping","children":[]}],"relativePath":"commands/states.md"}'),_={name:"commands/states.md"},w=i("",11),f=i("",13),k=i("",14),C=i("",9),v=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"Known Issues:"),s("ol",null,[s("li",null,"Gliding while touching the ground/ceiling or crashing straight into a wall will be detected as crawling."),s("li",null,"Crawling from absolute corner of a block with no adjacent blocks above and below will be detected as Gliding."),s("li",null,"Swimming under a waterlogged block while inside a waterlogged block will be detected as crawling.")])],-1),x=s("div",{class:"language-yaml line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_gliding 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_crawling 0")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a at @s if entity @s [y=~0.7, dy=0] run scoreboard players set @s is_swimming 0")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a [hasitem={item=elytra,location=slot.armor.chest}] at @s unless entity @s [y=~0.7, dy=0] if entity @s [y=~0.3, dy=0] if block ~~1.01~ air if block ~~-0.01~ air rotated ~ 0 if block ^^1.01^-1 air if block ^^-0.01^-1 air if block ^^1.01^1 air if block ^^-0.01^1 air run scoreboard players add @s is_gliding 1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a [scores={is_gliding=0}] at @s unless entity @s [y=~0.7, dy=0] if entity @s [y=~0.3, dy=0] unless block ~~~ water unless block ~~1.01~ water run scoreboard players add @s is_crawling 1")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a [scores={is_gliding=0,is_crawling=0}] at @s unless entity @s [y=~0.7, dy=0] if entity @s [y=~0.3, dy=0] run scoreboard players add @s is_swimming 1")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95"}},"#Your Commands Here (example)")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a [scores={is_swimming=0}] run say I'm not swimming")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a [scores={is_crawling=1}] run say I started crawling")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C3E88D"}},"/execute as @a [scores={is_gliding=1..}] run say I'm still gliding")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br")])],-1),T=s("p",null,[s("img",{src:y,alt:"commandBlockChain9"})],-1),I=s("p",null,[s("strong",null,"Purpose Of Each Command:")],-1),E=s("ul",null,[s("li",null,[s("strong",null,"Command 1, 2, 3:"),e(" If the player's hitbox is higher than 0.6 blocks, we mark them as "),s("em",null,"not"),e(" gliding/crawling/swimming (0)")]),s("li",null,[s("strong",null,"Command 4:"),e(" If the player's hitbox is "),s("em",null,"not"),e(" higher than 0.6 blocks, has equiped an elytra, and has no blocks above/below their head/chest/feet, we mark them as gliding (1) by adding a score. "),s("ul",null,[s("li",null,"The score will keep incrementing if they don't stop gliding. Allowing us to use single-execution commands each time they start gliding. We will employ the same for crawling/gliding."),s("li",null,"To prevent false-triggers when sleeping, we will also require their hitbox to be higher than 0.2 blocks. We will employ the same for crawling/gliding.")])]),s("li",null,[s("strong",null,"Command 5:"),e(" If the player's hitbox is "),s("em",null,"not"),e(" higher than 0.6 blocks, is not gliding, and has no water above/below them, we mark them as crawling (1) by adding a score.")]),s("li",null,[s("strong",null,"Command 6:"),e(" If the player's hitbox is "),s("em",null,"not"),e(" higher than 0.6 blocks, is not gliding or crawling, we mark them as swimming (1) by adding a score.")]),s("li",null,[s("strong",null,"Command 7, 8, 9:"),e(" These are example commands (for each state) which can be modified / expanded.")])],-1),D=i("",6),S=i("",7);function q(A,P,B,V,N,j){const l=r("CodeHeader"),o=r("Spoiler");return m(),d("div",null,[w,n(l,null,{default:a(()=>[e("BP/functions/states/is_moving.mcfunction")]),_:1}),f,n(l,null,{default:a(()=>[e("BP/functions/states/is_sneaking.mcfunction")]),_:1}),k,n(l,null,{default:a(()=>[e("BP/functions/states/is_crawling.mcfunction")]),_:1}),C,n(o,{title:"View Issues"},{default:a(()=>[v]),_:1}),n(o,{title:"View Code"},{default:a(()=>[n(l,null,{default:a(()=>[e("BP/functions/states/is_crawling.mcfunction")]),_:1}),x,T,I,E]),_:1}),D,n(l,null,{default:a(()=>[e("BP/functions/states/is_sleeping.mcfunction")]),_:1}),S])}const W=p(_,[["render",q]]);export{L as __pageData,W as default};
