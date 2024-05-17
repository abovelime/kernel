let answerCount = 1;

const kernel = document.getElementById("kernel");
const active = document.getElementById("active");

var command = document.getElementById("command");
command.addEventListener("keydown", function (e) {
   if (e.key === "Enter") {
       whatCommand()
   }
});

function whatCommand() {
    // make new div
    const answerDiv1 = document.createElement('div');
    answerDiv1.setAttribute('id', 'answer'+answerCount);

    answerCount++;

    kernel.insertBefore(answerDiv1, active);

    // preserve command

    const previousCommandP = document.createElement('p');
    const previousCommandNode = document.createTextNode("root@installOS ~ % "+command.value);
    previousCommandP.appendChild(previousCommandNode);
    previousCommandP.setAttribute('id', 'previousCommand'+answerCount);

    answerDiv1.appendChild(previousCommandP);


    // COMMAND CHECK HERE



    // Clear Input

    command.value = "";

}

