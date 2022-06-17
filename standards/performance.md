---
layout: layout
title: Performance | Standards as a platform | Barnardo's
desc: Barnardo's online platforms performance standards
permalink: standards/web-performance/
pageTitle: Front end performance
pageTaxonomy: content
tags: standard
extract: How we make our website fast and light for all our users.
themeModifier: standards
eleventyNavigation:
  key: Front end performance
  parent: Standards
---

## Why fast and light websites matter

Speedy websites are better for any organisation, but are especially important for Barnardo's.

### Not everyone has an iPhone or Samsung

Below is a list of some of the device manufacturers we see in our analytics. They are almost all very cheap phones, and we know many of them are used by refugee and immigrant communities. Many of the models don't have 3G, and have a pre-installed browser with limited capabilities.

These devices can't download, parse, compile, render or execute code at anything near the speed of a top of the range phone, and they stand no chance with a big JavaScript bundle.

- Cubot
- DOOGEE
- Energizer
- Flexymove
- Gionee
- Infinix
- IPPO
- JXT
- Kyocera
- Meizu
- Mobicel
- Oukitel
- POCO
- Positivo
- Rokit
- Symphony
- UMI
- Umidigi
- WE
- XTOUCH
- Asus
- Blackberry
- Cubot
- Nokia
- OPPO
- Realme
- Tecno
- Alcatel
- Itel
- TCL
- Ulephone
- Vankyo
- Vivo
- Acer
- Archos
- Blackview
- BLUBOO
- BQ
- Casper
- CAT
- Condor
- Wileyfox
- Alba
- Coolpad
- Fairphone
- Doro
- RCA
- STK
- Wiko
- Cectdigi
- Chuwi
- Double Power
- Dragon Touch
- Egreat
- GoTab
- Hisense
- Leagoo
- Medion
- Neffos
- Nuu
- Razer
- Teclast
- Vernee
{.list .list--compact}

### Data is expensive for a lot of people

At Barnardo's we know a lot of people who come to us for help don't have home internet. They rely on their data plan which is often pay as you go (PAYG). When that runs out they have to use free, often insecure, wifi or do without.

The median weight of web pages delivered to phones is [just over 2 megabytes](https://httparchive.org/reports/page-weight?start=2017_08_15&end=latest&view=list#bytesTotal). Somebody who can afford a £5 per month top up, paying 10p per megabyte, can see 25 web pages at that weight.

All web pages on Barnardo's products should be less than 100 kilobytes.

### Network performance is bad for everyone some of the time

No matter how expensive your device or how many megabytes in your data plan, there are times when wifi dips or when mobile internet signal wobbles around the slow end of 3G. A light website has a better chance of delivery to users' devices under poor network conditions.

### Conversions are better on fast websites

Faster web pages and interactions are strongly correllated with improved results. The [evidence is overwhelming](https://wpostats.com/).

If your site is for delivering information, more people will see it on a fast web site.

If your site is for increasing contact, more people will get in touch from a fast web site.

If your site collects donations, more people will donate on a fast website.

## Perceived performance

Every web page and interaction should feel fast. However the phrase 'perceived performance' often means using tricks to make a slow website feel fast, whether by making the waiting seem shorter or doing heavy lifting in the background (often making a page unresponsive). At Barnardo's we insist upon actual performance.

## Measuring performance

Developers are free to choose the tools they prefer for measuring performance, however all pages must pass core web vitals in the Chrome User Experience Report (CrUX). A brand new site must pass core web vitals in a lab test.

Product owners and developers must continually monitor the performance of their sites and fix any issues that arise.

For experimenting and refining page performance we recommend using Cloudflare workers and WebPageTest to test ideas before deployment.

## Architecture constraints

Developers must apply the [rule of least power](https://en.wikipedia.org/wiki/Rule_of_least_power) when assessing front end technology for a web site or app.

Static site generators must be the first technology assessed, ruling out any that can't be deployed with 0kb of JavaScript, and preferring those that start with 0kb of JavaScript _by default_.

When client side JavaScript is needed use progressive enhancement, or progressively enhanced islands architecture. For example [partial hydration in Astro](https://docs.astro.build/en/core-concepts/partial-hydration/) and [11ty &lt;is-land&gt;](https://github.com/11ty/is-land).

Fully client-side JavaScript frameworks are not suitable for any Barnardo's product or our users, therefore must not be considered.

## Reading list

- https://jasonformat.com/islands-architecture/
- https://nooshu.com/blog/2021/03/14/setting-up-cloudflare-workers-for-web-performance-optimisation-and-testing/

## Suggested feeds

- https://nooshu.com/blog/
- https://andydavies.me/
- https://csswizardry.com/archive/
- https://timkadlec.com/remembers/
- https://www.twitch.tv/webpagetest
- https://web.dev/tags/performance/