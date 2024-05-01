let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  ];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add('hide');

}

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0 === true) {
      box.innerText = 'O';
      turn0 = false;
    }
    else {
      box.innerText = 'X';
      turn0 = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const showWinner = (Winner) => {
  msg.innerText = `Congratulations the winner is ${Winner}`;
  msgContainer.classList.remove('hide');

  disableBoxes();
  

}

const checkWin = () => {
  for (let pattern of winPattern) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log('Winner', posval1);
        showWinner(posval1);
      }
    }
  }
};

newBtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame)
