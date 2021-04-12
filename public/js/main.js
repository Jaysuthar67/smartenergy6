document.addEventListener("DOMContentLoaded", function (event) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "dashboard/";
        } else {}
    });
});


function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("passwd").value;

    console.log(email);
    console.log(password);

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        window.location.href = "dashboard/";
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
            document.getElementById("err").classList.remove("hide");
        } else if (errorCode === 'auth/invalid-email') {
            document.getElementById("err").classList.remove("hide");
        } else {
            console.log(errorCode);
        }
    });

}



// firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
//     window.location.href = "dashboard/";
// }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     if (errorCode === 'auth/wrong-password') {
//         document.getElementById("err").classList.remove("hide");
//     } else if (errorCode === 'auth/invalid-email') {
//         document.getElementById("err").classList.remove("hide");
//     } else {
//         console.log(errorCode);
//     }
// });