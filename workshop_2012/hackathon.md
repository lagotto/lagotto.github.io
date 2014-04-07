---
layout: page
title: "ALM Workshop 2012 - Altmetrics Hackathon"
published: true
---

<div><strong><span style="font-size: medium;">Altmetrics Hackathon Overview</span></strong></div>
<div></div>
<div>To close the PLOS ALM Workshop, PLOS &amp; ImpactStory co-sponsored the Altmetrics Hackathon on November 3, 2012.</div>
<div></div>
<br>
<div><strong>Description:</strong>
<div>The purpose of the event was to bring the research community together to articulate concrete problem areas for altmetrics.  Together, we worked with developers to seed technical solutions and raised awareness of the pressing need for expanded altmetrics tool development.</div>
<div>The list of registrants can be found on the <a href="http://altmetricshackathon2012.eventbrite.com/">Invitation and Registration Page.</a>
</div>
<div></div>
<br>
<div><strong>Purpose and Aims</strong>:
<ul>
	<li>Identify Problems: Convene the community to articulate and concretize technical issues and challenges in the application of altmetrics data</li>
	<li>Collaborate (hack): Explore and begin building solutions for these needs -</li>
<ul>
	<li>Improve existing applications: PLOS ALM, ImpactStory, ScienceCard</li>
	<li>Make new standalone applications</li>
	<li>Work on something that integrates the different ALM apps, e.g. a source interesting to all of them, a mashup with data from different tools</li>
</ul>
	<li>Raise Awareness: Seed concrete ideas and raise awareness amongst the user groups (funders, publishers, researchers, administrators) of the potential for tools to -</li>
<ul>
	<li>Advance adoption of altmetrics within each target group and across research ecosystem</li>
	<li>Address specific pain/friction points which lower barriers to adoption of altmetrics use cases</li>
</ul>
</ul>
<div></div>
</div>

<div>Full listing of application ideas board, development resources, attendees interests can be found <a href="http://tinyurl.com/covnyjv">here</a>.</div>
<h2>Final projects</h2>
<div>
<ul>
	<li><strong><a href="#rerank">ReRank It</a></span></strong></li>
	<li><strong><a href="#altviz">AltViz</a></span></strong></li>
	<li><strong><a href="#author">Author Centrality Measure</a></span></strong></li>
	<li><strong><a href="#onearticle">One Article, Many URLs</a></span></strong></li>
	<li><strong><a href="#altgaming">AltGaming</a></span></strong></li>
</ul>
</div>
<div></div>
<div></div>
&nbsp;
<div><strong><a name="rerank"></a>Project I: ReRank It*</strong></div>
<div>ReRank allows you to rank your pubmed search results based on the impact they have had. This allows you to see which of the articles have produced the most discussion, been cited the most or have been recommended by academics.</div>
<div></div>
<div>
<div>Application: <a href="http://rerank.it/">http://rerank.it/</a></div>
<div>Source code: <a href="https://github.com/dweebit/rerankit">https://github.com/dweebit/rerankit</a></div>
<div>ImpactStory Javascript API: <a href="https://github.com/phayes/impactstory.js">https://github.com/phayes/impactstory.js</a></div>
<div>
<ul>
	<li>Paul Groth</li>
	<li>Mark  Hahnel</li>
	<li>Patrick Hayes</li>
	<li>Jack LaBarba</li>
	<li>Jason Priem</li>
</ul>
</div>
<div><em>* Voted winner of the Audience Award at the end of the hackday.</em></div>
<div></div>
<br>
<div><strong><a name="altviz"></a>Project II: AltViz</strong></div>
<div></div>
<div>The altviz (altmetrics visualization) group worked on better ways to visualize altmetric data at various levels (single article, multiple articles). Our goal was to find ideal ways to present the data in a non-interactive way (so it could easily be embedded into a variety of platforms).</div>
<div></div>
<div><a href="https://github.com/karthikram/almviz/tree/master/data">Data sets</a> are available in the git repository:</div>
<div>
<ul>
	<li><a href="https://github.com/karthikram/almviz/blob/master/data/single_article.csv">single article.csv</a></li>
	<li><a href="https://github.com/karthikram/almviz/blob/master/data/many_articles.csv">many articles.csv</a></li>
	<li><a href="https://github.com/karthikram/almviz/blob/master/data/alm_report_2012-10-10.csv">alm report 2012-10-10</a>.</li>
</ul>
</div>
<div></div>
<div>
<div>We discussed a variety of chart formats including sunburst plots, heat maps, dot charts, tree maps among several others and settled on two versions to implement during the hackathon.</div>
<div></div>
<div><strong>Multiple article metrics: </strong></div>
<div>For multiple articles, we decided to work on trying to improve bubble charts, and see if we could find meaningful trends when visualizing large number of articles (&gt; 100).  Although we found some interesting patterns, it was difficult to make sense of large datasets (in our case ~2000 articles). One version we implemented was using heat maps to look at article metrics across different PLOS journals (all from the same funder) on a scale of months.</div>
<div></div>
<div><strong>Single article metrics:</strong></div>
<div>For single articles, we decided that using spark lines might be a powerful yet minimalist representation to visualize metrics. When stacked for multiple articles, it provides a quick visual way to compare metrics across articles. We implemented spark lines using a jquery plugin called <a href="http://benpickles.github.com/peity/">Piety</a>. A quick demo is available on our group's web page. In the short time we had, we also implemented a wordpress plugin for the Piety spark lines visualization for tweets and downloads. &lt;example link&gt;</div>
</div>
<div>
<ul>
	<li>Juan Alperin</li>
	<li>Carl Boettiger</li>
	<li>Martin Fenner</li>
	<li>Mahboob Imtiyaz</li>
	<li>Karthik Ram</li>
	<li>Matt Senate</li>
	<li>Nina Stoletzki</li>
</ul>
</div>
<div>Code: <a href="https://github.com/jalperin/almviz">https://github.com/karthikram/almviz</a></div>
<div>Web page:<a href="http://karthikram.github.com/almviz/"> http://karthikram.github.com/almviz/</a></div>
<div></div>
<div><strong>
</strong></div>
<br>
<div><strong><a name="author"></a>Project III: Author Centrality Measure</strong></div>
<div>
<div></div>
<div>
<div>Metrics to assess scientific output have traditionally focused on highly indirect metrics such as journal impact factors. Article-level metrics are a critical step forward as they focus on a meaningful unit - the paper - but do not provide a solution to the problem of assessing a scientists overall output. The purpose of this project was to develop such a metric.</div>
<div></div>
<div>Inspired by the WAR ("Wins above replacement") metric used in baseball and other sports to determine the impact of adding/removing a single player to/from a team, we have constructed the author credit problem as a measure of the impact of having a particular scientist on a paper. We construct a linear model where authors and journals are binary variables that predict the number of citations a paper receives and derive coefficients for each term over the scientific corpus. The "weight" assigned to each scientist is the the average number of citations added - the impact - of having "Charles Darwin" contribute to a paper.</div>
<div></div>
<div>Our proof-of-principle implementation, pulled ALM data from the PLOS ALM API, shows that even middle authors add value. Devin Scannell was involved in this project.</div>
<div></div>
</div>
</div>
<br>
<div>
<div><strong><a name="onearticle"></a>Project IV: One article, many URLs</strong></div>
<div>The altmetrics effort to track the dissemination of research is currently impeded by the existence of multiple referral URLs for each single artifact.  Additionally, no standard naming convention exists across publishers for those which they publish.  This group followed example articles across journals via its article identifier (DOI) and recorded the proceeding referrer URLs across multiple dissemination channels.  This dataset will support altmetrics providers’ effort to more effectively capture these traces.</div>
<div></div>
<div>Data: <a href="https://docs.google.com/spreadsheet/ccc?key=0Aqx2YcmBjqvbdE4xTFk4U05xRFBaSGZEZHpmOTZTZnc#gid=0">https://docs.google.com/spreadsheet/ccc?key=0Aqx2YcmBjqvbdE4xTFk4U05xRFBaSGZEZHpmOTZTZnc#gid=0</a></div>
<div>
<ul>
	<li>Anna Daniel</li>
	<li>Nettie Lagace</li>
	<li>Heather Piwowar</li>
	<li>Xenia van Edig</li>
	<li>Alicia Woodleigh</li>
</ul>
With additional contributions from Tim McCormick, Patrick Hayes, and others.
<div></div>
<div></div>
</div>
</div>
<br>
<div><strong><a name="altgaming"></a>Project V: AltGaming - aka - BatSignal</strong></div>
<div><strong>Background to our back</strong></div>
<div>One of the topics that got quite a bit of discussion at the workshop was the topic of gaming of ALMs. We are still in a domain with respect to ALMs that gaming has not become a serious issues. Over the course of the meeting only one specific example of gaming of pdf downloads, wrt to <a href="http://www.ssrn.com/">SSRN</a>was alluded to. Nonetheless, as more people discuss ALMs the question on what to do about them comes up every now and again. In the session during the workshop we came up with 6 strong technical ideas for addressing this issue. Probably the biggest insight in the workshop was that for consumers of ALMs, such as funders, all they want to know is that the data you are providing is reliable. It’s probably even better to not even mention gaming, one should simply be in a position to be able to give assurances around data quality.</div>
<div>

<img alt="" src="https://lh6.googleusercontent.com/-LAFN-sdiADQ/UJdEX3WDWdI/AAAAAAAAqGM/ucbIQhRv3jw/s1063/20121101-IMG_2926.jpg" height="50%" />The 6 technical ideas that came out of the workshop were:
<ol>
	<li>UK - 3rd party (I have no idea what that means)</li>
	<li>Provide provenance, and the ability for consumers to run the data themselves</li>
	<li>Crowdsource detection of fraud</li>
	<li>Have proprietary anti-gaming strategies, so cheaters don’t know how to cheat.</li>
	<li>Look for trend and event detection algorithms that could signal the possibility of something dodgy.</li>
	<li>Create a shared blacklist amongst ALM providers.</li>
</ol>
&nbsp;

It was also suggested that in terms of strategies for looking for problems in the data, we should do the simplest dumbest thing first. We might also organise a hackathon specifically pitching one team against another, with one team out to break some metric, and the other team set to defend the metric, as a way of stress testing the system.

When it came to the day of the hackathon there were enough people interested in the general topic that we decided to have a go at something. We only had a few hours, so we decided to pick a simple atomic example of trying to find a signal in the data. There was a lot of discussion around whether this would be useful, if we didn’t initially know what that signal would represent, and that is a fair point, however there was sufficient interest to give it a go.

The idea is that changes in altmetrics activity express the changing levels of interest in a research artefact. The specific pattern of activity depends on the metric being considered (e.g., journal page views, Tweets, bookmark, etc.). Spikes in activity are of interest as they may indicate either sudden interest in a paper (e.g., mainstream news coverage, prize awarded to an author) or manipulation of metrics (i.e., gaming). We wanted to get some data, apply a tool suitable for detecting a signal, and show that such a tool could be used with altmetric data. We were then going to visualise the events. We felt that a working demo could be extended to a more generally applicable tool for the whole ALM community.
<br>
<strong>What we did</strong>
To begin, we packaged the data to construct time sequence vectors for each of our sample articles, a subset of 2000 articles in the PLOS corpus. We then identified a set of possible approaches to evaluate the data: hidden or semi-hidden Markov models, switching Poisson (SP) process, Rank Surprise method, etc. The most recent applications are capable of adaptive event detection by incorporating Bayesian learning to Poisson models. We didn’t have much time, and after identifying a set of algorithms that might do the job for us, we did a search for ready to hand implementations in R. We found a recently released <a href="http://cran.r-project.org/web/packages/bursts/index.html">R package that applies Kleinberg’s burst detection algorithm</a>, and given that was available we decided to apply that. The data we had prepared was not in exactly the right format, so we wrote one more data processing step to wrangle the data a bit more, and we ran the algorithm on some real data.

<img alt="" src="https://lh5.googleusercontent.com/-gEVChjytyI8/UJdEyzimduI/AAAAAAAAqKc/pP4rv0uXhtI/s860/20121103-P1100604.jpg" height="50%" />
<br>
<strong>Results</strong>
We hoped to find a sampling of bursts then to visualize in order to study the spike train and its event arrival intervals. No bursts were identified from our data set when we implemented the program. Whether this was due to the technical implementation of the algorithm; the data; or the suitability of the algorithm, we need to conduct further preliminary work such as testing this model with a simpler method that examines the variance of article activity change across the corpus. We hope to continue to build an open source, automatic ALM burst detection tool that can be used across altmetrics providers.

<strong>Resources</strong>

The code we generated is on <a href="https://github.com/SChamberlain/altgaming">github</a>. We used the literature in the <a href="http://www.mendeley.com/groups/2732131/burst-detection/">Mendeley burst detection group</a> to help focus on algorithms that might help. The data sets that we generated are in a <a href="https://www.dropbox.com/sh/wrev1s6ryex8ib5/KjzcPDk7m6">dropbox folder</a>. We generated one <a href="https://www.dropbox.com/s/76fq0jb17oqz6mq/dataset_larger.zip">large dataset</a> that can be used for testing algorithms against, however it will need to be converted into time series sub-data sets.

<strong>Some Takeaways</strong>

A lot of our time during the hack was spent getting data. In the end we had about three data sets floating around, with some differences in the scale of time that they covered, and the sources of information that were in them. A lot time was spent manipulating the data to generate a time series set in the right format for the algorithm we wanted to run, and we also ran into a few limitations of the API. One outcome is that our work picked up a bug in the PLOS ALM API which is now being fixed!

It was fun working in a small group, I’ve previously been involved in a couple of hackathons where I ended up working on my own ideas, still fun, but not as much fun.

Even with a really tightly focussed group, with the number of data sets that we had, we kept talking cross purposes about what was, or was not, in a specific data set. Communication is hard!!

We applied a state of the art algorithm, and ran into some difficulty because we didn’t really understand the domain of applicability of the algorithm. but from my own personal point of view, even though we didn’t

In terms of being productive at a hackathon, I think next time have a data set in the format you want it in, or an API in the format you want it in, leaves you in a better starting position, so either get the data ready before hand, or restrict the scope of what you are going to do, to ideas that interface really well with the format of the data that you have to hand.

<strong>What's next?</strong>

We could see, in an infamous paper about bats, that there were a couple of clear spikes of attention, so we know, a-priori, that there are events that show up in the kind of data that we have access to. We know that it would be interesting to be able to automate both the retrospective discovery of these kinds of events, and the ability to analyse a live stream of signals to see upticks in activity. We know that there are a bunch of algorithms out there that are well tuned to this task, so there is good scope to iterate on this work and set up some nice clean stream data, and some data work-flows for generating this kind of data from available APIs, while at the same time finding a suite of algorithms to toss the data at. At the same time there was a lot of discussion around how to understand the context of ALM numbers, or events, and we need to keep an eye on what it all means, and whether the events we might be able to pick up can be related to things happening in the real world.

<em>(As a personal aside, I’ve been interested in Kleinberg’s algorithm since about 2007, but I never had the mathematical chops to code up my own version of the algorithm, and I never got the perl version to run, so I was delighted to find a package that I could try out, even if, in the end, it didn’t work. - Ian).</em>
<ul>
	<li><a href="https://twitter.com/recology_">Scott Chamberlain</a></li>
	<li><a href="http://www.plos.org/staff/jennifer-lin/">Jennifer Lin</a></li>
	<li><a href="http://www.mulvany.net">Ian Mulvany</a></li>
	<li><a href="http://www.linkedin.com/pub/brian-naughton/2/505/975">Brian Naughton</a></li>
	<li><a href="http://nitens.org/taraborelli/home">Dario Taraborelli</a></li>
</ul>
</div>
</div>
<div></div>
<div></div>