// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   base: '/PORTFOLIO/',
//   // output: 'static', // Required for GitHub Pages deployment
// });

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
});
