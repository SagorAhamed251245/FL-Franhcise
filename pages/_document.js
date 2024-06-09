import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Quantumburst Solutions LLC</title>
        {/* Other meta tags */}
        <meta property="og:image" content="/public/images/image/themble.jpg" />
      </Head>
      {/* <CustomHead /> */}
      <body className="max_container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
