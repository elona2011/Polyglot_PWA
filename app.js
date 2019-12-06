let fileHandle;
let open_file = document.querySelector('#open_file')
let audioinput = document.querySelector('#audioinput')
let play = document.querySelector('#play')
let pause = document.querySelector('#pause')
let stop = document.querySelector('#stop')
let audioinput_str = ''
let mp3

open_file.addEventListener('click', async (e) => {
  fileHandle = await window.chooseFileSystemEntries();
  // Do something with the file handle
  const file = await fileHandle.getFile();
  audioinput.textContent = file.name
  mp3 = new Audio()
  let objectURL = URL.createObjectURL(file);
  mp3.src = objectURL
});

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