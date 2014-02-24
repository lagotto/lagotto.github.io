---
layout: post
title: "Views vs. Citations for PLOS Biology Articles"
category: examples
tags: [r, bubblechart, counter, scopus]
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

Bubble charts can help visualize a large set of articles, e.g. all articles published by a journal in a given year. Source data in CSV format available [here](/data/alm_report_plos_biology_2013-05-20.csv).

![Fig. 3](/images/2013-12-11_figure_3.svg)

**Figure 3. Views vs. citations for PLOS Biology articles published in 2010.** *All 304 PLOS Biology articles published in 2010. Bubble size correlates with number of Scopus citations. Research articles are labeled green; all other articles are grey. Red arrows indicate the two most highly cited papers. Data collected May 20, 2013. Originally published as Fig. 3 in [http://dx.doi.org/10.1371/journal.pbio.1001687](http://dx.doi.org/10.1371/journal.pbio.1001687).*

### Source code

```{r 2013-12-11_figure_3, fig.path="images/", fig.show="hold", dev="svg", fig.width=10, fig.height=7, fig.cap="**Figure 3. Views vs. citations for PLOS Biology articles published in 2010.** All 304 *PLOS Biology* articles published in 2010. Bubble size correlates with number of Scopus citations. Research articles are labeled green; all other articles are grey. Red arrows indicate the two most highly cited papers. Data collected May 20, 2013.", message=FALSE}
# code for figure 3: Bubblechart views vs. citations for
# PLOS Biology articles published in 2010.

# Load required libraries
library(plyr)

# load May 20, 2013 ALM report
alm <- read.csv("../data/alm_report_plos_biology_2013-05-20.csv", stringsAsFactors=FALSE, na.strings=c("0"))

# only look at papers published in 2010
alm$publication_date <- as.Date(alm$publication_date)
alm <- subset(alm, alm$publication_date > "2010-01-01" & alm$publication_date <= "2010-12-31")

# make sure counter values are numbers
alm$counter_html <- as.numeric(alm$counter_html)

# lump all papers together that are not research articles
reassignType <- function(x) if (x == "Research Article") 1 else 0
alm$article_group <- aaply(alm$article_type, 1, reassignType)

# calculate article age in months
alm$age_in_months <- (Sys.Date() - alm$publication_date) / 365.25 * 12
start_age_in_months <- floor(as.numeric(Sys.Date() - as.Date(strptime("2010-12-31", format = "%Y-%m-%d"))) / 365.25 * 12)

# chart variables
x <- alm$age_in_months
y <- alm$counter
z <- alm$scopus

xlab <- "Age in Months"
ylab <- "Total Views"

labels <- alm$article_group
col.main <- "#1ebd21"
col <- "#666358"

# calculate bubble diameter
z <- sqrt( z / pi )

# calculate bubble color
getColor <- function(x) c("#c9c9c7", "#1ebd21")[x+1]
colors <- aaply(labels, 1, getColor)

# plot the chart
opar <- par(mai=c(0.5,.75,0.5,0.5), omi=c(0.25,0.1,0.25,0.1), mgp=c(3,.5,.5), fg="black", cex=1, cex.main=2, cex.lab=1.5, col="white", col.main=col.main, col.lab=col)

plot(x, y, type = "n", xlim=c(start_age_in_months,start_age_in_months+13), ylim=c(0,60000), xlab=NA, ylab=NA, las=1)
symbols(x, y, circles=z, inches=exp(1.3)/15, bg=colors, xlim=c(start_age_in_months,start_age_in_months+13), ylim=c(0,ymax), xlab=NA, ylab=NA, las=1, add=TRUE)
mtext(xlab, side=1, col=col.main, cex=1.25, outer=TRUE, adj=1, at=1)
mtext(ylab, side=2, col=col.main, cex=1.25, outer=TRUE, adj=0, at=1, las=1)

par(opar)
```

### Reference

Fenner M. What Can Article-Level Metrics Do for You? *PLoS Biology*. Public Library of Science (PLOS); 2013 Oct 22;11(10):e1001687. Available from: http://dx.doi.org/10.1371/journal.pbio.1001687
