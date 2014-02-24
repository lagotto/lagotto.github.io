---
layout: post
title: "Articles with Events from 10,000 Random DOIs"
category: examples
tags: [d3.js, barchart]
authors:
 - surname: Fenner
   given-names: Martin
   orcid: http://orcid.org/0000-0003-1419-2405
   email: mfenner@plos.org
---

<p id="example1" data-api_key="qzcE4ciMj438fLPqyRdE">Total number of articles with at least one event, using 10,000 random CrossRef DOIs from 2011 and 2012. This chart gives a good first impression of what percentage of articles that will have metrics from a paticular data source. Data generated live from <a href="http://almhack.crowdometer.org">almhack.crowdometer.org</a>. More info at <a href="/2013/10/31/alm-data-challenge-metrics-for-a-standard-set-of-dois/">this blog post.</a></p>

<div id="example1"></div>

<script src="/js/random_events.js"></script>

### Source code

```javascript
var data;
var colors = ["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#95a6a6"];
var api_key = d3.select("p#example1").attr('data-api_key');

var l = 200; // left margin
var r = 100; // right margin
var w = 600; // width of drawing area
var h = 36;  // bar height
var s = 2;   // spacing between bars

d3.json("http://almhack.crowdometer.org/api/v5/sources?api_key=" + api_key, function(error, json) {
  data = json["data"];

  var formatFixed = d3.format(",.0f");

  // remove source not needed for the following visualizations
  data = data.filter(function(d) { return d.name != "relativemetric"; });

  // Articles tab
  var chart = d3.select("div#example1").append("svg")
    .attr("width", w + l + r)
    .attr("height", data.length * (h + 2 * s) + 30)
    .attr("class", "chart")
    .append("g")
    .attr("transform", "translate(200,20)");

  var x = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.article_count; })])
    .range([0, w]);
  var y = d3.scale.ordinal()
    .domain(data.map(function(d) { return d.display_name; }))
    .rangeBands([0, (h + 2 * s) * data.length]);
  var z = d3.scale.ordinal()
    .domain(data.map(function(d) { return d.group; }))
    .range(colors);

  chart.selectAll("text.labels")
    .data(data)
    .enter().append("a").attr("xlink:href", function(d) { return "http://almhack.crowdometer.org/sources/" + d.name; }).append("text")
    .attr("x", 0)
    .attr("y", function(d) { return y(d.display_name) + y.rangeBand() / 2; })
    .attr("dx", -200) // padding-right
    .attr("dy", ".35em") // vertical-align: middle
    .text(function(d) { return d.display_name; });
  chart.selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("fill", function(d) { return z(d.group); })
    .attr("y", function(d,i) { return y(d.display_name); })
    .attr("height", h)
    .attr("width", function(d) { return x(d.article_count); });
  chart.selectAll("text.values")
    .data(data)
    .enter().append("text")
    .attr("x", function(d) { return x(d.article_count); })
    .attr("y", function(d) { return y(d.display_name) + y.rangeBand() / 2; })
    .attr("dx", 5) // padding-right
    .attr("dy", ".35em") // vertical-align: middle
    .text(function(d) { return number_with_delimiter(d.article_count); });

  function number_with_delimiter(number) {
    if(number !== 0) {
      return formatFixed(number);
    } else {
      return null;
    }
  }
});
``