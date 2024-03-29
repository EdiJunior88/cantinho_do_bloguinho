// postcss.config.ts
// import postcssImport from "postcss-import";
// import postcssNested from "postcss-nesting";
// import autoprefixer from "autoprefixer";
// import tailwindcss from "tailwindcss";
// import tailwindcss_nesting from "tailwindcss/nesting";

// export default {
//   plugins: [
//     postcssImport,
//     tailwindcss_nesting,
//     tailwindcss,
//     autoprefixer,
//     postcssNested,
//   ],
// };

// postcss.config.js
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
  ],
};
