const button = document.querySelector("button");
const body = document.querySelector("body");
const makePlay = (random, selection, move, moveElement) => {
    if (random > 0) {
        switch(selection) {
            case "rock":
                move = "📃Paper📃";
                break;
            case "paper":
                move = "✂️Scissors✂️";
                break;
            case "scissors":
                move = "🪨Rock🪨";
                break;
        };
        moveElement.innerText = `Computer plays ${move}! You lose!`;
    } else {
        switch(selection) {
            case "rock":
                move = "✂️Scissors✂️";
                break;
            case "paper":
                move = "🪨Rock🪨";
                break;
            case "scissors":
                move = "📃Paper📃";
                break;
        };
        moveElement.innerText = `Computer plays ${move}! You win!`;
    };
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const appendDot = (moveElement) => {moveElement.innerText += "."};
const waiting = async (random, selection, move, moveElement) => {
    moveElement.innerText = "Waiting for computer's move"
    appendDot(moveElement);
    await wait(1000);
    appendDot(moveElement);
    await wait(1000);
    appendDot(moveElement);
    await wait(1000);
    makePlay(random, selection, move, moveElement)

};
button.addEventListener("click", () => {
    let random = Math.trunc(Math.random() * 10);
    const existingMove = document.querySelector("h1");
    if (existingMove) {existingMove.remove()};
    const selection = document.querySelector(`input[name="rpsinput"]:checked`).value;
    let move;            
    const moveElement = document.createElement("h1");
    body.appendChild(moveElement);
    waiting(random, selection, move, moveElement);
});


