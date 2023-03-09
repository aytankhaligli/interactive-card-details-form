const numbers = document.querySelector(".numbers");
const Cname = document.querySelector(".name");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cvc = document.querySelector(".cvv");

const inputNum = document.querySelector(".input_card-number");
const inputName = document.querySelector(".input_name");
const inputMonth = document.querySelector(".input_month");
const inputYear = document.querySelector(".input_year");
const inputCVC = document.querySelector(".input_cvc");

inputNum.oninput = () => {
  numbers.textContent = inputNum.value;
};

inputName.oninput = () => {
  Cname.textContent = inputName.value;
};

inputMonth.oninput = () => {
  month.textContent = inputMonth.value;
};
inputYear.oninput = () => {
  year.textContent = inputYear.value;
};
inputCVC.oninput = () => {
  cvc.textContent = inputCVC.value;
};
