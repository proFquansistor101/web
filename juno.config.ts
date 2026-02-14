import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      production: "quchr-wyaaa-aaaal-aswwa-cai"  // Tvůj satellite ID z Juno Console
    },
    source: "build"  // Nahraje soubory z build/ složky
  }
});
