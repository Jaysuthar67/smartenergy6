let video;

let sketch = function (p) {
    p.setup = function () {
        p.createCanvas(1600, 900);
        p.background(0);
        

    }
};
new p5(sketch, window.document.getElementById('camCanvasId'));