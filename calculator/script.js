let input = "";
let openBracket = true;

function press(value) {
  if (input === "0" && value !== ".") {
    input = value;
  } else {
    input += value;
  }
  document.getElementById("screen").innerText = input;
}

function calculate() {
  try {
    input = eval(input).toString();
    document.getElementById("screen").innerText = input;
  } catch {
    input = "";
    document.getElementById("screen").innerText = "Error";
  }
}

function clearScreen() {
  input = "";
  document.getElementById("screen").innerText = "0";
}

function toggleBracket() {
  if (openBracket) {
    input += "(";
  } else {
    input += ")";
  }
  openBracket = !openBracket;
  document.getElementById("screen").innerText = input;
}

function toggleSign() {
  if (input !== "") {
    if (input.startsWith("-")) {
      input = input.substring(1);
    } else {
      input = "-" + input;
    }
    document.getElementById("screen").innerText = input;
  }
}

function backspace() {
  input = input.slice(0, -1);
  document.getElementById("screen").innerText = input || "0";
}
