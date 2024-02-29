import {
  d,
  h as s,
  b as f,
  e as m,
  S as y,
} from "./runtime-dom.esm-bundler.D2dB0PTj.js";
const S = () => {},
  b = d({
    props: {
      value: String,
      name: String,
      hydrate: { type: Boolean, default: !0 },
    },
    setup({ name: n, value: t, hydrate: r }) {
      if (!t) return () => null;
      let o = r ? "astro-slot" : "astro-static-slot";
      return () => s(o, { name: n, innerHTML: t });
    },
  }),
  h =
    (n) =>
    async (t, r, o, { client: i }) => {
      if (!n.hasAttribute("ssr")) return;
      const l = t.name ? `${t.name} Host` : void 0,
        a = {};
      for (const [e, p] of Object.entries(o))
        a[e] = () => s(b, { value: p, name: e === "default" ? void 0 : e });
      const u = i !== "only",
        c = (u ? f : m)({
          name: l,
          render() {
            let e = s(t, r, a);
            return A(t.setup) && (e = s(y, null, e)), e;
          },
        });
      await S(),
        c.mount(n, u),
        n.addEventListener("astro:unmount", () => c.unmount(), { once: !0 });
    };
function A(n) {
  const t = n?.constructor;
  return t && t.name === "AsyncFunction";
}
export { h as default };
