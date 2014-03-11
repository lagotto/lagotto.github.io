var doi = d3.select("#doi").attr('data-doi');
var api_key = d3.select("#api_key_plos").attr('data-api_key');

function getDate(d) { return new Date(d.year, d.month - 1, d.month); }

d3.json(encodeURI("http://alm2-iad.plos.org/api/v3/articles?api_key=" + api_key + "&ids=" + doi + "&info=history"), function(data) {

  var l = 20; // left margin
  var r = 50; // right margin
  var t = 50;  // top margin
  var w = 15; // width of each bar
  var h = 100; // height
  var colors = ["#304345","#789aa1"];
  var pub_date = d3.time.format.iso.parse(data[0]["publication_date"]);
  var months = 29;
  var end_date = new Date(pub_date.getTime() + months * 24 * 60 * 60 * 1000);
  var format_date = d3.time.format("%m/%d/%y");
  var format_number = d3.format(",d")

  data[0]["sources"].forEach(function(source) {
    if (source.name == "counter") {
      console.log(source);
      var total = source.by_month.reduce(function(i, d) { return i + d[c.name]; }, 0);
      if (total > 0) {
        d3.select("div#month").append("div")
            .attr("class", "row month-row-" + c.name)
            .attr("id", "month-" + source.name + "-" + c.name);
        d3.select("div#month-" + source.name + "-" + c.name).append("div")
            .attr("class", "span3 text-center dashboard dashboard-label")
            .attr("id", "month-label-" + source.name + "-" + c.name);
        if (source.events_url) {
          d3.select("div#month-label-" + source.name + "-" + c.name).append("a")
            .attr("href", function(d) { return source.events_url; })
            .append("h1")
            .attr("class", "signpost")
            .attr("id", "month-signpost-" + source.name + "-" + c.name)
            .text(function(d) { return format_number(total); });
        } else {
          d3.select("div#month-label-" + source.name + "-" + c.name).append("h1")
            .attr("class", "signpost")
            .attr("id", "month-signpost-" + source.name + "-" + c.name)
            .text(function(d) { return format_number(total); });
        }
        d3.select("div#month-label-" + source.name + "-" + c.name).append("div")
            .append("a")
            .attr("href", function(d) { return "/sources/" + source.name; })
            .text(function(d) { return source.display_name; });
        d3.select("div#month-" + source.name + "-" + c.name).append("div")
            .attr("class", "span9")
            .attr("id", "month-chart-" + source.name + "-" + c.name);

        var chart = d3.select("div#month-chart-" + source.name + "-" + c.name).append("svg")
          .attr("width", (w + 1) * months + l + r)
          .attr("height", h + t )
          .attr("class", "chart")
          .append("g")
          .attr("transform", "translate(20,20)");
        var x = d3.time.scale()
          .domain([pub_date, end_date])
          .range([0, (w + 1) * months]);
        var y = d3.scale.linear()
          .domain([0, d3.max(source.by_month, function(d) { return d[c.name]; })])
          .range([0, h]);
        var z = d3.scale.ordinal()
          .domain(source.by_month.map(function(d) { return d.month; }))
          .range(colors);
        chart.selectAll("rect")
          .data(source.by_month)
          .enter().append("rect")
          .attr("fill", function(d) { return z(d.month); })
          .attr("x", function(d) { return x(new Date(d.year, d.month - 1, d.month)) })
          .attr("y", function(d) { return h - y(d[c.name]); })
          .attr("width", w)
          .attr("height", function(d) { return y(d[c.name]); });
        chart.append("line")
          .attr("x1", 0)
          .attr("x2", (w + 1) * months + 8)
          .attr("y1", h)
          .attr("y2", h)
          .attr("class", "line");
        // chart.selectAll("rect").each(
        //   function(d,i){ $(this).tooltip({title: format_number(d[c.name]) + " on " + format_date(new Date(d.year, d.month - 1, d.month)), container: "body"});
      }
    }

    d3.select("div#month").insert("h2", "div.month-row-pdf")
      .attr("class", "border-bottom")
      .attr("id", "month-pdf")
      .text("Counter");
  });

  if (d3.selectAll("div#month").selectAll("div.row")[0].length == 0) {
    d3.select("div#month").append("p")
      .attr("class", "muted")
      .text("No metrics by month found.");
  }
});
