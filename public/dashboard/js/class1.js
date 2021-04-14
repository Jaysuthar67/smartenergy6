// const startStopCam = document.querySelector('.startStopCam');
var cam = false;
var ip = [];

function loadClass1() {
    getDB();

    console.log(ip);
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

const rtdbRefObject = firebase.database().ref().child('status');

document.querySelector('.fanGroup1').addEventListener('click', () => {
    rtdbRefObject.once('value').then((snapshot) => {
        let status = snapshot.val()
        status.esp_001.rly1 = Number(fanGroup1.checked);
        rtdbRefObject.update(status);
    });
});
document.querySelector('.fanGroup2').addEventListener('click', () => {
    rtdbRefObject.once('value').then((snapshot) => {
        let status = snapshot.val()
        status.esp_001.rly2 = Number(fanGroup2.checked);
        rtdbRefObject.update(status);
    });
});
document.querySelector('.lightGroup1').addEventListener('click', () => {
    rtdbRefObject.once('value').then((snapshot) => {
        let status = snapshot.val()
        status.esp_001.rly3 = Number(lightGroup1.checked);
        rtdbRefObject.update(status);
    });
});
document.querySelector('.lightGroup2').addEventListener('click', () => {
    rtdbRefObject.once('value').then((snapshot) => {
        let status = snapshot.val()
        status.esp_001.rly4 = Number(lightGroup2.checked);
        rtdbRefObject.update(status);
    });
});


function updateSwitches(rtdb) {
    fanGroup1.checked = Boolean(rtdb[0]);
    fanGroup2.checked = Boolean(rtdb[1]);
    lightGroup1.checked = Boolean(rtdb[2]);
    lightGroup2.checked = Boolean(rtdb[3]);

}

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