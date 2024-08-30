import{_ as c,e as d,t as i,C as a,f as e,Q as t,E as s,D as l,d as k}from"./chunks/framework.CuLWBCQE.js";const O=JSON.parse('{"title":"Create a Custom Item","description":"How to create your first custom item.","frontmatter":{"title":"Create a Custom Item","category":"Guide","description":"How to create your first custom item.","nav_order":5,"prefix":"5. ","mentions":["KaiFireborn","SirLich","cda94581","TheItsNameless","MedicalJewel105","ChibiMango","TheDoctor15","SmokeyStack","unickorn","Sprunkles317","ThomasOrs","davedavis","QuazChick"]},"headers":[{"level":2,"title":"Item Behavior","slug":"item-behavior","link":"#item-behavior","children":[{"level":3,"title":"Components","slug":"components","link":"#components","children":[]},{"level":3,"title":"Identifier","slug":"identifier","link":"#identifier","children":[]},{"level":3,"title":"Item File","slug":"item-file","link":"#item-file","children":[]}]},{"level":2,"title":"Item Visuals","slug":"item-visuals","link":"#item-visuals","children":[{"level":3,"title":"Texture","slug":"texture","link":"#texture","children":[]},{"level":3,"title":"Shortname","slug":"shortname","link":"#shortname","children":[]},{"level":3,"title":"Icon","slug":"icon","link":"#icon","children":[]},{"level":3,"title":"Item Name","slug":"item-name","link":"#item-name","children":[]}]},{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far","link":"#your-progress-so-far","children":[]}],"relativePath":"guide/custom-item.md","filePath":"guide/custom-item.md"}'),u={name:"guide/custom-item.md"},m=e("p",null,"In Minecraft, we can create custom items, which can be dropped, traded, crafted, and otherwise used like a normal item. There is a lot of power in the system, including the ability to make food, fuel, and tools.",-1),E=e("p",null,'In this tutorial we are going to learn how to create a simple "ectoplasm" item, which we will later use as a loot-table drop for our ghost entity.',-1),g=t("",8),b=e("div",{class:"language-json vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"minecraft:food"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"minecraft:glint"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"minecraft:max_stack_size"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"16")])])]),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),y=t("",12),_=t("",4),f=t("",3),w=t("",2),v=t("",9),F=t("",2),C=e("h3",{id:"shortname",tabindex:"-1"},[s("Shortname "),e("a",{class:"header-anchor",href:"#shortname","aria-label":'Permalink to "Shortname"'},"​")],-1),x=e("p",null,"A shortname is essentially a name that is assigned to the folder path of the texture, so whenever we want to use a texture somewhere, we will use its shortname instead of its folder path.",-1),q=e("p",null,[s("All item shortnames are stored in one file called "),e("code",null,"item_texture.json"),s(" which is in "),e("code",null,"RP/textures"),s(". This contains a list of shortnames and its assigned textures.")],-1),T=t("",3),B=t("",5),P=t("",5),I=t("",5),S=e("div",{class:"language-json vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "format_version"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"1.21.10"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "minecraft:item"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'        "description"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "identifier"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki:ectoplasm"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "menu_category"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'                "category"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"items"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'        "components"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "minecraft:max_stack_size"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"16"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "minecraft:icon"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"wiki.ectoplasm"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br")])],-1),A=e("div",{class:"language-json vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "resource_pack_name"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Ghostly Guide"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "texture_name"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"atlas.items"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "texture_data"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'        "wiki.ectoplasm"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'            "textures"'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"textures/items/ectoplasm"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br")])],-1),j=t("",3);function V(N,R,D,z,H,W){const h=l("WikiImage"),n=l("CodeHeader"),o=l("Spoiler"),p=l("Button"),r=l("FolderView");return k(),d("div",null,[m,E,i(h,{src:"/assets/images/guide/custom_item/ectoplasm_view.png",width:"150"}),g,i(o,{title:"Example Components"},{default:a(()=>[i(n,null,{default:a(()=>[s("BP/items/example.json/components/")]),_:1}),b]),_:1}),y,i(n,null,{default:a(()=>[s("BP/items/ectoplasm.json")]),_:1}),_,i(n,null,{default:a(()=>[s("ectoplasm.json/minecraft:item/")]),_:1}),f,i(n,null,{default:a(()=>[s("ectoplasm.json/minecraft:item/")]),_:1}),w,i(n,null,{default:a(()=>[s("BP/items/ectoplasm.json")]),_:1}),v,i(p,{link:"https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png"},{default:a(()=>[s(" Download texture here ")]),_:1}),F,i(r,{paths:["RP/textures/items/ectoplasm.png"]}),C,x,q,i(n,null,{default:a(()=>[s("RP/textures/item_texture.json")]),_:1}),T,i(n,null,{default:a(()=>[s("RP/textures/item_texture.json/texture_data")]),_:1}),B,i(n,null,{default:a(()=>[s("ectoplasm.json/minecraft:item/")]),_:1}),P,i(n,null,{default:a(()=>[s("RP/texts/en_US.lang")]),_:1}),I,i(r,{paths:["RP/textures/item_texture.json","RP/textures/items/ectoplasm.png","RP/texts/en_US.lang","RP/texts/languages.json","RP/manifest.json","RP/pack_icon.png","BP/items/ectoplasm.json","BP/texts/en_US.lang","BP/texts/languages.json","BP/manifest.json","BP/pack_icon.png"]}),i(o,{title:"Full ectoplasm.json"},{default:a(()=>[i(n,null,{default:a(()=>[s("BP/items/ectoplasm.json")]),_:1}),S]),_:1}),i(o,{title:"Full item_texture.json"},{default:a(()=>[i(n,null,{default:a(()=>[s("RP/textures/item_texture.json")]),_:1}),A]),_:1}),j])}const Y=c(u,[["render",V]]);export{O as __pageData,Y as default};