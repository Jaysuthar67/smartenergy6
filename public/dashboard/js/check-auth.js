function checkauth() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            document.getElementById("currentUser").innerHTML = "Welcome, " + user.displayName;
            // document.getElementById("userLi").classList.remove("hide");
            // document.getElementById("previewBtn").classList.remove("hide");
            // console.log(user);
            // fade(document.getElementById("preloader"));
        } else {
            console.log('%c ' + user, 'color:black; font-weight:bold; background-color:red');
            window.location.href = "../";
        }
    });
}