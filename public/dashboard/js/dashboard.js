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

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("currentuser").innerHTML = user.displayName;
        // document.getElementById("userLi").classList.remove("hide");
        // document.getElementById("previewBtn").classList.remove("hide");
        // console.log(user);
        // fade(document.getElementById("preloader"));
    } else {
        console.log('%c ' + user, 'color:black; font-weight:bold; background-color:red');
        window.location.href = "../";
    }
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