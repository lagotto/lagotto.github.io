---
layout: post
title: "Eat your own dogfood: lessons learned from building an API"
category: blog
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

The PLOS [Article-Level Metrics
application](https://github.com/articlemetrics/alm) is open source
software that collects a variety of metrics about scholarly articles.
The application talks to a number of APIs, and in return provides these
metrics via an API. Work on this application therefore involves a lot of
work on APIs, and some of the lessons I learned are summarized below,
including changes we made in the latest [ALM
2.8](https://github.com/articlemetrics/alm/releases/tag/v.2.8) release.
Most of the things I mention are fairly obvious, but some of them could
be starting points for a discussion. Good APIs are important for
scholarly content, as we increasingly use computers to extract relevant
information out of papers – see for example the cool projects done at
the [hack4ac event](http://hack4ac.com/) last month, including the one
on [PLOS author
contributions](https://www.writelatex.com/blog/32-hack4ac-text-mining-and-analyzing-author-contributions-in-plos-articles) that
I participated in.

### Eat your own dogfood

The first rule for building a good API is to use it yourself. The PLOS
ALM API is used by the PLOS journal websites, [ALM
Reports](http://almreports.plos.org/), and the [PLOS
Search](http://blogs.plos.org/plos/2010/06/search-faster-and-smarter-with-plos/)
indexer, altogether more than 8 million API requests every month.
Heavily using your own API makes sure that you quickly find and fix
bugs, and that you build an API that is fun to use.

[![Vintage Ad \#910: Doggie
Donuts](http://farm3.staticflickr.com/2430/3910689175_f6d9fc2bc9.jpg)](http://www.flickr.com/photos/jbcurio/3910689175/ "Vintage Ad #910: Doggie Donuts von jbcurio bei Flickr")

*Doggie Donuts. Flickr Foto by [Jamie](http://www.flickr.com/photos/jbcurio/).*

I use the [rplos](http://ropensci.github.io/rplos/) and
[alm](https://github.com/ropensci/alm) R packages to retrieve data from
the PLOS Search and PLOS ALM APIs for most of my visualizations – the R
statistical computing language is great for this purpose. Working with
these APIs via an R client library can again provide valuable feedback
not only for improving the ALM API, but also to make the **rplos** and
**alm** packages better – and Scott Chamberlain from the
[rOpenSci](http://ropensci.org/) project is very quick with updates.

### Document your API

Documentation is important for all software, and that of course also
includes APIs. The documentation for the PLOS ALM API is in the Github
[wiki](https://github.com/articlemetrics/alm/wiki/API). In the latest
ALM release we have included the documentation right in the ALM
application to make it easier to use, e.g. with the documentation for
the PubMed API right next to the PubMed configuration tab. You also see
the documentation when you sign up for an API key (see below).

![documentation](/assets/documentation.png)

### Make it simple to sign up for an API key

Most APIs require API keys, although some of them (e.g. Wikipedia) are
fine with identification via the U*ser-Agent* header. API keys are not
so much passwords to gain access to restricted information, but rather
identifiers so that API providers know who is talking to them. For
access to restricted resources we need something more secure e.g.
authentication via [OAuth](https://dev.twitter.com/docs/auth/oauth) or
restriction by IP address.

In ALM 2.8 we made it much easier to register for an API key: simply
sign in to [alm.plos.org](http://alm.plos.org) using your [PLOS
Journals](http://register.plos.org) account – the same account you use
to receive [customized email alerts for new
articles](http://blogs.plos.org/everyone/2013/07/31/new-customized-plos-one-email-alerts-by-subject-area/),
or to make article comments (we are using the
[CAS](http://www.jasig.org/cas) protocol for this).

![login](/assets/login.png)

For other organizations installing the ALM software we provide two other
options: [Mozilla
Persona](http://www.mozilla.org/en-US/persona/) and [Github
OAuth](http://developer.github.com/v3/oauth/). Persona doesn’t require
any configuration and is very straightforward to use, Github OAuth is
nice since many API users probably already have a Github account.

![persona](/assets/persona.png)

### Version your API

No API is perfect and you will make changes over time. The only way to
strike the right balance between a stable API that doesn’t break, and
making changes that improve the API is to use API versioning, giving
users time to transition to a new API. The ALM API is currently at
version 3, and you indicate the API version in the URL:

    http://alm.plos.org/api/v3/articles?api_key=123&ids=10.1371%2Fjournal.pmed.0020124

We will retire the old v2 APi that was launched in July 2012 on
September 15.

### REST is not REST

Most modern APIs are REST APIs. But there are many different ways how
details can be implemented. I am mostly following the [REST API Design
Rulebook](http://shop.oreilly.com/product/0636920021575.do), and this
also includes this rule:

> File extensions should not be included in URIs.

The ALM API supports both JSON and XML responses, and the format has to
be specified using the *Content-Type* header, defaulting to JSON. I’m
considering adding a query string such as **&format=xml** to make it
easier for web browsers to do content negotiation.

Another example is returning the **404** (**Not Found**) status code
when a resource can’t be found. Mendeley is the only API that the ALM
application is talking to itself that is also following this
recommendation, the other APIs return a **200** (**OK**) status code
even when they have no information about an article.

Something that almost never works in my experience is “automatic” REST
APIs that automatically translate your database model. I very much
prefer an intermediate layer between model and API (I use
the [Draper](https://github.com/drapergem/draper) decorator and
the [RABL](https://github.com/nesquena/rabl) templating system) that
lets me decide how I present the information in the API. Another reason
is the versioning mentioned above: it is much easier to do versioning
when the API code is not in the model, but in the presentation layer.

### Make your API fast

Many factors go into the speed of an API, and I only want to mention
three things:

-   speed is important, in particular when looking at metrics for more
    than a handful articles
-   caching is essential (we use extensive [fragment
    caching](http://37signals.com/svn/posts/3113-how-key-based-cache-expiration-works))
-   monitoring the performance of your API can help find bottlenecks

We collect the duration of all API requests and display the last 10,000
graphically using the [d3.js](http://d3js.org/) and
[crossfilter](http://square.github.io/crossfilter/) Javascript
libraries. You can see that a typical request takes 150-300 ms, whereas
a cached request can be as quick as 10 ms. This tool was very helpful in
fine-tuning the performance of the API during development.

![duration](/assets/duration1.png)

### Listen to feedback

This is an area where we could do much better. There is a [PLOS API
mailing list](https://groups.google.com/forum/?fromgroups#!forum/plos-api-developers)
and a [Github issue tracker](https://github.com/articlemetrics/alm/issues), and we would
love to get feedback in either of these places. Feedback is important,
as we can’t possible anticipate all the uses of the API.