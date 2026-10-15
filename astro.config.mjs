import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://winaytech.gdg.com.bo",
  integrations: [tailwind(), partytown()],
});
