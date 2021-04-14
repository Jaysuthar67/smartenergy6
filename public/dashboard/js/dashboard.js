// // Instantiation


document.addEventListener("DOMContentLoaded", function (e) {
    checkauth();
    loadDashboard();
    startDetection(320,240);
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

const userMenuBtn = document.querySelector('.userMenuBtn');
const userMenuEl = document.querySelector('.userMenu');
const userMenu = new mdc.menu.MDCMenu(userMenuEl);
userMenu.setAnchorCorner(mdc.menuSurface.Corner.BOTTOM_END);

userMenuBtn.addEventListener('click', () => {
    userMenu.open = !userMenu.open;
    userMenu.setAnchorElement(userMenuBtn);
})

const dashboardBlockA = pureknob.createKnob(300, 300);
const dashboardBlockB = pureknob.createKnob(300, 300);

function setSetupMeters() {
    dashboardBlockA.setProperty('angleStart', -0.75 * Math.PI);
    dashboardBlockA.setProperty('angleEnd', 0.75 * Math.PI);
    dashboardBlockA.setProperty('colorFG', '#05a300');
    dashboardBlockA.setProperty('colorBG', '#cccccc');
    dashboardBlockA.setProperty('trackWidth', 0.3);
    dashboardBlockA.setProperty('valMin', 0);
    dashboardBlockA.setProperty('valMax', 400);
    dashboardBlockA.setProperty('readonly', true);
    dashboardBlockA.setProperty('textScale', 0.60);

    let nodeA = dashboardBlockA.node();
    let elemA = document.querySelector('.meterA');
    elemA.insertBefore(nodeA, elemA.childNodes[0]);


    dashboardBlockB.setProperty('angleStart', -0.75 * Math.PI);
    dashboardBlockB.setProperty('angleEnd', 0.75 * Math.PI);
    dashboardBlockB.setProperty('colorFG', '#05a300');
    dashboardBlockB.setProperty('colorBG', '#cccccc');
    dashboardBlockB.setProperty('trackWidth', 0.3);
    dashboardBlockB.setProperty('valMin', 0);
    dashboardBlockB.setProperty('valMax', 400);
    dashboardBlockB.setProperty('readonly', true);
    dashboardBlockB.setProperty('textScale', 0.60);

    let nodeB = dashboardBlockB.node();
    let elemB = document.querySelector('.meterB');
    elemB.insertBefore(nodeB, elemB.childNodes[0]);
}

function loadDashboard() {
    setSetupMeters();
    dashboardBlockA.setValue(0);
    dashboardBlockB.setValue(0);
    getRealtimeDatabaseRef();
}

function getRealtimeDatabaseRef() {
    const rtdbRefObject = firebase.database().ref().child('status');

    rtdbRefObject.on('value', snap => {

        updateDashboard(snap.val());
    });
}

function updateDashboard(statusJson) {
    var wattA = 0;
    var wattB = 0;
    wattA = (statusJson.esp_001.rly1 * 100) + (statusJson.esp_001.rly2 * 100) + (statusJson.esp_001.rly3 * 40) + (statusJson.esp_001.rly4 * 40);
    wattB = (statusJson.esp_002.rly1 * 100) + (statusJson.esp_002.rly2 * 40);
    dashboardBlockA.setValue(wattA);
    dashboardBlockB.setValue(wattB);
    var meterALable = document.querySelector('.meterALable');
    meterALable.innerHTML = wattA + "W";
    var meterBLable = document.querySelector('.meterBLable');
    meterBLable.innerHTML = wattB + "W";
    // console.log(statusJson);
}

//Naigation code
function class1Active() {
    hideDashboard();
    hideClass2();
    hideLab1();
    hideLab2();
    showClass1();
    closeNavBar();
}

function class2Active() {
    hideDashboard();
    hideClass1();
    hideLab1();
    hideLab2();
    showClass2();
    closeNavBar();
}

function lab1Active() {
    hideDashboard();
    hideClass1();
    hideClass2();
    hideLab2();
    showLab1();
    closeNavBar();
}

function lab2Active() {
    hideDashboard();
    hideClass1();
    hideClass2();
    hideLab1();
    showLab2();
    closeNavBar();
}

function dashboardClick() {
    hideClass1();
    hideClass2();
    hideLab1();
    hideLab2();
    showDashboard();
    closeNavBar();
}

function showDashboard() {

    const dashboardMainContent = document.querySelector('.dashboardMainContent');
    dashboardMainContent.classList.remove("hide");
}

function hideDashboard() {
    const dashboardMainContent = document.querySelector('.dashboardMainContent');
    dashboardMainContent.classList.add("hide");
}

function showClass1() {
    const class1Content = document.querySelector('.class1Content');
    class1Content.classList.remove("hide");
}

function hideClass1() {
    const class1Content = document.querySelector('.class1Content');
    class1Content.classList.add("hide");
}

function showClass2() {
    const class2Content = document.querySelector('.class2Content');
    class2Content.classList.remove("hide");
}

function hideClass2() {
    const class2Content = document.querySelector('.class2Content');
    class2Content.classList.add("hide");
}

function showLab1() {
    const lab1Content = document.querySelector('.lab1Content');
    lab1Content.classList.remove("hide");
}

function hideLab1() {
    const lab1Content = document.querySelector('.lab1Content');
    lab1Content.classList.add("hide");
}

function showLab2() {
    const lab2Content = document.querySelector('.lab2Content');
    lab2Content.classList.remove("hide");
}

function hideLab2() {
    const lab2Content = document.querySelector('.lab2Content');
    lab2Content.classList.add("hide");
}


function logout() {
    try {
        firebase.auth().signOut().then(function () {
            window.location.href = "../";
        }).catch(function (error) {
            console.log(error);
        });
    } catch (syserror) {
        alert("Something Went Wrong");
        console.log(syserror);
        window.location.href = "../";
    }
}




// Miscellaneous Code
function closeNavBar() {
    drawer.open = false;
}

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