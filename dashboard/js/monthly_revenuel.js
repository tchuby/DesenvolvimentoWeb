google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Mês", "Receita", { role: "style" } ],
        ["Janeiro", 8.94, "blue"],
        ["Fevereiro", 10.49, "blue"],
        ["Março", 19.30, "blue"],
        ["Abril", 21.45, "blue"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Evolução da receita mensal",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("monthly_revenuel"));
      chart.draw(view, options);
  }