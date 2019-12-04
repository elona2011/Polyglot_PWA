let fileHandle;
let open_file = document.querySelector('#open_file')
let audioinput = document.querySelector('#audioinput')
let audioinput_str = ''
open_file.addEventListener('click', async (e) => {
  fileHandle = await window.chooseFileSystemEntries();
  // Do something with the file handle
  const file = await fileHandle.getFile();
  const contents = await file.text();
  // textArea.value = contents;
  debugger
});

navigator.mediaDevices.enumerateDevices()
  .then(function (devices) {
    devices.forEach(function (device) {
      audioinput_str += device.kind + ": " + device.label +
        " id = " + device.deviceId + '__'
      console.log(device.kind + ": " + device.label +
        " id = " + device.deviceId);
      audioinput.innerHTML = audioinput_str
    });
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });