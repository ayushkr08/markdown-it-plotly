const renderPlotly = require('./renderer');

function plotlyPlugin(md, options = {}) {
    const defaultOptions = {
        width: 800,
        height: 600,
        ...options
    };

    const defaultFence = md.renderer.rules.fence;

    md.renderer.rules.fence = (tokens, idx, opts, env, self) => {
        const token = tokens[idx];
        if (token.info.trim() === 'plotly') {
            try {
                const plotData = JSON.parse(token.content);
                return renderPlotly(plotData, defaultOptions);
            } catch (e) {
                return `<div style="color: red">Error parsing Plotly JSON: ${e.message}</div>`;
            }
        }
        // Fallback to default fence renderer
        return defaultFence(tokens, idx, opts, env, self);
    };
}

module.exports = plotlyPlugin;