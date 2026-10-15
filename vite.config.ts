import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, lazyPlugins } from "vite-plus"

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: false,
    tabWidth: 2,
    printWidth: 100,
    trailingComma: "all",
    sortImports: {},
    sortTailwindcss: {
      stylesheet: "./src/index.css",
      attributes: ["classList"],
      functions: [
        "cx",
        "twMerge",
        "twJoin",
        "tv",
        "composeRenderProps",
        "composeTailwindRenderProps",
      ],
    },
    ignorePatterns: ["src/routeTree.gen.ts", ".agents/**", ".idea/**", "dist/**"],
  },
  lint: {
    ignorePatterns: ["src/routeTree.gen.ts", ".agents/**", "dist/**"],
    plugins: ["typescript", "unicorn", "oxc", "react"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [
    tanstackRouter({ quoteStyle: "double", semicolons: false }),
    react(),
    tailwindcss(),
  ]),
  resolve: {
    tsconfigPaths: true,
  },
})
