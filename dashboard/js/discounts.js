google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        var data = google.visualization.arrayToDataTable([
          ['Mês', 'Cosméticos', 'Eletrônicos', 'Bazar'],
          ['jan/24',  8,      12,         2],
          ['fev/24',  7.3,      11.1,        2.7],
          ['mar/24',  7,      10.7,        3.1],
          ['abr/24',  8.2,      11.4,        3],
          ['mai/24',  6.9,      11,         2.8]
        ]);

        var options = {
          title : 'Descontos por setor',
          vAxis: {title: 'percentual'},
          hAxis: {title: 'Mês'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('discounts'));
        chart.draw(data, options);
      }