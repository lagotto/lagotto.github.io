---
layout: post
title: "Most cited 2014 articles on Wikipedia"
category: examples
tags: [d3.js, signpost, wikipedia]
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

<p id="example" data-api_key="64aJra4M7NPHVAWxxCZ5">Although we need access to the article metadata for complex queries, we can retrieve a set of most-recent or most-cited articles via the ALM API. The following Wikipedias were covered: English, Dutch, German, Swedish and French. This is not a complete set of 2014 articles, and some articles were published in 2013. Data generated live from <a href="http://alm.labs.crossref.org">alm.labs.crossref.org</a>.</p>

<div id="example"></div>

<script src="/js/cited2.js"></script>

### Source code

```javascript
var data;
var api_key = d3.select("p#example").attr('data-api_key');
var query = "http://alm.labs.crossref.org/api/v5/articles?api_key=" + api_key;
query += "&order=wikipedia";

d3.json(query, function(error, json) {
  data = json["data"];

  if (data.length == 0) {
    d3.select("div#example").text("")
      .insert("div")
      .attr("class", "alert alert-info")
      .text("No articles found");
    return;
  }

  formatDate = d3.time.format("%B %d, %Y");
  var formatFixed = d3.format(",.0f");

  for (var i=0; i<5; i++) {
    article = data[i];

    d3.select("div#example").append("h4")
      .attr("class", "article")
      .append("a")
      .attr("href", function(d) { return "http://alm.labs.crossref.org/articles/info:doi/" + article["doi"]; })
      .text(article["title"]);
    d3.select("div#example").append("p")
      .text(iso8601ToDate(article["publication_date"]) + ". ")
      .append("a")
      .attr("href", function(d) { return "http://dx.doi.org/" + article["doi"]; })
      .append("text")
      .text("http://dx.doi.org/" + article["doi"]);
    d3.select("div#example").append("p")
      .text(signpostsToString(article));
  };

  function iso8601ToDate(iso8601_string) {
    date = new Date(iso8601_string);
    return formatDate(date).replace(/\b0(?=\d)/g, '');
  }

  function signpostsToString(article) {

    source = article["sources"].filter(function(d) { return d.name == "wikipedia" })[0];
    a = [source.display_name + ": " + formatFixed(source.metrics.total)];
    var b = []
    if (article["viewed"] > 0) b.push("Viewed: " + formatFixed(article["viewed"]));
    if (article["cited"] > 0) b.push("Cited: " + formatFixed(article["cited"]));
    if (article["saved"] > 0) b.push("Saved: " + formatFixed(article["saved"]));
    if (article["discussed"] > 0) b.push("Discussed: " + formatFixed(article["discussed"]));
    a.push(b.join(" • "));
    return a.join(" | ");
  }
});
```
