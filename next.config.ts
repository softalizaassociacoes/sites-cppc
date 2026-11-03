import type { NextConfig } from "next";
import path from "path";
import { legacyRedirects } from "./src/lib/legacyRedirects.mjs";

/**
 * Enquanto o site está no endereço provisório (cppc.softaliza.com.br), ele
 * responde X-Robots-Tag: noindex para o Google não indexar uma cópia do site
 * de verdade. No dia da migração do domínio basta definir
 * NEXT_PUBLIC_NOINDEX=false na Vercel e publicar — sem alteração de código.
 */
const noIndex = process.env.NEXT_PUBLIC_NOINDEX !== "false";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // As URLs antigas do WordPress terminavam em barra. Sem isto o Next
  // normalizaria a barra com um 308 antes de olhar os redirects, e cada URL
  // antiga responderia 308 + 301 em vez de um 301 só. O último redirect de
  // legacyRedirects() faz o papel da normalização, como 301.
  skipTrailingSlashRedirect: true,
  async headers() {
    if (!noIndex) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return legacyRedirects();
  },
};

export default nextConfig;
