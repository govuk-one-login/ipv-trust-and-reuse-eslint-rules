# ipv-trust-and-reuse-eslint-rules

Provides a set of standard ESLint rules for the Trust and Reuse Team components. It support ESLint rules for:

- Javascript using the @eslint/js plugin
- Typescript using the typescript-eslint plugin
- Prettier using the eslint-plugin-prettier plugin
- Vitest using the @vitest/eslint-plugin plugin (if vitest is installed in your project)

## Installation

1. Install the required package for the library. This should be stored as a `devDependencies` and it's recommended to pin the version.

   ```bash
   npm i --save-dev -E @eslint/js eslint eslint-config-prettier eslint-plugin-prettier typescript-eslint
   ```

2. From the command line install the package using. This should be stored as a `devDependencies` and it's recommended to pin the version.

   ```bash
   npm i --save-dev -E @govuk-one-login/ipv-trust-and-reuse-eslint-rules
   ```

3. Create the top level file `eslint.config.mjs` with the following contents:

   ```typescript
   export { default } from "@govuk-one-login/ipv-trust-and-reuse-eslint-rules";
   ```

4. Ensure that your package.json `"scripts"` contains an eslint entry, for example:

   ```json
   "scripts": {
     "lint": "eslint . --ext .ts"
   }
   ```

5. (Optional) If you are using `vitest` you must also install `@vitest/eslint-plugin`.

   ```bash
   npm i --save-dev -E @vitest/eslint-plugin
   ```

## Local Development

The module is developed using Javascript and will use the defined eslint rules to test its own code. You can test the
module by:

```bash
npm ci
npm run lint
```
