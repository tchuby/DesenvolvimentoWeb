google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Ano', 'Vendas', 'Custos'],
        ['2020',  1000,      400],
        ['2021',  1170,      460],
        ['2022',  660,       1120],
        ['2023',  1030,      540]
      ]);

      var options = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
      };

      var chart = new google.visualization.AreaChart(document.getElementById('year_performance'));
      chart.draw(data, options);
    }