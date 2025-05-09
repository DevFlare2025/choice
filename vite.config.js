import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.jsx", "resources/js/app.js"],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    optimizeDeps: {
        include: ["react", "react-dom"],
    },
})
