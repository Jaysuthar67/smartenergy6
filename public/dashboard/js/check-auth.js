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

function sendResetPassword() {
    var emailAddress = firebase.auth().currentUser.email;
    firebase.auth().sendPasswordResetEmail(emailAddress).then(function () {
        // console.log("Email Link Sent Successfully");
        alert("Password Reset Link Was sent to " + emailAddress + " email Address");
        firebase.auth().signOut().then(function () {
            window.location.href = "../";
        }).catch(function (error) {
            console.log(error);
        });
        window.location.href = "../";
    }).catch(function (error) {
        alert("Something Went Wrong");
        console.log(syserror);
        window.location.href = "../";
    });

}