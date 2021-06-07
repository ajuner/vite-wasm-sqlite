import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		usePluginImport({
			libraryName: "@nutui/nutui",
			customName: (name) => {
				return `@nutui/nutui/dist/packages/${name}/index.scss`;
			},
			// styleLibraryDirectory: "lib/theme-chalk",
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
			},
		},
	},
});
