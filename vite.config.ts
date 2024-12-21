import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: "tsconfig.app.json",
			entryRoot: "src"
		})
	],
	build: {
		outDir: "lib",
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "ReactComponents",
			formats: ["es", "cjs"],
			fileName: (format) => {
				if (format == "es")
					return "index.js";
				return "index.cjs";
			},
		},
		sourcemap: true,
		emptyOutDir: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern"
			}
		}
	},

});