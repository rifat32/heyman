import Document, { Html, Head, Main, NextScript } from 'next/document'

const {NEXT_PUBLIC_URL} = process.env
class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href={NEXT_PUBLIC_URL + "https://vitals.vercel-insights.com"} />
          <link rel="preconnect" href={NEXT_PUBLIC_URL +"https://ws.audioscrobbler.com"} />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
           <link rel="apple-touch-icon" sizes="152x152" href={NEXT_PUBLIC_URL +"/eren-1.png"} />
          <link rel="icon" type="image/png" sizes="32x32" href={NEXT_PUBLIC_URL +"/eren-1.png"} />
          <link rel="icon" type="image/png" sizes="16x16" href={NEXT_PUBLIC_URL +"/eren-1.png"} />
       
          <link rel="manifest" href={"/site.webmanifest"} />
          <link rel="mask-icon" href={NEXT_PUBLIC_URL +"/safari-pinned-tab.svg"} color="#FFFFFF" />
          <meta property="og:url" content="https://ven.earth" />
          <meta property="og:site_name" content="Erenci" />
          {/* <meta property="og:image" content="/img/ven.jpg" /> */}
          <meta property="og:image" content="/eren-1.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://ven.earth/img/ven.jpg" />
        </Head>
        <body className="bg-white dark:bg-black text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
