import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://new-website-two-gamma.vercel.app",
  image: {
    domains: ["cdn.hashnode.com"],
  },
  integrations: [tailwind(), mdx()],
});
