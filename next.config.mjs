import path from "path";
import { fileURLToPath } from "url";

// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);
// Get the directory path of the current module
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
