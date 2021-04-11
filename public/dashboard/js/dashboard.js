// // Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');

const topAppBar = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);

// const list = MDCList.attachTo(document.querySelector('.mdc-list'));
// list.wrapFocus = true;


const drawerelement = document.querySelector(".mdc-drawer--dismissible");
const drawer = new mdc.drawer.MDCDrawer(drawerelement)

topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const openClassesMenu = document.querySelector(".openClassesMenu");
const classDropdownElement = document.querySelector(".classDropdown");
const classMenu = new mdc.mdcMenu.MDCMenu()
openClassesMenu.addEventListener("click",function(){
    
})

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