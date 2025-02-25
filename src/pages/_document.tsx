import { Html, Main, Head, NextScript } from "next/document";
import React from "react";

const NextDocument = () => {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Favicon --> */}
        <link rel="icon" href="/images/pp.png" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Aakash"></meta>
        <meta name="description" content="Aakash | Python Developer"></meta>
        <meta
          name="keywords"
          content="Python,Django,Postgresql,Javscript,Nextjs,AWS,Docker"
        ></meta>

        {/* PWA */}
        <meta name="application-name" content="Aakash" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aakash" />
        <meta name="description" content="Aakash | Python Developer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/ios/1024.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/ios/152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/ios/180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/ios/167.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/ios/32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/ios/16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Aakash" />
        <meta name="twitter:description" content="Aakash | Python Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aakash" />
        <meta property="og:description" content="Aakash | Python Developer" />
        <meta property="og:site_name" content="Aakash" />

        <link rel="manifest" href="/manifest.json" />

        {/* apple splash screen images  */}
        {/* <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        /> */}

        {/* <!-- Open Graph / Facebook --> */}
        {/* <meta property="og:type" content="website"></meta>
        <meta property="og:url" content=""></meta>
        <meta property="og:title" content='Gold Apple'></meta>
        <meta property="og:description" content={seoDescription || ""}></meta>
        <meta property="og:image" content={seoImage || ""}></meta> */}

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content={baseUrl}></meta>
        <meta property="twitter:title" content={seoTitle || ""}></meta>
        <meta
          property="twitter:description"
          content={seoDescription || ""}
        ></meta>
        <meta property="twitter:image" content={seoImage || ""}></meta> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default NextDocument;
