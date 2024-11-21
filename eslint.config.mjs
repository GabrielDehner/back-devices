// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [{
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            parser: tsParser,
            globals: globals.browser,
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off", // Desactiva la regla de `no-explicit-any`
        },
    },
    pluginJs.configs.recommended,
    ...tsPlugin.configs.recommended,
];
