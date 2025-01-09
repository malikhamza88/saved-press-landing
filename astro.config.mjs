import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://malikhamza88.github.io",
  base: "/saved-press-landing/",
  integrations: [tailwind()],
});
