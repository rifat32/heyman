module.exports = {
  env: {
    NEXT_PUBLIC_LASTFM_API_KEY: 'ebe2c441c37e356caefe318275757b53',
    NEXT_PUBLIC_URL: "/Erenci"  
  },
  assetPrefix: '/Erenci',
  basePath:"/Erenci",
  
 
  reactStrictMode: true,
  webpack5: true,
  poweredByHeader: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/ven',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/venolol',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/204616460797083648',
        permanent: true,
      },
    ]
  },
}
