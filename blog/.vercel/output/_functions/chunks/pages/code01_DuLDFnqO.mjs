/* empty css                           */
import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from "../astro_yvkYO_vT.mjs";

const html =
  '<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1ojaj.css"><script type="module" src="/_astro/ec.sgewm.js"></script><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F286C4">import</span><span style="--0:#F6F6F4"> { MeuComponente } </span><span style="--0:#F286C4">from</span><span style="--0:#F6F6F4"> </span><span style="--0:#DEE492">"</span><span style="--0:#E7EE98">../../pasta/componente.vue</span><span style="--0:#DEE492">"</span><span style="--0:#F6F6F4">;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import { MeuComponente } from &#x22;../../pasta/componente.vue&#x22;;"><div></div></button></div></figure></div>';

const frontmatter = {};
const file =
  "C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/pages/2023/11/07/Codes/code01.md";
const url = "/2023/11/07/Codes/code01";
function rawContent() {
  return '```js showLineNumbers=false\nimport { MeuComponente } from "../../pasta/componente.vue";\n```\n';
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
