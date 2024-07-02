/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'media.licdn.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'uxwing.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'cdn4.iconfinder.com',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  