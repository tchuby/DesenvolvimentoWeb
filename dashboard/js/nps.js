google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['NPS', 'Score'],
          ['Satisfeito',     75],
          ['Insatisfeito', 25],
        ]);

        var options = {
          title: 'NPS Pontuação',
          pieHole: 0.75,
        };

        var chart = new google.visualization.PieChart(document.getElementById('nps'));
        chart.draw(data, options);
      }