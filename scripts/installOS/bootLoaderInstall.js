// made with love from AboveLime (Liam). also if you ask what this code does, I don't know I just type it man. if it breaks, too bad
// pls don't ask how I made it, I can't tell you man
// ver 1.0 prelaunch beta


let osInstalled = false;
let loadingAlert = 1;
let preCheckAlert = 1;
let welcomeAlert = 1;

const onBoot = document.getElementById("on-boot");


function onLoad() {

    const loadhr = document.createElement('p');
    const loadhrNode = document.createTextNode("===============")
    loadhr.appendChild(loadhrNode);

    console.log("Loading Process Beginning...");
    const loadingP1 = document.createElement("p");
    const loadingNode1 = document.createTextNode("Loading Process Beginning...     [OK]")
    loadingP1.appendChild(loadingNode1);
    loadingP1.setAttribute('id', 'loadingAlert'+loadingAlert);
    loadingAlert++;

    onBoot.appendChild(loadingP1);

    onBoot.appendChild(loadhr);

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

        // do later you moron there's no os rn
    } else {

        const noOSP = document.createElement("p");
        const noOSNode = document.createTextNode("Booting into installOS config... [OK]");
        noOSP.appendChild(noOSNode);
        noOSP.setAttribute('id', 'noOSAlert');

        onBoot.appendChild(noOSP);

        // welcome node

        const welcomeP1 = document.createElement("p");
        const welcomeNode1 = document.createTextNode("Welcome to installOS!");
        welcomeP1.appendChild(welcomeNode1);
        welcomeP1.setAttribute('id', 'welcomeAlert'+welcomeAlert);
        welcomeAlert++;

        onBoot.appendChild(welcomeP1);

        // help node

        const welcomeP2 = document.createElement("p");
        const welcomeNode2 = document.createTextNode("Type: 'help installos' for Help!");
        welcomeP2.appendChild(welcomeNode2);
        welcomeP2.setAttribute('id', 'welcomeAlert'+welcomeAlert);
        welcomeAlert++;

        onBoot.appendChild(welcomeP2);


        const welcomehr = document.createElement('p');
        const welcomehrnode = document.createTextNode("===============")
        welcomehr.appendChild(welcomehrnode);

        onBoot.appendChild(welcomehr);

    }

}


function preCheck() {

    const prehr = document.createElement('p');
    const prehrNode = document.createTextNode("===============")
    prehr.appendChild(prehrNode);

    // init errors and info
    const preCheckP2 = document.createElement("p");
    const preCheckP3 = document.createElement("p");

    // init
    let preCheckNode2;

    // check for OS being stored
    if (localStorage.osInstalled) {
        osInstalled = true;
        console.log("User has already installed OS!");
        preCheckNode2 = document.createTextNode("User has already installed OS! [INFO]")
    } else {
        console.log("User doesn't have an OS installed!");
        preCheckNode2 = document.createTextNode("User doesn't have an OS installed! [INFO]")
    }

    //
    // os checker here later pls
    //

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
    onBoot.appendChild(prehr);
}
