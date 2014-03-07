---
layout: post
title: "Articles with Events from PLOS Biology"
category: examples
tags: [r, barchart]
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

Percentage of all PLOS Biology research articles published until May 20, 2013 that were mentioned at least once by each of the listed data sources. The numbers for Facebook and Twitter are much higher for more recently published articles. Source data in CSV format available [here](/data/alm_report_plos_biology_2013-05-20.csv).

![Fig. 4](/assets/2013-12-11_figure_4.svg)

**Article-level metrics for PLOS Biology.** *Proportion of all 1,706 PLOS Biology research articles published up to May 20, 2013 mentioned by particular article-level metrics source. Colors indicate categories (Viewed, Cited, Saved, Discussed, Recommended), as used on the PLOS website. Originally published as Fig. 4 in [http://dx.doi.org/10.1371/journal.pbio.1001687](http://dx.doi.org/10.1371/journal.pbio.1001687).*

### Source code

```{r 2013-12-11_figure_4, fig.path="images/", fig.show="hold", dev="svg", fig.width=10, fig.height=7, fig.cap="**Figure 4. Article-level metrics for PLOS Biology.** Proportion of all 1,706 *PLOS Biology* research articles published up to May 20, 2013 mentioned by particular article-level metrics source. Colors indicate categories (Viewed, Cited, Saved, Discussed, Recommended), as used on the PLOS website.", message=FALSE}
# code for figure 4: bar plot for Article-level metrics for PLOS Biology

# Load required libraries
library(reshape2)

# load May 20, 2013 ALM report
alm <- read.csv("../data/alm_report_plos_biology_2013-05-20.csv", stringsAsFactors=FALSE, na.strings=c(0, "0"))

# only look at research articles
alm <- subset(alm, alm$article_type == "Research Article")

# make sure columns are in the right format
alm$counter_html <- as.numeric(alm$counter_html)
alm$mendeley <- as.numeric(alm$mendeley)

# options
plos.color <- "#1ebd21"
plos.colors <- c("#a17f78","#ad9a27","#ad9a27","#ad9a27","#ad9a27","#ad9a27","#dcebdd","#dcebdd","#789aa1","#789aa1","#789aa1","#304345","#304345")

# use subset of columns
alm <- subset(alm, select=c("f1000","wikipedia","researchblogging","comments","facebook","twitter","citeulike","mendeley","pubmed","crossref","scopus","pmc_html","counter_html"))

# calculate percentage of values that are not missing (i.e. have a count of at least 1)
colSums <- colSums(!is.na(alm)) * 100 / length(alm$counter_html)
exactSums <- sum(as.numeric(alm$pmc_html),na.rm =TRUE)

# plot the chart
opar <- par(mar=c(0.1,7.25,0.1,0.1)+0.1,omi=c(0.1,0.25,0.1,0.1),col.main=plos.color)

plos.names <- c("F1000Prime","Wikipedia","Research Blogging","PLOS Comments", "Facebook", "Twitter","CiteULike","Mendeley","PubMed Citations", "CrossRef", "Scopus", "PMC HTML Views", "PLOS HTML Views")
y <- barplot(colSums,horiz=TRUE,col=plos.colors, border = NA, xlab=plos.names, xlim=c(0,120), axes=FALSE, names.arg=plos.names,las=1, adj=0)
text(colSums+6,y,labels=sprintf("%1.0f%%", colSums))

par(opar)
```

### Reference

Fenner M. What Can Article-Level Metrics Do for You? *PLoS Biology*. Public Library of Science (PLOS); 2013 Oct 22;11(10):e1001687. Available from: http://dx.doi.org/10.1371/journal.pbio.1001687