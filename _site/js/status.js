var sites = [{ name: "Public Library of Science (PLOS)", url: "http://alm.plos.org", api_key: "3pezRBRXdyzYW6ztfwft" },
             { name: "ALM Data Challenge (10,000 random CrossRef DOIs)", url: "http://almhack.crowdometer.org", api_key: "cBYJpjzC5fNwmvVJPJeE" }]

for (var i = 0; i < sites.length; i++) {
  query = sites[i]["url"] + "/api/v5/status?api_key=" + sites[i]["api_key"];
  site = sites[i];
  d3.json(query, function(error, json, site) {
    console.log(site);
    data = (error) ? { "error": "An error occured."} : json;
    buildTable(data,sites[i]);
  });

    //   console.log(data);

    // var tr = d3.select("#status tbody").selectAll("tr")
    // .append("tr");


  // var td = tr.selectAll("td")
  //   .data(function(d) { return d; })
  //   .enter().append("td")
  //   .text(function(d) { return d; });
  // d3.select("#status tbody")
  //   .append("tr")
  //   .append("td")
  //   .append("a").attr("href", function(d) { return site["url"] })
  //   .text(function(d) { return site["url"]; });
}

queue()
  .defer(d3.csv, "file1.csv")
  .defer(d3.csv, "file2.csv")
  .await(function(error, results) { console.log(results); });

function buildTable(data,site) {
  console.log(data);
  console.log(site);
}