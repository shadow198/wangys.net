import{o as e,c as n,a}from"./app.45dfcc25.js";const t='{"title":"Electron","description":"","frontmatter":{},"headers":[{"level":2,"title":"官网","slug":"官网"},{"level":2,"title":"基于vue2项目改造","slug":"基于vue2项目改造"},{"level":2,"title":"设置全屏","slug":"设置全屏"},{"level":2,"title":"隐藏菜单栏","slug":"隐藏菜单栏"}],"relativePath":"electron/index.md","lastUpdated":1675738855419}',s={},r=a('<h1 id="electron"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> Electron</h1><h2 id="官网"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2><p><a href="https://www.electronjs.org/zh/" target="_blank" rel="noopener noreferrer">https://www.electronjs.org/zh/</a></p><h2 id="基于vue2项目改造"><a class="header-anchor" href="#基于vue2项目改造" aria-hidden="true">#</a> 基于vue2项目改造</h2><p><a href="https://wangdaodao.com/20200707/vue-cli3-electron.html" target="_blank" rel="noopener noreferrer">https://wangdaodao.com/20200707/vue-cli3-electron.html</a></p><h1 id="打包依赖下载报错解决"><a class="header-anchor" href="#打包依赖下载报错解决" aria-hidden="true">#</a> 打包依赖下载报错解决</h1><p><a href="https://blog.csdn.net/cctvcqupt/article/details/87904368" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/cctvcqupt/article/details/87904368</a></p><h2 id="设置全屏"><a class="header-anchor" href="#设置全屏" aria-hidden="true">#</a> 设置全屏</h2><div class="language-"><pre><code>function createWindow(){\n    win = new BrowserWindow({\n    fullscreen:true,\n    webPreferences: {\n    nodeIntegration: true\n    }});\n    win.loadFile(&#39;index.html&#39;);\n    win.on(&#39;closed&#39;,()=&gt;{\n        console.log(&#39;closed&#39;);\n    win = null;\n    });\n}\n</code></pre></div><h2 id="隐藏菜单栏"><a class="header-anchor" href="#隐藏菜单栏" aria-hidden="true">#</a> 隐藏菜单栏</h2><div class="language-js"><pre><code><span class="token keyword">const</span> electron <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span> <span class="token comment">/*获取electron窗体的菜单栏*/</span> \n<span class="token keyword">const</span> Menu <span class="token operator">=</span> electron<span class="token punctuation">.</span>Menu <span class="token comment">/*隐藏electron创听的菜单栏*/</span> \nMenu<span class="token punctuation">.</span><span class="token function">setApplicationMenu</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n</code></pre></div>',11);s.render=function(a,t,s,o,l,c){return e(),n("div",null,[r])};export{t as __pageData,s as default};