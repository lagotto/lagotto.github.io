---
layout: page
title: "About Article-Level Metrics"
---
<!-- this page provides information on the following:
- full description of what ALMs are
- summary of ALM application as a data harvester
- range of article activity captured through the 5 categories
-->
## ALM

Traditionally, the impact of research articles has been measured by the publication journal. But a more informative view is one that examines the overall performance and reach of the articles themselves. Article-Level Metrics capture the manifold ways in which research is disseminated and used, including:

* viewed
* shared
* discussed
* cited</li>
* recommended.

Each of the metrics fall under one of these activities. But as an entire set, they paint a comprehensive portrait of the overall footprint of how the scholarly and public are engaging with the research.</p>

![Usage](/assets/usage.png)

*From: Fenner M, Lin J (2013). Altmetrics in Evolution: Defining & Redefining the Ontology of Article-Level Metrics. [http://dx.doi.org/10.3789/isqv25no2.2013.04](http://dx.doi.org/10.3789/isqv25no2.2013.04).*

ALM offer a dynamic and real-time view of the latest activity. Researchers can stay up-to-date with their published work and share information about the impact of their publications with collaborators, funders, institutions, and the research community at large. These metrics are also a powerful way to navigate and discover others’ work. They can be customized based on the unique needs of researchers, publishers, institutional decision-makers, and funders.

## ALM Application

The ALM application collects and aggregates the data from external sources where article activity is occurring. It was developed in 2009 as an open source application by PLOS. To date, the community of [contributors to the application](/docs/Contributors) has rapidly grown as more publishers and other providers are implementing the system.

The application retrieves data from a wide set of services ([sources](/docs/Sources)). Some of these sources represent the actual channels where users are directly viewing, sharing, discussing, citing, recommending the articles (e.g., Twitter and Mendeley). Others are third-party vendors which provide this information (e.g., CrossRef for citations). All data is fetched via an API from the sources. Each source has a unique set of specifications for query volume, frequency, and speed. In order to ensure that the metrics reflect the latest activity, we queue each article for every source to be refreshed based upon its publication date and the upper thresholds for each source. The system then programmatically harvests data for each article and each source at its appointed time.

The platform contains a default set of public sources, available for all with a user account. Publishers and providers have also implemented additional private sources either because the sources either use an internal application, which is not available via public API (journal usage stats, figshare usage, journal comments, etc.) or require a contract with the provider (Scopus, Web of Science, F1000). Additional sources (public or private) can be easily configured to extend the collection of article activity.

The ALM application automatically monitors the harvest of successfully returned data, query errors, elevated counts that are flagged as suspicious. The system surfaces potential issues for investigation on the administrative dashboard as well as through email notifications. It also contains a basic set of reporting tools for article statistics, source status, errors, etc.