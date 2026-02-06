/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactStrictMode: false,
  // Fix per PrismaAdapter bundling issue
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), '@auth/prisma-adapter'];
    }
    return config;
  },
  // Assicura che Prisma venga gestito correttamente
  serverExternalPackages: ['@prisma/client', 'prisma'],
};

export default nextConfig;