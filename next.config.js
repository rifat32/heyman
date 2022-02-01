module.exports = {
  env: {
    NEXT_PUBLIC_MAIN_APP: 'ebe2c441c37e356caefe318275757b53',
    NEXT_PUBLIC_LASTFM_API_KEY: 'ebe2c441c37e356caefe318275757b53',
    NEXT_PUBLIC_Weather_API_KEY: 'e3b952b7c233305e18697b3645934aa6',
    
  },
  assetPrefix: '/Kherici',
  basePath:"/Kherici",
  
 
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
