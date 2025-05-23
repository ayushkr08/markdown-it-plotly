const fs = require('fs');
const md = require('markdown-it')();
const plotlyPlugin = require('./index');

md.use(plotlyPlugin, { width: 800, height: 600 });

const markdownContent = `
\`\`\`plotly
{
  "data": [{
    "type": "bar",
    "x": [1, 2, 3],
    "y": [2, 10, 3]
  }],
  "layout": {
    "title": "Test Chart"
  }
}
\`\`\`
`;

const htmlOutput = `
<!DOCTYPE html>
<html>
<head>
  <title>Plotly Test</title>
</head>
<body>
  ${md.render(markdownContent)}
</body>
</html>
`;

fs.writeFileSync('test.html', htmlOutput);
console.log('HTML file created: test.html');