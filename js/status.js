var sites = [{ name: "Public Library of Science (PLOS)", url: "http://alm.plos.org" },
             { name: "Copernicus Publications", url: "http://metricus.copernicus.org" },
             { name: "Public Knowledge Project", url: "http://pkp-alm.lib.sfu.ca/" },
             { name: "ALM Labs (ALM Test Server)", url: "http://labs.crowdometer.org" },
             { name: "CrossRef Labs", url: "http://det.labs.crossref.org" },
             { name: "eLife", url: "http://alm.svr.elifesciences.org/" }]

// queue requests, using queue.js library: https://github.com/mbostock/queue
var queue = queue();
for (var i = 0; i < sites.length; i++) {
  query = sites[i]["url"] + "/heartbeat";
  queue.defer(api_call, query);
}
queue.awaitAll(ready);

var formatFixed = d3.format(",.0f");

// extra error handling, otherwise an error from one API call will break the queue
function api_call(query, callback) {
  d3.json(query, function(error, data) {
  if (error) {
    console.log("there was an error loading the data: " + error);
    callback(null, { error: "An error occured." });
  } else {
    callback(error, data);
  }
});
}

function ready(error, data) {
  for (var i = 0; i < sites.length; i++) {
    var tr = d3.select("#status tbody").append("tr");

    status = (data[i]["error"]) ? "Unknown" : "OK";
    label = (data[i]["error"]) ? "label-warning" : "label-success";
    version = (data[i]["error"]) ? "n/a" : data[i]["version"];
    articles_count = (data[i]["error"]) ? "n/a" : data[i]["articles_count"];

    var row = { name: sites[i]["name"], url: sites[i]["url"], status: status, label: label, version: version, articles_count: articles_count}

    tr.append("td")
      .html(function(d) { return row["name"]; });
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
      .text(function(d) { return number_with_delimiter(row["articles_count"]); });
  }
}

function number_with_delimiter(number) {
  if(number !== "n/a") {
    return formatFixed(number);
  } else {
    return number;
  }
}
