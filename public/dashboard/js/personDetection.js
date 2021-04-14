let camera;
var H = 240;
var W = 320;
let sketch = function (p) {
    p.setup = function () {
        p.createCanvas(W, H);
        p.background(0);
        camera = p.createCapture(p.VIDEO);
        camera.hide();
        camera.size(W, H)
    }

    p.draw = function () {
        p.image(camera, 0, 0, W, H);
    }

};

function startDetection(w, h) {
     H = h;
     W = w;
    new p5(sketch, window.document.getElementById('camCanvasId'));
}