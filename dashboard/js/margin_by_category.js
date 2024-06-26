google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        var data = google.visualization.arrayToDataTable([
          ['Mês', 'Cosméticos', 'Eletrônicos', 'Bazar'],
          ['mai/24',  12.3,      16.8,         7.9]
        ]);

        var options = {
          title : 'Margem por setor',
          vAxis: {title: 'percentual'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('margin_by_category'));
        chart.draw(data, options);
      }