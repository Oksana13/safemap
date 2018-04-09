export const DrilldownData = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Corrected and Non corrected at Risk behaviours'
  },
  xAxis: {
    categories: ['Behaviours with clusters', 'Behaviours near cluster']
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true
  },
  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  series: [{
    name: 'Corrected',
    data: [2, 3]
  }, {
    name: 'Non corrected',
    data: [1]
  }]

};
