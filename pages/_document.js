import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <title>FabHotels</title>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="Description" content="Fabhotels" />
          {/* TO DO - PATH NEED TO CHANGE */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://static.fabhotels.com/img/icons/android-icon-192x192_v1.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://static.fabhotels.com/img/icons/favicon-32x32_v1.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://static.fabhotels.com/img/icons/favicon-96x96_v1.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://static.fabhotels.com/img/icons/favicon-16x16_v1.png"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          />
          {/* <link
            type="text/css"
            rel="stylesheet"
            href="/static/styles/global.css"
          /> */}
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjBL49l3S0XVvt_-AhghxQUaN9AUlcDGU&libraries=places" />
          <script src="https://www.google.com/recaptcha/api.js" async defer />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-578QNF');`
            }}
          />
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GTM-578QNF"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-578QNF');
          `
            }}
          /> */}
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-578QNF" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
