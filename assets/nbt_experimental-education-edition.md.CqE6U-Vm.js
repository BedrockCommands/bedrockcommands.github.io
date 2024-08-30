import{_ as e}from"./chunks/structure.CVJet9FP.js";import{_ as t}from"./chunks/compound._efFW2_8.js";import{_ as i,e as a,d as n,Q as o}from"./chunks/framework.CuLWBCQE.js";const l="/assets/images/nbt/byte.png",r="/assets/images/nbt/experiments-education-edition/byte-add.png",s="/assets/images/nbt/experiments-education-edition/experiments-file.png",y=JSON.parse('{"title":"Experiments in Education Edition","description":"Enable experimental features in Education Edition.","frontmatter":{"title":"Experiments in Education Edition","category":"Tutorials","mentions":["Fabrimat","TheItsNameless"],"tags":["easy"],"description":"Enable experimental features in Education Edition."},"headers":[{"level":2,"title":"Editing NBT","slug":"editing-nbt","link":"#editing-nbt","children":[]},{"level":2,"title":"Tips","slug":"tips","link":"#tips","children":[]}],"relativePath":"nbt/experimental-education-edition.md","filePath":"nbt/experimental-education-edition.md"}'),d={name:"nbt/experimental-education-edition.md"},c=o('<p>Education Edition is a variant of Bedrock Edition with some different features and limitations. For security reasons it doesn&#39;t allow you to enable Experimental Features from the game.</p><h2 id="editing-nbt" tabindex="-1">Editing NBT <a class="header-anchor" href="#editing-nbt" aria-label="Permalink to &quot;Editing NBT&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Always make a backup of your data before editing NBT files!</p><p>Experimental features may not be compatible with every device and can cause your world to behave in unexpected way.</p></div><ol><li>Extract the level.dat from your .mcworld, .mctemplate or com.mojang world folder.</li><li>Open the file with NBT editor (NBT Studio for example).</li><li>Select on the first node which is <img src="'+e+'" alt=""> level.dat</li><li>Create a new compound tag called <img src="'+t+'" alt=""> experiments</li><li>Select the new node and create a new <img src="'+l+'" alt=""> byte with the name of the feature you need with a value of 1, which on 1.18.32 are: <ul><li>data_driven_biomes</li><li>data_driven_items</li><li>experimental_molang_features</li><li>gametest</li><li>spectator_mode</li><li>upcoming_creator_features</li><li>vanilla_experiments</li><li>wild_update</li></ul></li></ol><p><img src="'+r+'" alt=""></p><p><img src="'+s+'" alt=""></p><p>Finally, save the file and put it back in the world package or directory.</p><h2 id="tips" tabindex="-1">Tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;Tips&quot;">​</a></h2><p>Education Edition is usually one or two versions behind the classic Bedrock Edition, so you&#39;ll always know in advance which experimental features will be added to the stable gameplay and which will be modified or removed. Try to add only features that will persist over time if you want to use that world in your classroom.</p>',9),m=[c];function p(u,_,h,f,b,g){return n(),a("div",null,m)}const v=i(d,[["render",p]]);export{y as __pageData,v as default};