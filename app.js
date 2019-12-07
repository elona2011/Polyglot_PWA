let fileHandle;
let open_file = document.querySelector('#open_file')
let audioinput = document.querySelector('#audioinput')
let play = document.querySelector('#play')
let pause = document.querySelector('#pause')
let stop = document.querySelector('#stop')
let rateup = document.querySelector('#rateup')
let ratedown = document.querySelector('#ratedown')
let playrate = document.querySelector('#playrate')
let audioinput_str = ''
let mp3

audio_file.onchange = function () {
  var files = this.files;
  var file = URL.createObjectURL(files[0]);
  mp3 = new Audio()
  // mp3.defaultPlaybackRate = 2
  mp3.src = file
};

// open_file.addEventListener('click', async (e) => {
//   fileHandle = await window.chooseFileSystemEntries();
//   // Do something with the file handle
//   const file = await fileHandle.getFile();
//   audioinput.textContent = file.name
//   mp3 = new Audio()
//   let objectURL = URL.createObjectURL(file);
//   mp3.src = objectURL
// });

play.addEventListener('click', e => {
  if (mp3) {
    mp3.play()
  }
})
pause.addEventListener('click', e => {
  if (mp3) {
    mp3.pause()
  }
})
stop.addEventListener('click', e => {
  if (mp3) {
    mp3.stop()
  }
})
rateup.addEventListener('click', e => {
  if (mp3) {
    playrate.textContent = +playrate.textContent + 0.1
    mp3.playbackRate = +playrate.textContent
    // mp3.play()
  }
})
ratedown.addEventListener('click', e => {
  if (mp3) {
    playrate.textContent = +playrate.textContent - 0.1
    mp3.playbackRate = +playrate.textContent
    // mp3.play()
  }
})