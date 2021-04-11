// // Instantiation
document.addEventListener("DOMContentLoaded", function (event) {
    checkauth();
});





const drawerelement = document.querySelector(".mdc-drawer--dismissible");
const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerelement);

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

topAppBar.setScrollTarget(document.querySelector('.main-content'));

topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const classMenuBtn = document.querySelector('.classMenuBtn');
const classMenuEl = document.querySelector('.classMenu');
const classMenu = new mdc.menu.MDCMenu(classMenuEl);
const classMenuAnchor = document.querySelector('.classMenuAnchor');
classMenu.setAnchorCorner(mdc.menuSurface.Corner.BOTTOM_RIGHT);

classMenuBtn.addEventListener('click', () => {
    classMenu.open = !classMenu.open;
    classMenu.setAnchorElement(classMenuAnchor);
});

const labMenuBtn = document.querySelector('.labMenuBtn');
const labMenuEl = document.querySelector('.labMenu');
const labMenu = new mdc.menu.MDCMenu(labMenuEl);
const labMenuAnchor = document.querySelector('.labMenuAnchor');
labMenu.setAnchorCorner(mdc.menuSurface.Corner.BOTTOM_RIGHT);

labMenuBtn.addEventListener('click', () => {
    labMenu.open = !labMenu.open;
    labMenu.setAnchorElement(labMenuAnchor);
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