import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";

const astroFrontmatter = {
  preprocess(source) {
    const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
    return match ? [{ text: match[1], filename: "frontmatter.ts" }] : [];
  },
  postprocess(messages) {
    return messages.flat();
  },
};

export default [
  {
    ignores: ["dist/**", ".astro/**"],
  },
  {
    files: ["src/**/*.ts"],
    ...js.configs.recommended,
    languageOptions: {
      parser: typescriptParser,
      parserOptions: { sourceType: "module" },
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
  {
    files: ["src/**/*.astro"],
    processor: astroFrontmatter,
  },
];
