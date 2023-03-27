import{_ as e,c as o,o as t,e as r}from"./404.md.e854e0c1.js";const f=JSON.parse('{"title":"Engine Environment","description":"","frontmatter":{"title":"Engine Environment","category":"Documentation","tags":["stable"]},"headers":[{"level":2,"title":"Common problems","slug":"common-problems","link":"#common-problems","children":[]},{"level":2,"title":"Support","slug":"support","link":"#support","children":[]}],"relativePath":"scripting/api-environment.md"}'),n={name:"scripting/api-environment.md"},a=r('<h2 id="common-problems" tabindex="-1">Common problems <a class="header-anchor" href="#common-problems" aria-hidden="true">#</a></h2><ul><li><strong>SetTimeout support</strong></li></ul><p>What people often run into when starting out with Minecraft Scripting is the problem with timing, the standards for timing code as you may have noticed are the <code>setTimeout</code> and <code>setInterval</code> functions and their cancel functions.</p><p>These standardized methods are used by the frame system where you can set the delay to millisecond precision, but minecraft uses a tick to process changes in the world, right? That&#39;s why even these methods are not and will not be available, instead we got the <a href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system#runtimeout" target="_blank" rel="noreferrer"><code>system.runTimeout</code></a> and <a href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system#runinterval" target="_blank" rel="noreferrer"><code>system.runInterval</code></a> system methods from version 1.19.70, which delay to the precision of one tick, you can read more about on <a href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/system" target="_blank" rel="noreferrer">Microsoft Docs</a> or <a href="/scripting/script-server.html#scheduling">Wiki Tutorial</a></p><ul><li><strong>Eval permission</strong></li></ul><p>Not everyone can encounter this problem because the use of eval and Function method for running code in string format is not great.</p><p>Some browsers also prohibit the use of these methods, mainly the eval method, when using eval there is a risk of malicious code that can harm the problem in your add-on, which is why it is disabled by default.</p><p>To enable these methods that evaluate code, you must mention it in the manifest. What and how you can find here. <a href="/scripting/starting-scripts.html">Start with Script API</a>.</p><ul><li><strong>Native handles</strong></li></ul><p>Some objects passed to us by the API have their own native handle, in some cases these objects are released before the javascript object is released, which then results in an error being reported when calling native methods, Native object bound to prototype doesn&#39;t exist.</p><p>That means the only function you called with a non-natively released object, the function tries to find a native handle on an object that is no longer there.</p><p>You will encounter this most often when using events, because in every data events are natively released after the event ends, therefore you cannot save the object that was given by the event; if you have a player object, after the player leaves, the native handle of the object is released and you can no longer call the methods and properties of the object that used to be the player.</p><h2 id="support" tabindex="-1">Support <a class="header-anchor" href="#support" aria-hidden="true">#</a></h2><ul><li><p><em><strong>What is supported</strong></em></p><ul><li><code>Object</code> - Standard function constructor for objects</li><li><code>Function</code> - Standard function constructor for functions</li><li><code>Error</code> - (<code>EvalError</code>, <code>RangeError</code>, <code>ReferenceError</code>, <code>SyntaxError</code>, <code>TypeError</code>, <code>URIError</code>, <code>InternalError</code>, <code>AggregateError</code>) - Classes for error construction</li><li><code>Array</code> - (<code>Int8Array</code>, <code>UInt8Array</code>, <code>Int16Array</code>, <code>UInt16Array</code>, <code>Int32Array</code>, <code>UInt32Array</code>, <code>Float32Array</code>, <code>Float64Array</code>, <code>SharedArrayBuffer</code>, <code>ArrayBuffer</code>, <code>UInt8ClampedArray</code>) Standard function constructor for Array objects</li><li><code>parseInt</code>, <code>parseFloat</code> - Standard methods for parsing string to number</li><li><code>isNaN</code>, <code>isFinite</code> - Standard Methods for checking number types</li><li><code>decodeURI</code>, <code>encodeURI</code> - Standard methods for decoding and encoding URI paths</li><li><code>decodeURIComponent</code>, <code>encodeURIComponent</code> - Standard methods for decoding and encoding URI components</li><li><code>escape</code>, <code>unescape</code> - Non-Standard methods please use decodeURI/encodeURI if its possible</li><li><code>NaN</code>, <code>Infinity</code>, <code>undefined</code> - Standard variables for incode usage,</li><li><code>__date_clock</code> - Build-in QuickJS method for getting current time</li><li><code>(Number</code>, Boolean, String, Symbol) - Standard function constructor for JS primitives</li><li><code>Math</code> - Standard Object having primary math functions</li><li><code>Reflect</code> - Standard Object having build-in methods</li><li><code>eval</code> - Standard Method for evaluating string as code</li><li><code>globalThis</code> - Standard Object with access to global scoped variables</li><li><code>Date</code> - Standard function constructor for date instance</li><li><code>RegExp</code> - Standard function constructor for regex instance</li><li><code>JSON</code> - Standard Object having stringify and parse methods for JSON interaction</li><li><code>Proxy</code> - Standard function constructor for build-in proxy handler</li><li><code>Map</code>, <code>Set</code>, <code>WeakMap</code>, <code>WeakSer</code> - Standard function constructors for data organisation objects</li><li><code>DataView</code> - Standard function constructor for binary arrays interactions</li><li><code>Promise</code> - Standard function constructor for async interaction</li><li><code>console</code> - Standard object having base output methods (<code>log</code>, <code>warn</code>, <code>error</code>, <code>info</code>)</li></ul></li><li><p><em><strong>What is not supported</strong></em></p><ul><li><code>BigInt</code> - Standard function constructor for big ints</li><li><code>setTimeout</code> - Standard function for timing code runs</li><li><code>setInterval</code> - Standard function for timing code runs in intervals</li><li><code>clearTimeout</code> - Standard function for canceling setTimeout runs</li><li><code>clearInterval</code> - Standard function for canceling setInterval runs</li></ul></li></ul>',14),c=[a];function i(d,s,l,h,u,m){return t(),o("div",null,c)}const g=e(n,[["render",i]]);export{f as __pageData,g as default};
