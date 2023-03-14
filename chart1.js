const ctx = document.getElementById('barChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Safari', 'Chrome', 'Opera', 'Firefox', 'Explorer', 'Others'],
    datasets: [{
      label: 'Pageviews by Browsers',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});