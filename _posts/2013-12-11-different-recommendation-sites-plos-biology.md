---
layout: post
title: "Different Recommendation Sites for PLOS Biology Articles"
category: examples
tags: [r, wikipedia, f1000]
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

There is relatively little overlap between the PLOS Biology research articles recommended by F1000Prime and those articles mentioned in Wikipedia, indicating different audiences. Source data in CSV format available [here](/data/alm_report_plos_biology_2013-05-20.csv).

![Fig. 5](/images/2013-12-11_figure_5.svg)

**PLOS Biology articles: sites of recommendation and discussion.** *Number of PLOS Biology research articles published up to May 20, 2013 that have been recommended by F1000Prime (red) or mentioned in Wikipedia (blue). Originally published as Fig. 5 in [http://dx.doi.org/10.1371/journal.pbio.1001687](http://dx.doi.org/10.1371/journal.pbio.1001687).*

### Source code

```{r 2013-12-11_figure_5, fig.path="images/", fig.show="hold", dev="svg", fig.width=5, fig.height=5, fig.cap= "**Figure 5. PLOS Biology articles: sites of recommendation and discussion.** Number of *PLOS Biology* research articles published up to May 20, 2013 that have been recommended by F1000Prime (red) or mentioned in Wikipedia (blue).", message=FALSE}
# code for figure 5: Venn diagram F1000 vs. Wikipedia for PLOS Biology articles

# load required libraries
library("plyr")
library("VennDiagram")

# load May 20, 2013 ALM report
alm <- read.csv("../data/alm_report_plos_biology_2013-05-20.csv", stringsAsFactors=FALSE)

# only look at research articles
alm <- subset(alm, alm$article_type == "Research Article")

# group articles based on values in Wikipedia and F1000
reassignWikipedia<- function(x) if (x > 0) 1 else 0
alm$wikipedia_bin <- aaply(alm$wikipedia, 1, reassignWikipedia)
reassignF1000 <- function(x) if (x > 0) 2 else 0
alm$f1000_bin <- aaply(alm$f1000, 1, reassignF1000)
alm$article_group = alm$wikipedia_bin + alm$f1000_bin
reassignCombined <- function(x) if (x == 3) 1 else 0
alm$combined_bin <- aaply(alm$article_group, 1, reassignCombined)
reassignNo <- function(x) if (x == 0) 1 else 0
alm$no_bin <- aaply(alm$article_group, 1, reassignNo)

# remember to divide f1000_bin by 2, as this is the default value
summary <- colSums(subset(alm, select=c("wikipedia_bin","f1000_bin","combined_bin","no_bin")), na.rm=TRUE)
rows <- nrow(alm)

# options
plos.colors <- c("#c9c9c7","#0000ff","#ff0000")

# plot the chart
opar <- par(mai=c(0.5,.75,3.5,0.5), omi=c(0.5,0.5,1.5,0.5), mgp=c(3,.5,.5), fg="black", cex.main=2, cex.lab=1.5, col=plos.color, col.main=plos.color, col.lab=plos.color, xaxs="i", yaxs="i")

venn.plot <- draw.triple.venn(area1=rows,area2=summary[1],area3=summary[2]/2,n12=summary[1],n23=summary[3],n13=summary[2]/2,n123=summary[3],euler.d=TRUE,scaled=TRUE,fill=plos.colors,cex=2,fontfamily = rep("sans", 7))

par(opar)
```

### Reference

Fenner M. What Can Article-Level Metrics Do for You? *PLoS Biology*. Public Library of Science (PLOS); 2013 Oct 22;11(10):e1001687. Available from: http://dx.doi.org/10.1371/journal.pbio.1001687
