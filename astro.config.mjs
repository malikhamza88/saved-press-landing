import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://github.com/malikhamza88/saved-press-landing.git",
  base: "/saved-press-landing/",
  integrations: [tailwind()],
});
