import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  someConfig,
  eslintConfigPrettier,
  {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "linebreak-style": ["error", "unix"], // символ(ы) конца строки
        "quotes": ["error", "single"], // использовать одинарные кавычки
        "semi": ["error", "never"], // точка с запятой в конце операторов
        "indent": ["error", 4, { "SwitchCase": 1 }], // отступы в коде из 4 пробелов с учетом switch...case
        "arrow-parens": ["error", "as-needed"], // скобки вокруг единственного параметра стрелочной функции
        "object-curly-spacing": ["error", "always"], // пробелы между скобками в литералах объектов
        "array-bracket-spacing": ["error", "never"], // пробелы между скобками в массивах
        "quote-props": ["error", "as-needed"], // свойства объекта в кавычках или без кавычек
        "no-trailing-spaces": "error", // не должно быть пробелов в конце строки
        "no-tabs": "error", // символы табуляции в коде запрещена везде
        "comma-dangle": ["error", { // запятая после последнего элемента массива или объекта
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "brace-style": ["error", "1tbs"], // правила для фигурных скобкок для блоков кода
        "keyword-spacing": "error", // пробел слева и справа для ключевых слов
        "no-multi-spaces": "error", // не допускается несколько пробелов подряд
        "eqeqeq": "error", // использовать === и !== вместо == и !=
        "camelcase": "error", // имена переменных и функций в стиле camelCase
        "max-len": ["error", 100], // максимальная длина строки
        "no-multiple-empty-lines": "error" // не больше 2 пустых строк подряд
        }
    }
];