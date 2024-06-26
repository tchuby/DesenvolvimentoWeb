google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Company', 'Share'],
          ['Lacta', 20],
          ['Nestlè', 30],
          ['Garoto', 20],
          ['Ferrero', 5],
          ['Lindt', 5],
          ['Outros', 20]
        ]);

        var options = {
          title: 'Market Share'
        };

        var chart = new google.visualization.PieChart(document.getElementById('market_share'));

        chart.draw(data, options);
      }