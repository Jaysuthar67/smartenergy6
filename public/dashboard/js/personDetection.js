let capture;

let sketch = function (p) {
    p.setup = function () {
        p.createCanvas(320, 240);
        p.background(0);

    }

    p.draw = function () {
        
    }

};
new p5(sketch, window.document.getElementById('camCanvasId'));