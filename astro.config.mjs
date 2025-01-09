import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: "/saved-press-landing", // Add your repository name here
  integrations: [tailwind()],
});
