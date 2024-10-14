import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config);
    },
    experimentalStudio: true,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
  },
});
