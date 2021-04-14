// const startStopCam = document.querySelector('.startStopCam');
var cam = false;

function startStopCam() {

    if (cam == false) {
        cam = true;
        startDetection();
    } else {
        cam = false;
        stopDetection();
    }
}


function loadClass1() {
    
}