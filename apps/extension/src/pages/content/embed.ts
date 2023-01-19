console.log('embed!!', window['ethereum'])

window.postMessage({
  from: 'src/pages/contentEmbed/index.js',
  data: window['ethereum'],
})
