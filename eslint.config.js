import eslint from "@eslint/js";
import typescript from "typescript-eslint";
import globals from "globals";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier/recommended";

export default typescript.config(
  {
    files: ["**/*.{ts,tsx}"],
    extends: [eslint.configs.recommended, ...typescript.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { react },
  },
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          bracketSameLine: true,
          endOfLine: "auto",
          plugins: ["prettier-plugin-tailwindcss"],
        },
      ],
    },
  },
  prettier,
);
