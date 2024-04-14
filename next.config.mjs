/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
    },
    env: {
        API_URL: "https://blog-site-server-d9uh.onrender.com",
    }

};

export default nextConfig;
