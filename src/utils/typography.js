import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Rubik', 'Avenir Next', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'Inconsolata', 'Menlo', 'monospace'],
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Rubik',
      styles: [ '900' ]
    },
    {
      name: 'Roboto Mono',
      styles: [
        '400'
      ]
    }
  ]
});

export default typography;