google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Vendedor", "Quociente", { role: "style" } ],
        ["Valdemar", 47.9, "blue"],
        ["Rogério", 42.4, "lightblue"],
        ["Armando", 39.8, "blue"],
        ["Genivaldo", 43.7, "lightblue"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Sales Rate por Vendedor",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("sales_rate"));
      chart.draw(view, options);
  }