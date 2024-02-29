/* empty css                           */
import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from "../astro_yvkYO_vT.mjs";

const html =
  '<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1ojaj.css"><script type="module" src="/_astro/ec.sgewm.js"></script><figure class="frame has-title"><figcaption class="header"><span class="title">index.vue</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="gutter"><div class="ln">1</div></div><div class="code"><span style="--0:#F6F6F4">&#x3C;</span><span style="--0:#F286C4">script</span><span style="--0:#F6F6F4"> </span><span style="--0:#62E884;--0fs:italic">setup</span><span style="--0:#F6F6F4"> </span><span style="--0:#62E884;--0fs:italic">lang</span><span style="--0:#F286C4">=</span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">ts</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln">2</div></div><div class="code"><span style="--0:#F286C4">import</span><span style="--0:#F6F6F4"> App </span><span style="--0:#F286C4">from</span><span style="--0:#F6F6F4"> </span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">./App.vue</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln">3</div></div><div class="code"><span style="--0:#F6F6F4">&#x3C;/</span><span style="--0:#F286C4">script</span><span style="--0:#F6F6F4">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln">4</div></div><div class="code">\n</div></div><div class="ec-line"><div class="gutter"><div class="ln">5</div></div><div class="code"><span style="--0:#F6F6F4">&#x3C;</span><span style="--0:#F286C4">template</span><span style="--0:#F6F6F4">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln">6</div></div><div class="code"><span class="indent"><span style="--0:#F6F6F4">  </span></span><span style="--0:#F6F6F4">&#x3C;</span><span style="--0:#F286C4">App</span><span style="--0:#F6F6F4"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln">7</div></div><div class="code"><span style="--0:#F6F6F4">&#x3C;/</span><span style="--0:#F286C4">template</span><span style="--0:#F6F6F4">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln">8</div></div><div class="code">\n</div></div><div class="ec-line"><div class="gutter"><div class="ln">9</div></div><div class="code"><span style="--0:#F6F6F4">&#x3C;</span><span style="--0:#F286C4">style</span><span style="--0:#F6F6F4"> </span><span style="--0:#62E884;--0fs:italic">lang</span><span style="--0:#F286C4">=</span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">css</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4"> </span><span style="--0:#62E884;--0fs:italic">scoped</span><span style="--0:#F6F6F4">>&#x3C;/</span><span style="--0:#F286C4">style</span><span style="--0:#F6F6F4">></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<script setup lang=&#x22;ts&#x22;>import App from &#x22;./App.vue&#x22;;</script><template>  <App /></template><style lang=&#x22;css&#x22; scoped></style>"><div></div></button></div></figure></div>';

const frontmatter = {};
const file =
  "C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/pages/2023/11/07/Codes/code03.md";
const url = "/2023/11/07/Codes/code03";
function rawContent() {
  return '```vue title="index.vue"\n<script setup lang="ts">\nimport App from "./App.vue";\n</script>\n\n<template>\n  <App />\n</template>\n\n<style lang="css" scoped></style>\n```\n';
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
