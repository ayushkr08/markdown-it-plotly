function renderPlotly(data, options) {
    const id = 'plotly-' + Math.random().toString(36).substr(2, 9);

    return `
    <div id="${id}" style="width:${options.width}px;height:${options.height}px"></div>
    <script src="https://cdn.plot.ly/plotly-2.14.0.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        try {
          Plotly.newPlot(
            '${id}', 
            ${JSON.stringify(data.data || [])}, 
            ${JSON.stringify(data.layout || {})}, 
            ${JSON.stringify(data.config || {})}
          );
        } catch (e) {
          console.error('Plotly error:', e);
          document.getElementById('${id}').innerHTML = 
            '<div style="color:red;padding:1em">Chart error: ' + e.message + '</div>';
        }
      });
    </script>
  `;
}

module.exports = renderPlotly;