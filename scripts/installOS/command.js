import { help } from './commands/help.js'

let answerCount = 1;
let response;

const kernel = document.getElementById("kernel");
const active = document.getElementById("active");
const onboot = document.getElementById("onboot");

let command = document.getElementById("command");
command.addEventListener("keydown", function (e) {
   if (e.key === "Enter") {
       printCommand()
   }
});

function printCommand() {
    // make new div
    const answerDiv1 = document.createElement('div');
    answerDiv1.setAttribute('id', 'answer'+answerCount);

    kernel.insertBefore(answerDiv1, active);

    // preserve command

    const previousCommandP = document.createElement('p');
    const previousCommandNode = document.createTextNode("root@installOS ~ % "+command.value);
    previousCommandP.appendChild(previousCommandNode);
    previousCommandP.setAttribute('id', 'previousCommand'+answerCount);

    kernel.insertBefore(previousCommandP, answerDiv1);


    // COMMAND CHECK HERE

    let response = commandCheck();

    const responseP = document.createElement('p');
    const responseNode = document.createTextNode(response);
    responseP.appendChild(responseNode);
    responseP.setAttribute('id', 'response'+answerCount);

    answerDiv1.appendChild(responseP);

    // If the command had any inner HTML requests, they are inputted here.

    document.getElementById("response"+answerCount).innerHTML = response;

    // Clear Input

    command.value = "";
    answerCount++;

}

function commandCheck() {

    // it works?
    let args = command.value.split(" ");
    console.log(args[0]);

    function allArgs() {
        let x = " ";
        for (let i = 1; i < args.length; i++) {
             x += args[i] + ", ";
        }
        return x;
    }  

    // checks for the help arg
    if (args[0] === "help") {
        if (args[1] === "installos") {
            return help[0];
        } else {
            return help[1];
        }
    } else {
        return "Unknown args presented: "+args+", please try again.";
    }

}