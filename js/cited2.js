var data;
var api_key = d3.select("p#example").attr('data-api_key');
var query = "http://alm.labs.crossref.org/api/v5/articles?api_key=" + api_key;
query += "&order=wikipedia&source=wikipedia";

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

  for (var i=0; i<10; i++) {
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