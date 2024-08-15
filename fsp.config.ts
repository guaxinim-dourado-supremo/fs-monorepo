import { defineConfig } from "@vtex/fsp-cli";

export default defineConfig({
  stores: {
    "store-a": {
      discovery: { path: "packages/discovery", port: 3001 },
      checkout: { path: "packages/checkout", port: 3002 },
    },
  },
});
