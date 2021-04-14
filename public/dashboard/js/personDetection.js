let capture;

let sketch = function (p) {
    p.setup = function () {
        p.createCanvas(320, 240);
        p.background(0);
        capture = createCapture(VIDEO);
        capture.size(320, 240);
    }

    p.draw = function () {
        image(capture, 0, 0, 320, 240);
    }

};
new p5(sketch, window.document.getElementById('camCanvasId'));