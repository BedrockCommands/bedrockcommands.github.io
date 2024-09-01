import{_ as r,e as o,t as a,C as n,f as s,E as i,Q as t,D as l,d}from"./chunks/framework.CuLWBCQE.js";const A=JSON.parse('{"title":"Remove Entity Shadows","description":"Get rid of that annoying shadow.","frontmatter":{"title":"Remove Entity Shadows","tags":["intermediate"],"category":"Tutorials","mentions":["SirLich","solvedDev","Joelant05","MedicalJewel105","SmokeyStack","ThomasOrs"],"description":"Get rid of that annoying shadow."},"headers":[{"level":2,"title":"Small Collision Box","slug":"small-collision-box","link":"#small-collision-box","children":[]},{"level":2,"title":"Teleport underground","slug":"teleport-underground","link":"#teleport-underground","children":[]},{"level":2,"title":"Using runtime identifier","slug":"using-runtime-identifier","link":"#using-runtime-identifier","children":[]},{"level":2,"title":"Using Materials","slug":"using-materials","link":"#using-materials","children":[{"level":4,"title":"Working shadow code: Shadows for ALL entities:","slug":"working-shadow-code-shadows-for-all-entities","link":"#working-shadow-code-shadows-for-all-entities","children":[]},{"level":4,"title":"Disabled shadow code: No Shadows for ALL entities:","slug":"disabled-shadow-code-no-shadows-for-all-entities","link":"#disabled-shadow-code-no-shadows-for-all-entities","children":[]},{"level":4,"title":"Geometry + Materials Workaround","slug":"geometry-materials-workaround","link":"#geometry-materials-workaround","children":[]}]}],"relativePath":"visuals/remove-shadows.md","filePath":"visuals/remove-shadows.md"}'),k={name:"visuals/remove-shadows.md"},p=s("p",null,"There are quite a few ways to remove shadows from entities, and nearly all of them have undesirable effects. There is no foolproof way to perfectly remove shadows from specific entities, without causing side effects.",-1),c=s("p",null,"This document will showcase some of the various ways to remove shadows, and any possible effects from doing this.",-1),E=s("h2",{id:"small-collision-box",tabindex:"-1"},[i("Small Collision Box "),s("a",{class:"header-anchor",href:"#small-collision-box","aria-label":'Permalink to "Small Collision Box"'},"​")],-1),u=s("p",null,"One possibility is to make the size of the collision component very small. This will make it hard to interact/hit the entity, but it will make the shadow disappear!",-1),g=t("",2),m=t("",8),y=s("h4",{id:"working-shadow-code-shadows-for-all-entities",tabindex:"-1"},[i("Working shadow code: Shadows for ALL entities: "),s("a",{class:"header-anchor",href:"#working-shadow-code-shadows-for-all-entities","aria-label":'Permalink to "Working shadow code: Shadows for ALL entities:"'},"​")],-1),b=s("div",{class:"language-json vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"shadow_overlay"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "+states"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":[")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "DisableDepthTest"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "DisableCulling"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "Blending"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "EnableStencilTest"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "vertexShader"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"shaders/color.vertex"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "vrGeometryShader"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"shaders/color.geometry"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "fragmentShader"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"shaders/shadow_stencil_overlay.fragment"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "blendSrc"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"DestColor"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "blendDst"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Zero"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "frontFace"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'        "stencilFunc"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Equal"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'        "stencilPass"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Replace"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br")])],-1),F=s("h4",{id:"disabled-shadow-code-no-shadows-for-all-entities",tabindex:"-1"},[i("Disabled shadow code: No Shadows for ALL entities: "),s("a",{class:"header-anchor",href:"#disabled-shadow-code-no-shadows-for-all-entities","aria-label":'Permalink to "Disabled shadow code: No Shadows for ALL entities:"'},"​")],-1),C=s("div",{class:"language-json vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"shadow_overlay"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "+states"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":[")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "DisableDepthTest"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "DisableCulling"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "Blending"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'        "EnableStencilTest"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "vertexShader"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "vrGeometryShader"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "fragmentShader"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "blendSrc"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"DestColor"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "blendDst"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Zero"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'    "frontFace"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'        "stencilFunc"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Equal"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'        "stencilPass"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Replace"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br")])],-1),w=s("h4",{id:"geometry-materials-workaround",tabindex:"-1"},[i("Geometry + Materials Workaround "),s("a",{class:"header-anchor",href:"#geometry-materials-workaround","aria-label":'Permalink to "Geometry + Materials Workaround"'},"​")],-1),f=s("p",null,[i("You can hide entity shadows if you apply a model on your entity to cover the shadow and use "),s("code",null,'"banner_pole"'),i(" material.")],-1);function _(v,B,S,x,T,q){const e=l("CodeHeader"),h=l("Spoiler");return d(),o("div",null,[p,c,E,u,a(e),g,a(e),m,a(h,{title:"Removing shadows via Materials."},{default:n(()=>[y,a(e,null,{default:n(()=>[i("RP/materials/shadows.material")]),_:1}),b,F,a(e),C]),_:1}),w,f])}const P=r(k,[["render",_]]);export{A as __pageData,P as default};