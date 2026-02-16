/** @type {import('next').NextConfig} */
const nextConfig = {
    // Performance: compress and optimize production builds
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,

    // Image optimization - Supporting modern formats for better LCP
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                pathname: '/vi/**',
            },
        ],
    },

    // Headers for security and performance (Cache-Control)
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                ],
            },
            {
                source: '/fonts/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },

    // Redirects for SEO: PHP to Next.js mapping
    async redirects() {
        return [
            {
                source: '/index.php',
                destination: '/',
                permanent: true,
            },
            {
                source: '/about.php',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/contact.php',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/warranty.php',
                destination: '/warranty',
                permanent: true,
            },
            {
                source: '/faq.php',
                destination: '/faq',
                permanent: true,
            },
            {
                source: '/blog.php',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/videos.php',
                destination: '/videos',
                permanent: true,
            },
            {
                source: '/video.php',
                destination: '/videos',
                permanent: true,
            },
            {
                source: '/privacy.php',
                destination: '/privacy',
                permanent: true,
            },
            {
                source: '/terms.php',
                destination: '/terms',
                permanent: true,
            },
            {
                source: '/refund-policy.php',
                destination: '/refund-policy',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
