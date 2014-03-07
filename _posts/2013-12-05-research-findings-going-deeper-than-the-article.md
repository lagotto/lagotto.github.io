---
layout: post
title: "Research findings: going deeper than the article"
category: blog
authors:
 - surname: Lin
   given-names: Jennifer
   email: jlin@plos.org
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

We have recently released two new Article-Level Metrics (ALM) data
sources: **Europe PMC Database Citations** and **DataCite**. The data
from both sources are displayed on the metrics tab of PLOS articles, are
available through the [PLOS ALM
API](http://api.plos.org/alm/using-the-alm-api/), and are available to
all users of the [open source ALM
application](https://github.com/articlemetrics/alm). These new sources
are both related to research data, and they represent a new breed of
metrics in our ALM suite.

Not only are **Europe PMC Database Citations** and **DataCite** our
first ALM sources that track research data that mention a particular
PLOS article. But these ALM sources are also different from other ALM
sources: although there can of course be additional research data that
cite an article post-publication*,* they typically link datasets
associated with an article and created by the same research
group.* *These ALM sources discover links *from the research data to the
article* and in an ideal world should be consistent with the links *from
the article to the research data*. Unfortunately we know from the work
by Jo McEntyre and others at Europe PMC (see the May 2013 [PLOS ONE
article by Kafkas et
al](http://dx.doi.org/10.1371/journal.pone.0063184).) that the overlap
between *article-to-database* citations and *database-to-article*
citations is surprisingly small.

PLOS and other publishers should of course do a better job helping
authors to properly cite research data in their submitted manuscripts,
and the recently published [Draft Declaration of Data Citation
Principles](http://codata.org/blog/2013/11/25/data-citation-synthesis-group-draft-declaration-of-data-citation-principles/)
are an excellent starting point. But providing the links from
database-to-article as ALM can also increase the visibility of datasets
associated with an article. We know of course that we are not the first
publisher to do this, earth and environmental sciences research data
deposited in the Pangaea data archive and cited in Elsevier articles
[were highlighted since 2009](http://wiki.pangaea.de/wiki/Elsevier)
using a similar mechanism – taking advantage of the database-to-article
link provided by the DataCite DOI service.

## Europe PMC Database Citations

[Europe PubMed Central](http://europepmc.org) is a service of the Europe
PMC Funders’ Group working in partnership with the European
Bioinformatics Institute, University of Manchester and the British
Library in cooperation with the National Center for Biotechnology
Information at the U.S. National Library of Medicine (NCBI/NLM). Europe
PMC is not only hosting many important databases in the life sciences in
collaboration with PubMed and others – e.g., UniProt, Protein Data Bank
(PDB), and the European Nucleotide Archive (ENA) – but is also
extracting the citations to journal articles in these datasets and makes
them available via a public API. We harvest these citations in aggregate
form and incorporate them into our newly expanded suite of ALMs. As with
all ALMs (to the extent allowable by source), we link out to Europe PMC
so that users can access the data from the source.

The [methylthiotransferase protein
entry](http://www.uniprot.org/uniprot/I0XPC4?europe_pmc_bio_extredirect_Proteins=http://www.uniprot.org/uniprot/I0XPC4)
in the UniProtKB/TrEMBL database cites a [PLOS NTD
publication](http://www.plosntds.org/article/info%3Adoi%2F10.1371%2Fjournal.pntd.0001853).

[![Europe PMC DB citation example](/assets/ExDBCite-1024x544.png)](http://www.uniprot.org/uniprot/I0XPC4?europe_pmc_bio_extredirect_Proteins=http://www.uniprot.org/uniprot/I0XPC4)

Different public databases will have varying levels of metadata
available and interconnecting links from data to published results.
EMBL’s European Nucleotide Archive is a good way forward as you can see
in this example taken from the [Mycobacterium tuberculosis
genome](http://www.ebi.ac.uk/ena/data/view/HE663067?europe_pmc_bio_tm_extredirect_Data_Citations=http://www.ebi.ac.uk/ena/data/view/HE663067)
.

![ENA Example](/assets/ExamplePMCEuropeLink.png)

## DataCite

[DataCite](http://www.datacite.org/) is a DOI registration agency with
the aim to *establish easier access to research data on the Internet*
and to *increase acceptance of research data as legitimate, citable
contributions to the scholarly record.*Although DataCite focuses on
research data, they provide DOIs for all forms of content, e.g. [PeerJ
Preprints](https://peerj.com/preprints/) or all non-publisher content on
[Figshare](http://figshare.com). Most people are familiar with CrossRef
DOIs, but they are not the only DOI registration agency (see Geoff
Bilder’s September [blog
post](http://crosstech.crossref.org/2013/09/dois-unambiguously-and-persistently-identify-published-trustworthy-citable-online-scholarly-literature-right.html)
for more background info). CrossRef and DataCite do of course
collaborate, e.g. in [DOI content
negotiation](http://crosscite.org/cn/).

We have provided CrossRef ALM for a very long time, and have now added
DataCite as ALM source. The [DataCite metadata
schema](http://schema.datacite.org/) is different from CrossRef’s: we
are searching the *relatedIdentifier* metadata for PLOS DOIs and as of
today we find 240 DataCite DOIs related to PLOS papers. Similar to the
Europe PMC Database Links, most of these datasets are associated with a
paper and submitted by the same research group. Most DataCite DOIs
linking to PLOS papers are from datasets deposited into the
[Dryad](http://datadryad.org/) data repository (disclaimer: Martin is a
member of the Dryad Board), followed by
[Pangaea](http://www.pangaea.de/).

The 2011 paper by Jonathan Eisen et al., [Stalking the Fourth Domain in
Metagenomic Data](http://dx.doi.org/10.1371/journal.pone.0018011), has
underlying data deposited in Dryad, which is a member repository and is
thus [linked in
DataCite](http://search.datacite.org/ui?q=relatedIdentifier:10.1371%2Fjournal.pone.0018011).
Alternatively, we can see that [the “Biogeochemical measurements
associated to deep-sea wood
falls” dataset](http://data.datacite.org/10.1594/PANGAEA.802516) is a
supplement to the [2013 Antje Boetius, et. al
paper](http://dx.doi.org/10.1371/journal.pone.0053590) and is cited as
supporting data which informed the research conclusions published. Both
PLOS papers also link to the dataset(s) using the DataCite DOI in the
M*aterials and Methods* section, as recommended by the [PLOS Editorial
Policies](http://www.plosone.org/static/editorial#sharing).

## Linking Research Data and Journal Articles (and People)

We made a conscious decision to display both of these data-related ALMs
in the Citations category. The [Draft Declaration of Data Citation
Principles](http://www.force11.org/datacitation) states that*Data
citations should be accorded the same importance in the scholarly record
as citations of other research objects, such as publications.*We think
that the inverse is also true, i.e. citations of publications by
datasets should have the same importance in the scholarly record and
should be grouped together with citations by other publications. Data
citation in both directions can enable easy reuse and verification of
data, allow the impact of data to be tracked, and create a scholarly
structure that recognizes and rewards data producers.

As a publisher, we call for a dedicated space on the article to
seamlessly link to the public repositories where the data are available.
At PLOS, there is much work to do as this [example from Jonathan Eisen,
et
al](http://www.plosone.org/article/comments/info%3Adoi%2F10.1371%2Fjournal.pone.0041389)clearly
demonstrates. Eisen has diligently [catalogued all the datasets from
this paper on his own
blog.](http://phylogenomics.wordpress.com/data/phylogenomics-of-halophiles-data-from-lynch-et-al-2012/)
But few researchers have employed this practice. More importantly, we
need to display and preserve this information as part of the published
record.

The careful observer will have noted that the two example articles by
Jonathan Eisen and Antje Boetius mentioned above also have citations by
other
publications ([here](http://europepmc.org/abstract/MED/21437252#fragment-related-citations) and [here](http://europepmc.org/abstract/MED/23301092#fragment-related-citations)) that
are tracked in **Europe PMC Citations**, another new ALM source. And
that Europe PMC links to their ORCID author identifier
([here](http://orcid.org/0000-0002-0159-2197) and
[here](http://orcid.org/0000-0003-2117-4176)). To go full circle they
can use the [DataCite/ORCID integration
tool](http://datacite.labs.orcid-eu.org/) to also import their Dryad or
Pangaea datasets into their ORCID profile, and then can use [ORCID
content negotiation](http://feed.labs.orcid-eu.org) (disclaimer: Martin
was involved in the development of both ORCID tools) to automatically
generate a [RSS
feed](http://feed.labs.orcid-eu.org/0000-0002-0159-2197.rss) or BibTeX
reference manager file of all their publications and datasets.

In this light, we anticipate that the upcoming Data Literature
Integration Workshop at EMBL-EBI headed by Jo McEntyre, Thomas
Lemberger, and Ewan Birney on December 10-11, 2013 will address many of
the much-needed issues applicable across our community and lay down
better practices for handling data-publication interactions.