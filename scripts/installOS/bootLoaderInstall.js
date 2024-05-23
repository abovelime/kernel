// made with love from AboveLime (Liam). also if you ask what this code does, I don't know I just type it man. if it breaks, too bad
// pls don't ask how I made it, I can't tell you man
// ver 1.0 prelaunch beta

const onBoot = document.getElementById("onboot");


function onLoad() {

    if (localStorage.osInstalled) {
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
        welcomeP1.setAttribute('id', 'welcomeAlert1');

        onBoot.appendChild(welcomeP1);

        // help node

        const welcomeP2 = document.createElement("p");
        const welcomeNode2 = document.createTextNode("Type: 'help installos' for Help!");
        welcomeP2.appendChild(welcomeNode2);
        welcomeP2.setAttribute('id', 'welcomeAlert2');

        onBoot.appendChild(welcomeP2);

    }

}
