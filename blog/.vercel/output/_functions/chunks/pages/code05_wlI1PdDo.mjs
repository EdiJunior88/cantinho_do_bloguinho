/* empty css                           */
import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from "../astro_yvkYO_vT.mjs";

const html =
  '<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1ojaj.css"><script type="module" src="/_astro/ec.sgewm.js"></script><figure class="frame has-title"><figcaption class="header"><span class="title">vite.config.ts</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="gutter"><div class="ln">1</div></div><div class="code"><span style="--0:#F286C4">import</span><span style="--0:#F6F6F4"> { fileURLToPath, URL } </span><span style="--0:#F286C4">from</span><span style="--0:#F6F6F4"> </span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">node:url</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">2</div></div><div class="code">\n</div></div><div class="ec-line"><div class="gutter"><div class="ln">3</div></div><div class="code"><span style="--0:#F286C4">import</span><span style="--0:#F6F6F4"> { defineConfig } </span><span style="--0:#F286C4">from</span><span style="--0:#F6F6F4"> </span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">vite</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">4</div></div><div class="code"><span style="--0:#F286C4">import</span><span style="--0:#F6F6F4"> vue </span><span style="--0:#F286C4">from</span><span style="--0:#F6F6F4"> </span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">@vitejs/plugin-vue</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">5</div></div><div class="code">\n</div></div><div class="ec-line"><div class="gutter"><div class="ln">6</div></div><div class="code"><span style="--0:#9EA1AA">// https://vitejs.dev/config/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">7</div></div><div class="code"><span style="--0:#F286C4">export</span><span style="--0:#F6F6F4"> </span><span style="--0:#F286C4">default</span><span style="--0:#F6F6F4"> </span><span style="--0:#62E884">defineConfig</span><span style="--0:#F6F6F4">({</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">8</div></div><div class="code"><span class="indent"><span style="--0:#F6F6F4">  </span></span><span style="--0:#F6F6F4">plugins</span><span style="--0:#F286C4">:</span><span style="--0:#F6F6F4"> [</span><span style="--0:#62E884">vue</span><span style="--0:#F6F6F4">()],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">9</div></div><div class="code"><span class="indent"><span style="--0:#F6F6F4">  </span></span><span style="--0:#F6F6F4">resolve</span><span style="--0:#F286C4">:</span><span style="--0:#F6F6F4"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">10</div></div><div class="code"><span class="indent"><span style="--0:#F6F6F4">    </span></span><span style="--0:#F6F6F4">alias</span><span style="--0:#F286C4">:</span><span style="--0:#F6F6F4"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">11</div></div><div class="code"><span class="indent">      </span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">@</span><span style="--0:#DEE492">"</span><span style="--0:#F286C4">:</span><span style="--0:#F6F6F4"> </span><span style="--0:#62E884">fileURLToPath</span><span style="--0:#F6F6F4">(</span><span style="--0:#F286C4;--0fw:bold">new</span><span style="--0:#F6F6F4"> </span><span style="--0:#62E884">URL</span><span style="--0:#F6F6F4">(</span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">./src</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4">, </span><span style="--0:#F286C4">import</span><span style="--0:#F6F6F4">.meta.url)),</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">12</div></div><div class="code"><span class="indent"><span style="--0:#F6F6F4">    </span></span><span style="--0:#F6F6F4">},</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">13</div></div><div class="code"><span class="indent"><span style="--0:#F6F6F4">  </span></span><span style="--0:#F6F6F4">},</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">14</div></div><div class="code"><span style="--0:#F6F6F4">});</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { fileURLToPath, URL } from &#x22;node:url&#x22;;import { defineConfig } from &#x22;vite&#x22;;import vue from &#x22;@vitejs/plugin-vue&#x22;;// https://vitejs.dev/config/export default defineConfig({  plugins: [vue()],  resolve: {    alias: {      &#x22;@&#x22;: fileURLToPath(new URL(&#x22;./src&#x22;, import.meta.url)),    },  },});"><div></div></button></div></figure></div>';

const frontmatter = {};
const file =
  "C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/pages/2023/11/07/Codes/code05.md";
const url = "/2023/11/07/Codes/code05";
function rawContent() {
  return '```ts title="vite.config.ts"\nimport { fileURLToPath, URL } from "node:url";\n\nimport { defineConfig } from "vite";\nimport vue from "@vitejs/plugin-vue";\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue()],\n  resolve: {\n    alias: {\n      "@": fileURLToPath(new URL("./src", import.meta.url)),\n    },\n  },\n});\n```\n';
}
function compiledContent() {
  return html;
}
function getHeadings() {
  return [];
}

const Content = createComponent((result, _props, slots) => {
  const { layout, ...content } = frontmatter;
  content.file = file;
  content.url = url;

  return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
});

export {
  Content,
  compiledContent,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url,
};
