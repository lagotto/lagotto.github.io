var sites = [{ name: "Public Library of Science (PLOS)", url: "http://alm.plos.org", api_key: "3pezRBRXdyzYW6ztfwft" },
             { name: "Copernicus Publications", url: "http://metricus.copernicus.org", api_key: "Dxkwpz8FRe7JHw4EGC1v" },
             { name: "Public Knowledge Project", url: "http://pkp-alm.lib.sfu.ca/", api_key: "WYjzU11DdSr8PEJRuhGX" },
             { name: "ALM Labs (ALM Test Server)", url: "http://labs.crowdometer.org", api_key: "qzcE4ciMj438fLPqyRdE" },
             { name: "CrossRef Labs", url: "http://alm.labs.crossref.org", api_key: "64aJra4M7NPHVAWxxCZ5" }]

// queue requests, using queue.js library: https://github.com/mbostock/queue
var queue = queue();
for (var i = 0; i < sites.length; i++) {
  query = sites[i]["url"] + "/api/v5/status?api_key=" + sites[i]["api_key"];
  queue.defer(api_call, query);
}
queue.awaitAll(ready);

var formatFixed = d3.format(",.0f");

// extra error handling, otherwise an error from one API call will break the queue
function api_call(query, callback) {
  d3.json(query, function(error, data) {
  if (error) {
    console.log("there was an error loading the data: " + error);
    callback(null, { error: "An error occured.", data: null });
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
    version = (data[i]["data"] === null) ? "n/a" : data[i]["data"]["version"];
    articles_count = (data[i]["data"] === null) ? "n/a" : data[i]["data"]["articles_count"];

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
