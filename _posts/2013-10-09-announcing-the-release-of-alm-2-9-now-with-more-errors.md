---
layout: post
title: "Announcing the release of ALM 2.9 – now with more errors"
category: blog
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

We have released the latest version of the [open source Article-Level
Metrics application](https://github.com/lagotto/lagotto/releases) that PLOS
is using to track how many times each article has been viewed, saved,
discussed, recommended, and cited. Since it is an open source
application, everyone can install this software and [collect metrics for
a different set of
articles](http://blogs.plos.org/plos/2013/10/even-more-journals-display-alms/).

This version has seen the most work since the 2.0 release in July 2012.
This includes fixing a number of annoying small bugs and refactoring a
lot of code–for example, how we make http requests to external APIs and
how we run background processes.

ALM 2.9 also includes a number of new sources, most interestingly
perhaps a new kind of metric: how many times has a PLOS article been
[cited by a database entry in PubMed Central
Europe](http://europepmc.org/RestfulWebService). We find these database
links for 21% of all PLOS articles, and some of them have been cited
more than 10,000 times.

### More errors

The most interesting feature of ALM 2.9 is probably something else: the
application is creating more errors than previous releases. This is of
course intentional, and is caused by a new feature called filters.

![filters](/assets/filters.png)

Filters run every 24 hours and look at the API responses during that
time. A lot of things can go wrong, and we try to catch at least some of
these things automatically. Filters are written in an extensible
architecture similar to sources and we hope to add more complex filters
over time. One example filter checks whether the usage stats or social
media activity for an article increases very fast (our current threshold
is 500/day). This usually means an article that is just popular, but can
of course also be a sign of gaming.

![increasing](/assets/increasing.png)

An example of unusual activity would be the article pictured above: the
article saw 162 HTML views for the whole month of September, but already
2472 HTML views in the first week of October, including 1909 HTML views
in the last 24 hours. Since there is only moderate activity on Twitter,
Facebook, etc. for this article, we don’t find any blog posts discussing
this article, and only one citation by a scholarly article, the most
likely explanation for this spike in HTML views is another event, e.g. a
newspaper article. This requires further investigation, but the example
illustrates how filters can pick up articles that behave in an unusual
way.

Filters are not just for detecting errors. A good example would be the
filter that finds articles that have reached a citation milestone: 50,
100, 150, etc. citations. We can use this filter to alert the authors of
these papers, or to take a closer look at why these papers are so
popular. The papers below have all reached milestones of high Facebook
activity:

![milestones](/assets/milestones1.png)

The list of possible filters is long, especially since filters can have
custom settings. Sometimes more errors is good, and we hope that this
will allow us to improve the overall quality of our ALM data.
