// @ts-check

import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";

/**
 * Tests whether the given module if found and checks that the module ESLint plugin is installed. If the module is found
 * but the module is not installed an error is thrown.
 * @param {string} moduleName The name of the module to test for.
 * @param {string} modulePlugin The name of the module plug-in if moduleName is found.
 * @returns undefined if the moduleName is not found, otherwise the module plugin.
 */
const resolveESLintPlugin = async (moduleName, modulePlugin) => {
  try {
    await import(moduleName);
  } catch {
    return; // Not available
  }

  try {
    return await import(modulePlugin);
  } catch {
    throw new Error(
      `The import "${moduleName}" was detected, you must also install "${modulePlugin}" as a devDependency`,
    );
  }
};

const vitest = await resolveESLintPlugin("vitest", "@vitest/eslint-plugin");

export default defineConfig(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  unicorn.configs.recommended,
  ...(vitest ? [vitest.default.configs.recommended] : []),
  {
    rules: {
      "no-console": "error",
      "prefer-object-has-own": "error", // Make compliant with SonarQube Sonar Way rule TypeScript:S6653
      "no-prototype-builtins": "error", // Make compliant with SonarQube Sonar Way rule TypeScript:S6653
    },
  },
);
