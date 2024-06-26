google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Mês", "dias", { role: "style" } ],
        ["Janeiro", 21, "blue"],
        ["Fevereiro", 19, "lightblue"],
        ["Março", 15, "blue"],
        ["Abril", 18, "lightblue"],
        ["Maio", 20, "blue"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Lead time.",
        bar: {groupWidth: "50%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("lead_time"));
      chart.draw(view, options);
  }