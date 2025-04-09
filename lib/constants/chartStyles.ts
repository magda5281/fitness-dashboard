export const CHART_TOOLTIP_STYLES = {
  contentStyle: {
    fontSize: 'clamp(0.75rem, 1vw, 1rem)',
    padding: 'clamp(4px, 1vw, 8px)',
    color: '#333',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
};

export const CHART_X_AXIS_STYLES = {
  tick: { fontSize: 'clamp(0.5rem, 2vw, 0.75rem)' },
  interval: 0,
  minTickGap: 0,
  angle: -45,
  textAnchor: 'end',
};
export const CHART_Y_AXIS_STYLES = {
  tick: { fontSize: 8 },
  interval: 0,
  width: 40,
};

export const CHART_LEGEND_STYLES = {
  wrapperStyle: {
    fontSize: 'clamp(0.75rem, 2vw, 1rem)',
    padding: 'clamp(4px, 2vw, 8px)',
  },
};
