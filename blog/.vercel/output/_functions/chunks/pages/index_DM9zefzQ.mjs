/* empty css                           */
import {
  e as createAstro,
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  h as addAttribute,
  i as renderComponent,
} from "../astro_yvkYO_vT.mjs";
import { _ as _export_sfc, $ as $$Icon, a as $$Layout } from "./__D1J9TR9b.mjs";
import {
  titleNews,
  formateDate,
  fullDate,
  formateTitle,
} from "./title_CQvU0ofJ.mjs";
import { useSSRContext, defineComponent, mergeProps } from "vue";
/* empty css                          */
import {
  ssrRenderAttrs,
  ssrInterpolate,
  ssrRenderSlot,
} from "vue/server-renderer";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cards",
  props: {
    title: {
      type: String,
      require: true,
      default: "",
    },
    datePost: {
      type: String,
      require: true,
      default: "",
    },
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true,
    });
    return __returned__;
  },
});
function _sfc_ssrRender(
  _ctx,
  _push,
  _parent,
  _attrs,
  $props,
  $setup,
  $data,
  $options,
) {
  _push(
    `<div${ssrRenderAttrs(mergeProps({ class: "fontTitle mb-1 max-w-3xl" }, _attrs))}><div class="border-card relative -z-10 -mb-1 w-24 rounded-t-lg border bg-white px-2.5 py-2 text-center text-xs font-medium text-slate-500">${ssrInterpolate($props.datePost)}</div><div class="border-card flex h-20 items-stretch justify-normal rounded-lg border shadow-md"><div class="flex w-[105px] items-center justify-center rounded-l-lg bg-blue-200 p-4 text-black">`,
  );
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(
    `</div><div class="flex w-full items-center hyphens-auto break-words rounded-r-lg bg-white p-3 text-xl font-medium">${ssrInterpolate($props.title)}</div></div></div>`,
  );
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    "src/components/Cards/Cards.vue",
  );
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardsVue = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ["ssrRender", _sfc_ssrRender],
]);

const $$Astro$1 = createAstro();
const $$Cards = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
    Astro2.self = $$Cards;
    return renderTemplate`${maybeRenderHead()}<section class="flex justify-center pb-8"> <a${addAttribute(`${fullDate}/${formateTitle}`, "href")}> ${renderComponent($$result, "CardsVue", CardsVue, { title: titleNews, datePost: formateDate() }, { default: ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { name: "logos:vue" })} ` })} </a> </section>`;
  },
  "C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/components/Cards/Cards.astro",
  void 0,
);

const $$Astro = createAstro();
const $$Index = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Index;
    return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { title: "Cantinho do Bloguinho" }, { default: ($$result2) => renderTemplate` ${renderComponent($$result2, "Cards", $$Cards, {})} ` })}`;
  },
  "C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/pages/index.astro",
  void 0,
);

const $$file =
  "C:/Users/ermou/Desktop/PROGRAMACAO/cantinho_do_bloguinho/blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
