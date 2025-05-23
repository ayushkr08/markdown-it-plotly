# markdown-it-plotly  
[![npm version](https://img.shields.io/npm/v/markdown-it-plotly)](https://www.npmjs.com/package/markdown-it-plotly)

Embed Plotly.js charts in markdown using fenced code blocks.

## Installation
```bash
npm install markdown-it-plotly markdown-it
```

## Usage
```javascript
const md = require('markdown-it')();
const plotly = require('markdown-it-plotly');

md.use(plotly, { width: 800, height: 600 });

const html = md.render(`
\`\`\`plotly
{
  "data": [{
    "type": "bar",
    "x": [1, 2, 3],
    "y": [2, 5, 3]
  }],
  "layout": {
    "title": "My Chart"
  }
}
\`\`\`
`);
```

## Options
| Key     | Default | Description          |
|---------|---------|----------------------|
| `width` | `800`   | Chart width (px)     |
| `height`| `600`   | Chart height (px)    |