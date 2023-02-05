const numbers = document.querySelectorAll(".characters");
const result = document.getElementById("resulted");

let input = "";
let output;
let firstput;
let lastput;
let operator = "";

const overview = (res) => {
  result.textContent = res;
};
const calculater = () => {
  switch (operator) {
    case "+":
      return firstput + lastput;
      break;
    case "-":
      return firstput - lastput;
    case "x":
      return firstput * lastput;
      break;
    case "÷":
      return firstput / lastput;
      break;
    case "%":
      return (firstput / 100) * lastput;
      break;
    default:
      break;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const value = e.currentTarget.textContent;
    const id = e.currentTarget.id;
    console.log(id);

    if (input === "" && value === "0") return;

    if (id !== "operation" && input !== "0") {
      input += value;
      overview(input);
    }
    if (id === "operation") {

      
      if (value === "=" && firstput && lastput) {
        result = calculater();
        firstput = result;
        input = result;
        lastput = null;
        overview(result);
      }
    }
  });
});
