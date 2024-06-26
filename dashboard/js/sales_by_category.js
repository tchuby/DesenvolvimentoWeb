google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        var data = google.visualization.arrayToDataTable([
          ['Mês', 'Cosméticos', 'Eletrônicos', 'Bazar'],
          ['jan/245',  165,      938,         522],
          ['fev/24',  135,      1120,        599],
          ['mar/24',  157,      1167,        587],
          ['abr/24',  139,      1110,        615],
          ['mai/24',  136,      691,         629]
        ]);

        var options = {
          title : 'Vendas por setor',
          vAxis: {title: 'R$ milhões'},
          hAxis: {title: 'Mês'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('sales_by_category'));
        chart.draw(data, options);
      }


      