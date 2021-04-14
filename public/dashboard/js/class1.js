// const startStopCam = document.querySelector('.startStopCam');
var cam = false;
var ip = [];
var firestore = firebase.firestore();
let docRef = firestore.collection("device-list").doc("o5ar2AschqqVRN9zxxIV");
// const rtdbRefObject = firebase.database().ref().child('status');


function loadClass1() {
    // getDB();
    // getDeviceStatus();
}



function startStopCam() {

    if (cam == false) {
        cam = true;
        startDetection();
    } else {
        cam = false;
        stopDetection();
    }
}

const fanGroup1 = new mdc.switchControl.MDCSwitch(document.querySelector('.fanGroup1'));
const fanGroup2 = new mdc.switchControl.MDCSwitch(document.querySelector('.fanGroup2'));
const lightGroup1 = new mdc.switchControl.MDCSwitch(document.querySelector('.lightGroup1'));
const lightGroup2 = new mdc.switchControl.MDCSwitch(document.querySelector('.lightGroup2'));



document.querySelector('.fanGroup1').addEventListener('click', () => {
    try {
        fetch(`http://192.168.10.40/set?rly1=toggle`)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.text().then(function (responseData) {
                    if (responseData == "updated") {
                        rtdbRefObject.once('value').then((snapshot) => {
                            let status = snapshot.val()
                            status.esp_001.rly1 = Number(fanGroup1.checked);
                            rtdbRefObject.update(status);
                        });
                    } else {
                        console.log("not Updated error in Arduino");
                    }
                });
            })
            .catch(function (err) {
                console.log('Fetch Error : ', err);
            });
    } catch (err) {
        console.log('Fetch Error : ', err);
    }

});

document.querySelector('.fanGroup2').addEventListener('click', () => {
    try {
        fetch(`http://192.168.10.40/set?rly2=toggle`)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.text().then(function (responseData) {
                    if (responseData == "updated") {
                        rtdbRefObject.once('value').then((snapshot) => {
                            let status = snapshot.val()
                            status.esp_001.rly2 = Number(fanGroup2.checked);
                            rtdbRefObject.update(status);
                        });
                    } else {
                        console.log("not Updated error in Arduino");
                    }
                });
            })
            .catch(function (err) {
                console.log('Fetch Error : ', err);
            });
    } catch (err) {
        console.log('Fetch Error : ', err);
    }
});
document.querySelector('.lightGroup1').addEventListener('click', () => {
    try {
        fetch(`http://192.168.10.40/set?rly3=toggle`)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.text().then(function (responseData) {
                    if (responseData == "updated") {
                        rtdbRefObject.once('value').then((snapshot) => {
                            let status = snapshot.val()
                            status.esp_001.rly3 = Number(lightGroup1.checked);
                            rtdbRefObject.update(status);
                        });
                    } else {
                        console.log("not Updated error in Arduino");
                    }
                });
            })
            .catch(function (err) {
                console.log('Fetch Error : ', err);
            });
    } catch (err) {
        console.log('Fetch Error : ', err);
    }
});
document.querySelector('.lightGroup2').addEventListener('click', () => {
    try {
        fetch(`http://192.168.10.40/set?rly4=toggle`)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.text().then(function (responseData) {
                    if (responseData == "updated") {
                        rtdbRefObject.once('value').then((snapshot) => {
                            let status = snapshot.val()
                            status.esp_001.rly4 = Number(lightGroup2.checked);
                            rtdbRefObject.update(status);
                        });
                    } else {
                        console.log("not Updated error in Arduino");
                    }
                });
            })
            .catch(function (err) {
                console.log('Fetch Error : ', err);
            });
    } catch (err) {
        console.log('Fetch Error : ', err);
    }
});


function getDB() {
    var firestore = firebase.firestore();
    let docRef = firestore.collection("device-list").doc("o5ar2AschqqVRN9zxxIV");
    docRef.get().then((doc) => {
        if (doc.exists) {
            ip.push(doc.data().last_ip);
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function updateSwitches(rtdb) {
    fanGroup1.checked = Boolean(Number(rtdb[0]));
    fanGroup2.checked = Boolean(Number(rtdb[1]));
    lightGroup1.checked = Boolean(Number(rtdb[2]));
    lightGroup2.checked = Boolean(Number(rtdb[3]));
}