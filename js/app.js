// UI Variables
const inputEL = document.querySelector('#input');
const sampleQRCodeEL = document.querySelector('.sample');
const qrcodeEL = document.querySelector('.app__qrcode');
let codeCounter = 0;

// Event Handlers
inputEL.addEventListener('keydown', function(e){
  // If the enter button has submited and the input's not empty. 
  if (e.keyCode === 13 && inputEL.value !== '') {
    activateLoading();
    // Create a QRCODE
    var qrcode = new QRCode(qrcodeEL, {
      text: inputEL.value,
      width: 230,
      height: 230,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
    if (codeCounter === 0)  codeCounter++;
    else
      qrcodeEL.querySelector('img[alt="Scan me!"]').remove();
    sampleQRCodeEL.style.display = 'none';
  } else if (e.keyCode === 13 && !inputEL.value) {
    alert(`Enter something before submiting!\nQRcode will now reset...`);
    qrcodeEL.querySelector('img[alt="Scan me!"]').style.display = 'none';
    sampleQRCodeEL.style.display = 'block';
  }
  e.preventDefault();
});

// Create Loading Image
function createLoading() {
  // Create
  const loadingImageEL = document.createElement('img');
  loadingImageEL.src = 'images/loading.gif';
  loadingImageEL.alt = 'Loading';
  loadingImageEL.className = 'loading';
  loadingImageEL.style.display = 'none';
  loadingImageEL.style.margin = '300px 0 50px';
  // Add
  sampleQRCodeEL.after(loadingImageEL);
  // Return The Element For Other Operations
  return loadingImageEL;
}

// Activate Loading Function
function activateLoading(sampleState=false) {
  const loadingImageEL = createLoading();
  sampleQRCodeEL.style.display = 'none';
  loadingImageEL.style.display = 'block';
  setTimeout(function(){
    loadingImageEL.remove();
    if (sampleState)
      sampleQRCodeEL.style.display = 'block';
  }, 3200);
}