// require("!style!css!./node_modules/styles/playlist.css");

var WaveformPlaylist = require('waveform-playlist');

var playlist = WaveformPlaylist.init({
  samplesPerPixel: 3000,
  mono: true,
  waveHeight: 70,
  container: document.getElementById('playlist'),
  state: 'cursor',
  colors: {
    waveOutlineColor: '#E0EFF1',
    timeColor: 'grey',
    fadeColor: 'black'
  },
  controls: {
    show: true,
    width: 200
  },
  zoomLevels: [500, 1000, 3000, 5000]
});

playlist.load([
  {
    src: 'media/audio/Heavy (Final).mp3',
    name: 'Drums',
    start: 8.5,
    fadeIn: {
      duration: 0.5,
    },
    fadeOut: {
      shape: 'logarithmic',
      duration: 0.5,
    },
  }
]).then(function() {
  // can do stuff with the playlist. 
});