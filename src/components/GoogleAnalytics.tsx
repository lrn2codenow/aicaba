import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) - Exact code from Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J0XHEM205P"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J0XHEM205P');
          `,
        }}
      />
    </>
  );
}

