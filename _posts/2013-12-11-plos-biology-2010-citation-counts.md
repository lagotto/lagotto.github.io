---
layout: post
title: "PLOS Biology 2010 Citation Counts"
category: examples
tags: [r, density plot]
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

Citation counts between journal articles vary widely within a journal, making the median (or mean) journal citation count a poor proxy for an individual article. A density plot rather than a histogram was used to better show the right skewed distribution. Source data in CSV format available [here](/data/alm_report_plos_biology_2013-05-20.csv).

![Fig. 1](/images/2013-12-11_figure_1.svg)

**Citation counts for PLOS Biology articles published in 2010.** *Scopus citation counts plotted as a probability distribution for all 197 PLOS Biology research articles published in 2010. Data collected May 20, 2013. Median 19 citations; 10% of papers have at least 50 citations. Originally published as Fig. 1 in [http://dx.doi.org/10.1371/journal.pbio.1001687](http://dx.doi.org/10.1371/journal.pbio.1001687).*

### Source code

```{r 2013-12-11_figure_1, fig.path="images/", fig.show="hold", dev="svg", fig.width=10, fig.height=7, fig.cap="**Figure 1. Citation counts for PLOS Biology articles published in 2010.** Scopus citation counts plotted as a probability distribution for all 197 *PLOS Biology* research articles published in 2010. Data collected May 20, 2013. Median 19 citations; 10% of papers have at least 50 citations.", message=FALSE}
# code for figure 1: density plots for citation counts for
# PLOS Biology articles published in 2010

# load May 20, 2013 ALM report
alm <- read.csv("../data/alm_report_plos_biology_2013-05-20.csv", stringsAsFactors=FALSE)

# only look at research articles
alm <- subset(alm, alm$article_type == "Research Article")

# only look at papers published in 2010
alm$publication_date <- as.Date(alm$publication_date)
alm <- subset(alm, alm$publication_date > "2010-01-01" & alm$publication_date <= "2010-12-31")

# labels
colnames <- dimnames(alm)[[2]]
plos.color <- "#1ebd21"
plos.source <- "scopus"

plos.xlab <- "Scopus Citations"
plos.ylab <- "Probability"

quantile <- quantile(alm[,plos.source], c(.10,.50,.90), na.rm=TRUE)

# plot the chart
opar <- par(mai=c(0.5,.75,0.5,0.5), omi=c(0.25,0.1,0.25,0.1), mgp=c(3,.5,.5), fg="black", cex.main=2, cex.lab=1.5, col=plos.color, col.main=plos.color, col.lab=plos.color, xaxs="i", yaxs="i")

d <- density(alm[,plos.source], from=0, to=100)
d$x <- append(d$x, 0)
d$y <- append(d$y, 0)
plot(d, type="n", main=NA, xlab=NA, ylab=NA, xlim=c(0,100), frame.plot=FALSE)
polygon(d, col=plos.color, border=NA)
mtext(plos.xlab, side=1, col=plos.color, cex=1.25, outer=TRUE, adj=1, at=1)
mtext(plos.ylab, side=2, col=plos.color, cex=1.25, outer=TRUE, adj=0, at=1, las=1)

par(opar)
```

### Reference

Fenner M. What Can Article-Level Metrics Do for You? *PLoS Biology*. Public Library of Science (PLOS); 2013 Oct 22;11(10):e1001687. Available from: http://dx.doi.org/10.1371/journal.pbio.1001687
