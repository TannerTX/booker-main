import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {ignores: ["build/*", "config/*", "*/firebase.js", "**/.eslintrc.js", "**/Insert.js", "**/About.js", "**/JobListing.js"]},
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
