const numbers = document.querySelectorAll(".characters");
const result = document.getElementById("resulted");

let input = "";
let output;
let firstput;
let lastput;
let operator = "";


const percent = () => {
  if (output != "") {
    firstput = +firstput / 100;
    overview(firstput);
  }
  input = (+input / 100).toString();
  overview(input);
  operator = "";
};

const minus = () => {
  if (output != "") {
    firstput = +firstput * -1;
    overview(firstput);
  }
  input = (+input * -1).toString();
  overview(input);

  operator - "";
};

const clear = () => {
  input = "";
  firstput = null;
  lastput = null;
  operator = "";
  result.textContent = "";
};

const overviewfirstSecondNum = () => {
  if (firstput) {
    lastput = +input;
  } else {
    firstput = +input;
  }
  input = "";
};
const calculater = () => {
  switch (operator) {
    case "+":
      return firstput + lastput;
    case "-":
      return firstput - lastput;
    case "x":
      return firstput * lastput;
    case "÷":
      return firstput / lastput;
  }
};

const overview = (output) => {
  result.textContent = output;
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const value = e.currentTarget.textContent;
    const id = e.currentTarget.id;

    if (input === "" && value === "0") return;

    if (id !== "operation" && input !== "0") {
      input += value;
      overview(input);
    }
    if (id === "operation") {
      value !== "=" ? (operator = value) : null;

      if (value === "+/–") {
        minus();
      } else if (value === "%") {
        percent();
      } else {
        operator === "C" && clear();

        overviewfirstSecondNum();
        overview(input);

        if (value === "=" && !lastput) return;
        if (value === "=" && firstput && lastput) {
          output = calculater();
          firstput = output;
          input = output;
          lastput = null;
          overview(output);
        }
      }
    }
  });
});
