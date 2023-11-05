const screen = document.querySelector(".screen");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
//keyboard events
document.body.addEventListener("keydown", (e) => {
  switch (e.key) {
    // basilan edelerin keylerinde olan case ler
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      input.textContent += e.key;
      result.textContent += e.key;
      break;

    // operatorlar basilanda
    case "+":
      input.textContent += "+";
      result.textContent = "";
      break;
    case "-":
      input.textContent += "-";
      result.textContent = "";
      break;
    case "*":
      input.textContent += "*";
      result.textContent = "";
      break;
    case "/":
      input.textContent += "/";
      result.textContent = "";
      break;
    case "^":
      input.textContent += "**";
      result.textContent = "";
      break;

    // noqte qoymaq ucun
    case ".":
      if (
        input.textContent.indexOf(".") === -1 &&
        result.textContent.indexOf(".") === -1
      ) {
        input.textContent += e.key;
        result.textContent += e.key;
      }
      break;

    // delete ve ya backspace basilanda
    case "Delete":
      input.textContent = "";
      result.textContent = "";
      break;
    case "Backspace":
      if (input.textContent.length > 0 && result.textContent.length > 0) {
        input.textContent = input.textContent.slice(0, -1);
        result.textContent = " ";
      }
      break;

    // enter ve ya = bisalana
    case "=":
    case "Enter":
      if (input.textContent !== "") {
        const expression = eval(input.textContent);
        result.textContent = expression;
      } else {
        result.textContent = "Error: Invalid expression";
      }
      break;
    default:
      break;
  }
});
//click events
buttons.forEach((x) => {
  x.addEventListener("click", () => {
    //ededler olan buttonlara basanda
    if (x.innerHTML === "0") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "1") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "2") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "3") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "4") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "5") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "6") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "7") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "8") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }
    if (x.innerHTML === "9") {
      input.textContent += x.innerHTML;
      result.textContent += x.innerHTML;
    }

    // operatorlar basilanda
    if (x.innerHTML === "+") {
      input.textContent += "+";
      result.textContent = "";
    }
    if (x.innerHTML === "-") {
      input.textContent += "-";
      result.textContent = "";
    }
    if (x.innerHTML === "*") {
      input.textContent += "*";
      result.textContent = "";
    }
    if (x.innerHTML === "/") {
      input.textContent += "/";
      result.textContent = "";
    }
    if (x.innerHTML === "^") {
      input.textContent += "**";
      result.textContent = "";
    }

    // noqte qoymaq ucun
    if (x.innerHTML === ".") {
      if (
        input.textContent.indexOf(".") === -1 &&
        result.textContent.indexOf(".") === -1
      ) {
        input.textContent += x.innerHTML;
        result.textContent += x.innerHTML;
      }
    }

    // delete ve ya backspace basilanda
    if (x.innerHTML === "C") {
      input.textContent = "";
      result.textContent = "";
    }
    if (x.innerHTML === "AC") {
      if (input.textContent.length > 0 && result.textContent.length > 0) {
        input.textContent = input.textContent.slice(0, -1);
        result.textContent = " ";
      }
    }

    // enter ve ya = bisalana
    if (x.innerHTML ===  "="){
          if (input.textContent !== "") {
            const expression2 = eval(input.textContent);
            result.textContent = expression2;
          } else {
            result.textContent = "Error: Invalid expression";
          }
    }
  });
});
