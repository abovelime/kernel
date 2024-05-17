// made with love from AboveLime (Liam). also if you ask what this code does, I don't know I just type it man. if it breaks, too bad
// pls don't ask how I made it, I can't tell you man
// ver 1.0 prelaunch beta


let osInstalled = false;
let loadingAlert = 1;
let preCheckAlert = 1;

const onBoot = document.getElementById("on-boot");


function onLoad() {

    console.log("Loading Process Beginning...");
    const loadingP1 = document.createElement("p");
    const loadingNode1 = document.createTextNode("Loading Process Beginning...     [OK]")
    loadingP1.appendChild(loadingNode1);
    loadingP1.setAttribute('id', 'loadingAlert'+loadingAlert);
    loadingAlert++;

    onBoot.appendChild(loadingP1);



    console.log("Pre-check Starting");
    const preCheckP1 = document.createElement("p");
    const preCheckNode1 = document.createTextNode("Pre-check Starting... [OK]")
    preCheckP1.appendChild(preCheckNode1);
    preCheckP1.setAttribute('id', 'preCheckAlert'+preCheckAlert);
    preCheckAlert++;

    onBoot.appendChild(preCheckP1)

    preCheck();

    if (osInstalled === true) {
        // send to os
    } else {
        // keep here
    }

}


function preCheck() {

    // init errors and info
    const preCheckP2 = document.createElement("p");
    const preCheckP3 = document.createElement("p");

    // init in case of error
    let preCheckNode2 = document.createTextNode("ERROR 101 : Unable to read bootData [ERROR]");

    // check for OS being stored
    if (localStorage.osInstalled) {
        osInstalled = true;
        console.log("User has already installed OS!");
        preCheckNode2 = document.createTextNode("User has already installed OS! [INFO]")
    } else {
        console.log("User doesn't have an OS installed!");
        preCheckNode2 = document.createTextNode("User doesn't have an OS installed! [INFO]")
    }

    // append finished node
    preCheckP2.appendChild(preCheckNode2);
    preCheckP2.setAttribute('id', 'preCheckAlert'+preCheckAlert);
    preCheckAlert++;

    onBoot.appendChild(preCheckP2);

    // tells the user the pre-check is complete
    console.log("Pre-check complete!");
    const preCheckNode3 = document.createTextNode("Pre-check complete! [OK]");
    preCheckP3.appendChild(preCheckNode3);
    preCheckP3.setAttribute('id', 'preCheckAlert'+preCheckAlert);
    preCheckAlert++;

    // appends it
    onBoot.appendChild(preCheckP3);

}
