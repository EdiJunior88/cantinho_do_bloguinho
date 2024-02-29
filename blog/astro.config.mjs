import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import astroExpressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    vue(),
    astroExpressiveCode({
      plugins: [pluginLineNumbers()],
      themes: ["dracula-soft"],
    }),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
