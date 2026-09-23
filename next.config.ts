import type { NextConfig } from "next";

function getAllowedOrigins(): string[] {
  const origins = new Set<string>(["localhost", "127.0.0.1"]);
  const appUrl = process.env.APP_URL;

  if (appUrl) {
    try {
      const url = new URL(appUrl.includes("://") ? appUrl : `http://${appUrl}`);
      if (url.host) origins.add(url.host);
      if (url.hostname) origins.add(url.hostname);
    } catch {
      origins.add(appUrl);
    }
  }

  return Array.from(origins);
}

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: getAllowedOrigins(),
};

export default nextConfig;
