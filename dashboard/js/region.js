google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['País', 'Vendas'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
    ['Australia', 300]
  ]);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions'));

  chart.draw(data, options);
}