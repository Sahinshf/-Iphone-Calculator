const resultArea = document.querySelector(".res");
const boxes = document.querySelectorAll(".box");
const boxes_nums = document.querySelectorAll(".box_number");
const boxes_gray = document.querySelectorAll(".box_gray");
const boxes_orange = document.querySelectorAll(".box_orange");
boxes_nums.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (resultArea.innerText == "0" && !(event.target.innerText == ".")) {
      resultArea.innerHTML = null;
    }
    resultArea.innerHTML += event.target.innerText;
    switch (event.keyCode) {
      case 49:
        resultArea.innerHTML += "1";
    }
  });
});
let activeNum;
let activeOp;

boxes_gray.forEach((box) => {
  box.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "AC":
        resultArea.innerHTML = "0";
        activeOp = null;
        activeNum = null;
        break;
      case "+/-":
        resultArea.innerText = `${Number(resultArea.innerText) * -1}`;
        break;
      case "%":
        resultArea.innerText = `${Number(resultArea.innerText) * 0.01}`;
        break;
    }
  });
});

boxes_orange.forEach((box) => {
  box.addEventListener("click", (event) => {
    boxes_orange.forEach((box) => {
      box.style.backgroundColor = null;
      box.style.color = null;
    });
    event.target.style.backgroundColor = "#fff";
    event.target.style.color = "orange";
    switch (event.target.innerText) {
      case "/":
        activeNum = Number(resultArea.innerText);
        resultArea.innerText = "0";
        activeOp = "/";
        break;
      case "x":
        activeNum = Number(resultArea.innerText);
        resultArea.innerText = "0";
        activeOp = "*";
        break;
      case "-":
        activeNum = Number(resultArea.innerText);
        resultArea.innerText = "0";
        activeOp = "-";
        break;
      case "+":
        activeNum = Number(resultArea.innerText);
        resultArea.innerText = "0";
        activeOp = "+";
        break;
      case "=":
        console.log(activeOp);
        console.log(activeNum);
        console.log(resultArea.innerText);
        switch (activeOp) {
          case "/":
            resultArea.innerText = activeNum / Number(resultArea.innerText);
            break;
          case "*":
            resultArea.innerText = activeNum * Number(resultArea.innerText);
            break;
          case "-":
            resultArea.innerText = activeNum - Number(resultArea.innerText);
            break;
          case "+":
            resultArea.innerText = activeNum + Number(resultArea.innerText);
            break;
        }
    }
  });
});

document.onkeydown = (event) => {
  if (resultArea.innerText == "0" && !(event.which == 190)) {
    resultArea.innerHTML = null;
  }
  switch (event.which) {
    case 190:
      resultArea.innerHTML += ".";
      break;
    case 48:
      resultArea.innerHTML += "0";
      break;
    case 49:
      resultArea.innerHTML += "1";
      break;

    case 50:
      resultArea.innerHTML += "2";
      break;

    case 51:
      resultArea.innerHTML += "3";
      break;

    case 52:
      resultArea.innerHTML += "4";
      break;

    case 53:
      resultArea.innerHTML += "5";
      break;

    case 54:
      resultArea.innerHTML += "6";
      break;

    case 55:
      resultArea.innerHTML += "7";
      break;

    case 56:
      resultArea.innerHTML += "8";
      break;

    case 57:
      resultArea.innerHTML += "9";
      break;
    default:
  }
};
