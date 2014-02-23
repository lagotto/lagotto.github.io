var sites = [{ name: "Public Library of Science (PLOS)", url: "http://alm.plos.org", api_key: "3pezRBRXdyzYW6ztfwft" }]
          //   { name: "ALM Data Challenge (10,000 random CrossRef DOIs)", url: "http://almhack.crowdometer.org", api_key: "cBYJpjzC5fNwmvVJPJeE" }]

// queue requests, wait until we have response from all
// using queue.js library
var queue = queue();
for (var i = 0; i < sites.length; i++) {
  query = sites[i]["url"] + "/api/v5/status?api_key=" + sites[i]["api_key"];
  queue.defer(d3.json, query);
}
queue.awaitAll(ready);

var formatFixed = d3.format(",.0f");

function ready(error, data) {
  if (error) console.log("there was an error loading the data: " + error);

  for (var i = 0; i < sites.length; i++) {
    var tr = d3.select("#status tbody").append("tr");

    status = (data[i]["error"] === null) ? "OK" : "Failed";
    label = (data[i]["error"] === null) ? "label-success" : "label-danger";
    version = (data[i]["data"]) ? data[i]["data"]["version"] : "n/a";
    articles_count = (data[i]["data"]) ? data[i]["data"]["articles_count"] : "n/a";

    var row = { name: sites[i]["name"], url: sites[i]["url"], status: status, label: label, version: version, articles_count: articles_count}

    tr.append("td")
      .text(function(d) { return row["name"]; });
    tr.append("td")
      .append("a").attr("href", function(d) { return row["url"] })
      .text(function(d) { return row["url"]; });
    tr.append("td")
      .append("span")
      .attr("class", "label " + row["label"])
      .text(function(d) { return row["status"]; });
    tr.append("td")
      .text(function(d) { return row["version"]; });
    tr.append("td")
      .attr("class", "number")
      .text(function(d) { return formatFixed(row["articles_count"]); });
  }
}