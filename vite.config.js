import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    resolve: {
        alias: {
            app: "/src/app",
            entities: "/src/entities",
            features: "/src/features",
            pages: "/src/pages",
            shared: "/src/shared",
            widgets: "/src/widgets",
        },
    },
    server: {
        port: 3000,
    },
});
