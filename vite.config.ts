import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
	plugins: [tanstackRouter(), react(), tailwindcss()],
	resolve: {
		tsconfigPaths: true,
	},
})
