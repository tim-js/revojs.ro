import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <title>revo.js JavaScript Conference</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta property="og:title" content="revo.js" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://revojs.ro/revojs-2020-revolve.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://revojs.ro/" />
        <meta
          property="og:description"
          content="revo.js is the first JavaScript conference in Timisoara, Romania. revo.js aims to bring JavaScript enthusiasts two full days of tech-focused talks, community networking and thought-provoking ideas meant to inspire change, the only constant there is."
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="Description"
          content="revo.js is a two-day, single-track, community-driven, JavaScript Conference in Timisoara, Romania"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '333160550657034'); 
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
            height="1"
            width="1"
            alt=""
            src="https://www.facebook.com/tr?id=333160550657034&amp;ev=PageView
            &amp;noscript=1"
          />`,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
