import{_ as i,e as o,t as a,Q as n,f as e,E as t,d as r,D as l}from"./chunks/framework.CuLWBCQE.js";const B=JSON.parse(`{"title":"Convert Points Between Any Space (World, Entity, Bones)","description":"In this page we'll discuss how to convert between different coordinate frames in Minecraft.","frontmatter":{"title":"Convert Points Between Any Space (World, Entity, Bones)","category":"Tutorials","tags":["intermediate"],"mentions":["Johnb003","SmokeyStack"],"description":"In this page we'll discuss how to convert between different coordinate frames in Minecraft."},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Background","slug":"background","link":"#background","children":[{"level":3,"title":"Matrices","slug":"matrices","link":"#matrices","children":[]}]},{"level":2,"title":"Get to know the world before we start","slug":"get-to-know-the-world-before-we-start","link":"#get-to-know-the-world-before-we-start","children":[]},{"level":2,"title":"Finally!! Let's get started with an Entity","slug":"finally-let-s-get-started-with-an-entity","link":"#finally-let-s-get-started-with-an-entity","children":[{"level":4,"title":"1: Inverse(Translation)","slug":"_1-inverse-translation","link":"#_1-inverse-translation","children":[]},{"level":4,"title":"2: Inverse(RotationZ)","slug":"_2-inverse-rotationz","link":"#_2-inverse-rotationz","children":[]},{"level":4,"title":"3: Inverse(RotationY)","slug":"_3-inverse-rotationy","link":"#_3-inverse-rotationy","children":[]},{"level":4,"title":"4: Inverse(RotationX)","slug":"_4-inverse-rotationx","link":"#_4-inverse-rotationx","children":[]},{"level":4,"title":"5: Inverse(Scale)","slug":"_5-inverse-scale","link":"#_5-inverse-scale","children":[]}]}],"relativePath":"entities/entity-transforms.md","filePath":"entities/entity-transforms.md"}`),p={name:"entities/entity-transforms.md"},h=n("",8),d=e("p",null,'But, usually the sort of matrices we deal with for 3d transforms are just simply a positional offset and a rotation represented by "Axis vectors" that describe the X, Y, and Z axis, each as a 3-component vector.',-1),c=e("p",null,"When written in a 3x3 matrix the orientation vectors are unit-length vectors (unless there's scale), where these vectors are just like any direction vectors you're used to seeing they have an x,y,z component that define the axis directions of that space.",-1),u=n("",5),m=e("p",null,[t("With "),e("strong",null,"Column-major"),t(" to do the same multiplication as the row major, you need to reverse the order:")],-1),g=n("",15),b=e("p",null,'There are several weird things to recognize at this point. Pay very close attention to the directions that Blockbench labels "North, East, South, and West".',-1),v=e("ol",null,[e("li",null,'The first thing to note is that this is rotated 180 degrees from the Minecraft world coordinate system. You should make your Entity face "North" Which is negative Z compared to the game world coordinates.'),e("li",null,"It get's way more strange. If you move boxes in the positive X direction the box coordinates show as positive x values, however if you create a bone, and go to the animation tab, and try adjusting the position of the bone, the move handles are still as expected, but now dragging the handle in the positive direction, actually gives you negative values on X. +X in Animation goes to the west, while +Y still goes up, and +Z still goes south. So in comparison to the Minecraft world, we must flip the Z, and start using a left-handed coordinate frame in the entity."),e("li",null,`There's a scale factor of 16x in entities. A "Block" or 1 unit in the world, is actually 16 units in entities.`)],-1),y=e("p",null,"Let's try to group our 3-axis thing under a bone. And then duplicate that group, so we have one we can keep at the entity, and one we can move to a world location.",-1),w=e("ol",null,[e("li",null,"Go to the Animate Tab.")],-1),k=e("ol",{start:"2"},[e("li",null,"Create a new Animation.")],-1),f=e("ol",{start:"3"},[e("li",null,"Add a position key for the mover.")],-1),_=e("ol",{start:"4"},[e("li",null,"Try moving on the X-axis and confirm things are weird.")],-1),x=e("ol",{start:"6"},[e("li",null,[t("Now let's set the position using a variable, we'll set in a "),e("code",null,"pre_animation"),t(" script.")])],-1),E=n("",40);function F(C,q,T,A,I,S){const s=l("WikiImage");return r(),o("div",null,[h,a(s,{src:"/assets/images/tutorials/entity-transforms/image-1.png"}),d,c,a(s,{src:"/assets/images/tutorials/entity-transforms/image.png"}),u,a(s,{src:"/assets/images/tutorials/entity-transforms/image-2.png"}),m,a(s,{src:"/assets/images/tutorials/entity-transforms/image-3.png"}),g,a(s,{src:"/assets/images/tutorials/entity-transforms/image-4.png"}),b,v,y,a(s,{src:"/assets/images/tutorials/entity-transforms/image-5.png"}),w,a(s,{src:"/assets/images/tutorials/entity-transforms/image-6.png"}),k,a(s,{src:"/assets/images/tutorials/entity-transforms/image-7.png"}),f,a(s,{src:"/assets/images/tutorials/entity-transforms/image-8.png"}),_,a(s,{src:"/assets/images/tutorials/entity-transforms/image-9.png"}),x,a(s,{src:"/assets/images/tutorials/entity-transforms/image-11.png"}),E])}const j=i(p,[["render",F]]);export{B as __pageData,j as default};