// import {MDCTopAppBar} from '@material/top-app-bar';

// // Instantiation
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);



const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

try {
    function logout() {
        firebase.auth().signOut().then(function () {
            window.location.href = "../";
        }).catch(function (error) {
            console.log(error);
        });
    }
} catch (syserror) {
    alert("Something Went Wrong");
    console.log(syserror);
    window.location.href = "../";
}



document.addEventListener("DOMContentLoaded", function (event) {
    checkauth();
});


// Miscellaneous Code
function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
} // - J.s.