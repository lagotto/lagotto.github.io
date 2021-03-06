---
layout: page
title: "Public Library of Science (PLOS)"
---

<!--insert live graph of the sources and number of articles with at least one event-->

<p>At PLOS, we believe that research articles should primarily be judged on their individual merits, rather than on the basis of the journal in which they were published. In March 2009, we inaugurated a program to provide Article-Level Metrics (ALM) on every article across all journals. Article-Level Metrics (ALMs) capture the manifold ways in which research is disseminated and can help users determine the value of an article to them and to their scientific community. The regularly updated data include the following metrics:</p>

<!--insert image of PLOS ALM SUITE, added to Images folder-->
<img src="/assets/plos_alm.png">

<p> The article metrics are made available rapidly after publication and are continually updated. Each source captures different behaviors and thus its natural activity will vary by time (i.e., publication age) and research area of the article. Further discussion of known limitations to individual metrics is detailed in the <a href="#knownIssues">section below</a>.</p>

<p>PLOS is committed to the open provision of these metrics. The entire dataset of all cumulative ALMs are made available as a <a href="ADDLINKHERE">summary file</a>, updated monthly. We also provide an <a href="http://api.plos.org/alm/using-the-alm-api/">API and accompanying documentation</a> for the automatic retrieval of ALM data. </p>

<p>Licensing of PLOS ALM data is under Creative Commons Zero 1.0 Universal Public Domain Dedication <a href="http://creativecommons.org/about/cc0">(CC0)</a>.</p>

<a id="usageInfo" name="usageInfo"></a>
<h2>Viewed</h2>
<p>PLOS provides data on each article for usage activity across the following sites:
<ul>
	<li>PLOS: PLOS articles are provided in three different formats&ndash; page views, PDF downloads, and XML downloads &ndash; and we record the online activity of users across these three formats. This "usage," comprised of the three types, is provided as an aggregate metric or broken down, month-by-month in graphical format. Online usage via the PLOS platform is presented according to industry standard definitions of usage and is COUNTER-compliant. </li>
	<li>Pubmed Central: We also display COUNTER 3-compliant PubMed Central (PMC) usage data for each article. PMC individually counts the number of page views and PDF downloads of the article on their site. The results are only made available to PLOS once a month, not in real-time. As a result, articles may experience a lag with the display of PMC data of up to one month. This will also impact the data shown on recently published articles, which may not show PMC usage data for their first month of publication. The total article usage data displayed on the Metrics Tab is an aggregate of both PLOS and PMC usage.</li>
	<li>figshare: All PLOS figures, tables, and supporting information files are available on figshare. figshare individually counts the views, downloads, and shares on its site. These counts are aggregated individually for each figure and table, but presented as a cumulative number for the supporting information package. The detailed breakdown for the three counts are available on the respective figshared page.</li>
	</ul>

<h4>Considerations</h4>
<p>Online usage data should be interpreted with caution. In general, it is dependent on the age of the article and its subject area. Robot activity may also impact usage data. We comply with COUNTER 3's requirements to exclude its defined list of robots from reports, and we employ more stringent benchmarks with an <a href="http://www.plosone.org/static/robotsFilter"> expanded list of offending robot IP addresses.</a></p>

<p>Robot activity may impact online usage data. PLOS has excluded all that are identified on this growing list, however PMC will be excluding a different list. No robot list is exhaustive and some level of robot usage will undoubtedly remain in the data. Differences in PLOS usage data for article published prior to July 1st, 2005: Usage data reported for these articles is shown as an HTML view but actually represents a "combined" figure made up of the 3 view types. This primarily affects articles published in PLOS Biology and PLOS Medicine. Usage between HTML, PDF and XML view types cannot be separated due to problems with early log files before July 1st, 2005.</p>

<p>PubMed Central usage data: PMC statistics are COUNTER 3-compliant to the extent that they exclude internal use and crawlers/bots, and do not count duplicate requests for HTML pages or PDFs that are made within the limits specified by the standard. They are not compliant in that NLM does not provide usage data by specific IP, user, or organization. PMC began making their usage data available to PLOS on January of 2010. Articles published before then will not have PMC data prior to that date. We receive monthly reports from PMC of the prior month's usage and so there may be a lag in the display of data up to one month's time.</p>

<a id="citationInfo" name="citationInfo"></a>
<h2>Cited</h2>
<p>PLOS provides citation data on each article as computed by the following third-party citation measuring services:
<ul>
	<li><a href="http://www.scopus.com/home.url">Scopus</a></li>
	<li><a href="http://apps.isiknowledge.com/WOS_GeneralSearch_input.do?product=WOS&search_mode=GeneralSearch&SID=2C6GAAHkD75pG3n9e3l&preferencesSaved=&highlighted_tab=WOS">
Web of Science</a></li>
	<li><a href="http://www.pubmedcentral.nih.gov">PubMed Central</a> </li>
	<li><a href="http://www.crossref.org">CrossRef</a>.</li>
</ul>
Each displays a single number (article citations) and links to a landing page containing information related to the citing articles. PLOS also collects data for articles cited in Wikipedia encyclopedia entries. There is no external link for the Wikipedia landing page at this time.</p>

<h4>Considerations</h4>
<p>Citation counts will vary between services, as each draws upon a different database of journals that they index. To attain the most comprehensive view of citations, consult all lists and "de-duplicate" the results. If there are missing citations from one of the sources, please contact the appropriate vendor for more information.</p>

<p>Scopus Citations: Scopus sometimes significantly undercounts the number of citations to a specific article. This is due to the existence of double records in their database for many PLOS articles. Hence, citations are spread across both records. PLOS is working with Scopus to improve their database in this respect, and so Scopus citation counts may increase in the future.</p>

<p>ISI Web of Science&#x24c7; Citations: The Web of Science&#x24c7; count reflects the sum total of citations for an article across all years and all five citations indices in their database. Individual users who search from their account may obtain lower results than the quoted Times Cited count if they do not have full access to the complete suite of ISI Web of Science® databases. To read more about how the ISI Web of Science&#x24c7; counts citing articles, please visit their <a href="http://images.webofknowledge.com/WOK46/help/WOS/hcr_times_cited.html" title="Go to help"> help file.</a></p>

<p>CrossRef Citations: These citations to the article are provided by the CrossRef Cited-by Linking service. The data are limited to journals participating in CrossRef's Cited-by Linking service.</p>

<a id="socialBookmarks" name="socialBookmarks"></a>
<h2>Saved</h2>
<p> Online reference management services - CiteULike and Mendeley - have become common ways for researchers to bookmark papers, collate references, and share sources with their community.  The ALM application captures the number of times the research article in question has been bookmarked by individual researchers or research groups. Each is linked to a landing page that allows users to navigate to other services such as subject tags and other bookmarked articles.</p>

<h4>Considerations</h4>
<p>The CiteULike landing page captures total number of individuals and groups who have added the article to their CiteULike bookmarking account. There may be multiple users attached to each posting on this landing page, and they are found hyperlinked by the article listing. For example, the listing with the description: "posted by UserX along with 2 people and 1 group" will have a total count of 4. The Mendeley count is an aggregate of the number of individuals and groups who have added the article. </p>

<a id="blogCoverage" name="blogCoverage"></a>
<h2>Discussed</h2>
<p>With the establishment of a networked landscape in research, researchers today employ a host of tools from which to share and discuss each other's work. PLOS has integrated the leading channels within these three areas into the ALM data suite to offer a more comprehensive view of the article's impact after publication.</p>

<h4>Blogs</h4>
<p>Blog posts serve as a common dissemination channel for articles published in PLOS journals. To identify and link to them from each article, third party blog aggregators are used:
<ul>
	<li>Nature Blogs</li>
	<li>ScienceSeeker</li>
	<li>Research Blogging</li>
	<li>Wordpress.com</li>
</ul>
For each service, the count reflects the number of blog articles which have discussed the paper and depends on the method of aggregation specific to each service. To attain the most comprehensive picture of how many (and which) blogs cite the article in question, consult all the constitutive lists and de-duplicate repeated entries.

<h4>Social media</h4>
<p>We also track the dissemination activity of articles through Twitter, Facebook, and Reddit. Given the ease and scope of digital propagation, researchers increasingly employ this social channel to recommend and discuss articles. This activity thus represents interest in the article, in a similar manner as usage data and provides insight into the reach of the article.</p>
<ul>
	<li>Twitter: number of tweets which share an article on Twitter, a social networking and microblogging service.</li>
	<li>Facebook: aggregate number of Facebook Likes, "shares," "posts," and "comments" for an article on the largest social network.</li>
	<li>Reddit: aggregate number of posts and comments on the user-generated news links site. The score based on the number of upvotes and downvotes for the post containing the article mention is also included.</li>
	</ul>

<h4>General online activity</h4>
<ul>
	<li>General article coverage: we aggregate the list of external websites that directly link out to PLOS articles. This is a varied set that include the following types of sites: news media, blogs, reference material, institutions, etc. The entire list is available as well as the staff curated selection.</li>
	<li>Encyclopedia: we also collect data for articles discussed in Wikipedia encyclopedia entries. We include references found across the Top 20 Wikipedia language sites and Wikimedia Commons.</li>
	<li>Journal comments: we also track article discussion on the PLOS publishing platform, which allows users to leave Comments about an entire article or specific parts of the article, respectively. Comments cannot be anonymous and must adhere to PLOS's guidelines for commenting</a>. Commentators must declare competing interests (when they exist). PLOS staff monitors all comments. Although we provide information on the number of Comment threads that have been created, each Comment thread may also contain multiple replies, which are not separately counted in the Metrics tab. Under the Comments tab, the full text can be found, accompanied by all replies.</p>
</ul>
<h4>Considerations</h4>
<p>Social media: appropriate use of the social network data types will aid the discovery of related papers as well as reveal the article's readership reach. In collaboration with Cameron Neylon, this <a href="http://vimeo.com/channels/plosconversations/5696434">informational video</a> discusses the power of such metrics as a research and discovery tool.</p>

<p>Twitter: we began collecting tweets for PLOS articles on June 1, 2012, and the Twitter ALM count does not include data prior to this time period. We search and pull tweets based upon the DOI of the article, which is embedded in the article URL. Shortened URLs substantially modify this original URL structure, however. To the extent possible we attempt to reconstruct the long-form, original tweet URL and collect it for display.</p>

<p>Blogs: in many cases, blog authors do not reference the article in a way that allows for automated aggregation, and the aggregating services we link to cover only a selection of all possible blogs. Therefore, there will potentially be many more blogs about an article than these aggregators are able to identify.</p>

<a id="recommended" name="recommended"></a>
<h2>Recommended</h2>
<p>We provide data on sources that capture formal endorsements of PLOS research articles via a platform such as an online recommendation channel. F1000Prime is a directory of recommended articles by their expert team of scientists and clinical researchers in biology and medicine. Each reviewer provides a numerical score to their qualitative evaluation. The metric is the cumulative score from all reviews, received by the recommended article.</p>

<a id="relativeMetrics" name="relativeMetrics"></a>
<h2>Relative Metrics</h2>
<p>PLOS ALM relative metrics are a set of summary statistics aimed to provide context to primary ALM data. These metrics are statistical interpretations of the direct measurements that come directly from each of the ALM sources, and can be used to inform readers of the scope, meaning, and coverage of the primary data. The relative metrics set is still expanding, but at the moment, we offer the following: views-downloads ratio and average usage.</p>

<h4>Views-downloads ratio</h4>
<p>Though the research community engages with the article in numerous ways, the most basic mode is article access ("Usage").  The views-downloads ratio gives readers a view into the level of engagement on this particular dimension, based on the premise that a PDF download denotes expanded consideration of an article.  We divide the HTML views by the PDF downloads to arrive at the percentage of views leading to a download. This ratio automatically normalizes articles by article age. In the event that an external link points directly to an article's PDF download, readers will arrive at the PDF download without creating an imprint on the HTML page. This occurrence will slightly inflate the proportion of downloads and lead to a lower views-downloads ratio.</p>

#### Average Usage

The average usage calculation is a proximate measure of how a paper's total usage compares to the overall usage of a group of related papers.  We define this reference set based on likeness across two dimensions, subject area and age, and then calculate the average from the usage count amongst this group.  We use the median as the measure for central tendency.

We group articles based on age so as to control for large-scale institutional changes in reader behavior over time.  We then group based on the seed article's subject matter, using its first and second level subject categories based on user selection.  From this reference set of related papers, we calculate the average usage on a month-by-month basis.  In this fashion, month X usage of the focal article is compared directly to the average usage for month X usage of all papers in its cohort and controls for the small variations in publication age amongst this set.  Results are displayed as a line overlaid on the historical cumulative usage chart of the seed article.

#### Considerations

The context provided in the average usage is limited to the PLOS corpus as usage data is not widely available beyond PLOS journals at the moment.  We begin displaying the average usage three months after an article's publication date to ensure there is sufficient data to compute a summary statistic.  Due to the average usage methodological design, which groups articles based on publication year, an article may display a curtailed line depending on its publication date relative to the calendar year.  Younger articles will reach a point in which they have been fully calculated and no longer have data to contribute to the monthly calculation.  We cease to calculate the average usage at the point in which the first article drops out of the reference set.  In the event that a reference set does not meet the minimum size for statistical significance (less than 25 articles) or usage data availability disruptions occur for an article in the reference set, the average usage is not computed.  In the former, we suppress the subject category so that it is does not appear as a selection item.  This situation may arise in certain niche subject areas that are not frequently covered.   In the latter, the average usage line will be displayed up to the point in which such event occurs.

## Discontinued metrics
PLOS no longer collects data from the following discontinued services:

* Postgenomic
* Bloglines
* Connotea
* Biodiversity Hub
