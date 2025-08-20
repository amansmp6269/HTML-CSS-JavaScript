let boxes = document.querySelectorAll(".box");
let result = document.querySelector("#button");
let newButton = document.querySelector("#newbutton");
let msg = document.querySelector(".msg");
let winner = document.querySelector("#winner");





let turnO = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnO) {
            box.innerText = "O";
            box.style.color = "Black"
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "pink"
            turnO = true;

        }
        box.disabled = true;

        checkWinner();
    });
})
const showWinner = (winner) => {
    winner.innerText = `congrats winner is ${winner}`
    msg.classList.remove("hide");
    disableBoxes();



}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1)
                showWinner(pos1);

            }
        }
    }
}

const newGame = () => {
    let turnO = true;
    enableBoxes();
    msg.classList.add("hide")



}

newButton.addEventListener("click", newGame)
button.addEventListener("click", newGame)
