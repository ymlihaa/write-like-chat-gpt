<img width="606" height="138" alt="Ekran Resmi 2025-09-13 15 44 27" src="https://github.com/user-attachments/assets/4c266baf-899a-4945-9925-8b9a499d47e0" />


<div class="markdown prose w-full break-words dark:prose-invert dark"><h1>WriteLikeChatGPT</h1><p>A React component that animates text to make it appear as if it's being written by ChatGPT.</p>
<p align="center"> 

![write-like-chat-gpt](https://user-images.githubusercontent.com/33762342/223132543-cbc03c74-c4d5-4e26-a51b-24e00e3741cc.gif)

</p>
<h2>🚀 Quick start</h2><ol><li>Install the package: <code>npm install write-like-chat-gpt</code>.</li><li>Import the component: <code>import WriteLikeChatGPT from 'write-like-chat-gpt'</code>.</li><li>Use the component in your code:</li></ol><pre><div class="bg-black mb-4 rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-jsx">&lt;<span class="hljs-title class_">WriteLikeChatGPT</span> text=<span class="hljs-string">"Hello, world!"</span> /&gt;
</code></div></div></pre><h2>📝 Usage</h2><h3>Props</h3><ul><li><code>text</code>: the text to animate (required)</li></ul><h3>Example</h3><pre><div class="bg-black mb-4 rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">WriteLikeChatGPT</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'write-like-chat-gpt'</span>;

<span class="hljs-keyword">const</span> <span class="hljs-title function_">MyComponent</span> = (<span class="hljs-params"></span>) =&gt; {
<span class="hljs-keyword">return</span> (
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">WriteLikeChatGPT</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"Hello, world!"</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
);
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">MyComponent</span>;
</code></div></div></pre><h2>🤖 Technical details</h2><p>This component uses the following React hooks:</p><ul><li><code>useState</code></li><li><code>useEffect</code></li><li><code>useMemo</code></li><li><code>useLayoutEffect</code></li><li><code>useRef</code></li></ul><p>It also uses the <code>requestAnimationFrame</code> function to animate the text.</p></div>
