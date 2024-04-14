/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
    },
    env: {
        API_URL: "https://blog-site-backend-production.up.railway.app",
    }

};

export default nextConfig;
