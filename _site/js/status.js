var data = []
// { name: "ALM Data Challenge (10,000 random CrossRef DOIs from 2011 and 2012)", url: "http://almhack.crowdometer.org", api_key: "cBYJpjzC5fNwmvVJPJeE" }
var sites = [{ name: "Public Library of Science (PLOS)", url: "http://alm.plos.org", api_key: "3pezRBRXdyzYW6ztfwft" }]
var i=0, site;
while (site = sites[i++]) {
  query = site["url"] + "/api/v5/status?api_key=" + site["api_key"];
  d3.json(query, function(error, json) {
    data = json["data"];
    d3.select("#status tbody")
    .enter().append("tr")
    .enter().append("td").text(function(d) { return site["name"]; })
    .append("td").html(function(d) { return site["api_key"]; });
  });
}