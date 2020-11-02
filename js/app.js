// UI Variables
const inputEL = document.querySelector('#input');
const sampleQRCodeEL = document.querySelector('.sample');
const qrcodeEL = document.querySelector('.app__qrcode');
let codeCounter = 0;

// Event Handlers
inputEL.addEventListener('keyup', function(e){
  // If the enter button has submited and the input's not empty.
  if (e.keyCode === 13 && inputEL.value !== '') {
    // Create a QRCODE
    var qrcode = new QRCode(qrcodeEL, {
      text: inputEL.value,
      width: 230,
      height: 230,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
    sampleQRCodeEL.style.display = 'none';
    if (codeCounter === 0)  codeCounter++;
    else {
      qrcodeEL.querySelector('img[alt="Scan me!"]').remove();
      qrcodeEL.querySelector('canvas').remove();
      qrcode.clear();
      qrcode.makeCode(inputEL.value);
    }
  } else if (e.keyCode === 13 && !inputEL.value) {
    alert(`Enter something before submiting!\nQRcode will now reset...`);
    sampleQRCodeEL.style.display = 'block';
    qrcodeEL.querySelector('img[alt="Scan me!"]').remove();
    qrcodeEL.querySelector('canvas').remove();
  }
});