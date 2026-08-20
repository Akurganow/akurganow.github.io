---
title: UX Engineer, Team Lead JavaScript Developer
company: Freewallet.org
company_url: https://freewallet.org
dates: March 2018 — February 2020
---

The company developed its own solutions for the cryptocurrency market. I joined one of
its long-running projects after launch and eventually led two teams — mobile and web. I
prepared releases, decomposed and distributed tasks among developers, and wrote code
myself, stepping into other developers' tasks when something didn't go according to
plan. Releases shipped every week, alternating between the web and mobile applications,
giving each a two-week development cycle.

#### Mobile applications

I participated in the design and developed two mobile applications. In the first one
users could interact with more than 300 currencies and tokens (receive, send, buy, view
statistics); it was translated into 14 languages, supported 15 fiat currencies,
interacted with native APIs (camera, push notifications, clipboard, in-app browser),
communicated with the server over WebSockets, and used JWT authentication with
authorization through the most popular providers (e.g. Facebook and Google). It was
built for iOS and Android and available in the App Store and Google Play. The Redux
state was persisted in IndexedDB, encrypted with a key kept in the device's secret
storage. The second application worked with a single currency: from the same sources,
22 separate apps were built with different configs and feature sets, largely repeating
the functionality of the main one.

Technologies: Cordova, Webpack, TypeScript, PostCSS, React, Redux, Reselect, react-intl, OneSky, bignumber.js.
{: .job-stack}

#### Web application

Fully repeated the functionality of the main mobile application, written with the same
technologies and sharing pieces of code where it made development easier. Unlike the
mobile apps it had its own design and routing, was responsive, and the code was split
into vendor chunks and by routes.

Technologies: Webpack, TypeScript, PostCSS, React, Redux, Reselect, react-intl, OneSky, bignumber.js.
{: .job-stack}

#### Website

I designed and developed the marketing website on my own, later handing it over to
another team and returning to mobile development. The site was built into static files
from its own API, separate from the main product (app pages, blog, landing pages);
everything was edited in a dedicated admin panel, stored in a database on the company's
own servers and distributed via CDN. The site was translated into 14 languages, had
more than 20 app pages, landing pages and a multilingual blog; every page had an AMP
version, and some hid easter eggs — I consider such things mandatory for marketing.
For example, instead of a static screenshot, app pages showed a dynamic SVG with the
real time, date and live currency rates.

Technologies: Gatsby.js, React, PostCSS, react-intl, OneSky, bignumber.js, Nest.js, RxJS.
{: .job-stack}
