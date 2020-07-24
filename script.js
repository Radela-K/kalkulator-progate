// Saat tombol di klik:
// 1. Mendeteksi aksi klik tombol
// 2. Mengambil angka tombol yang di klik
// 3. Jalankan function untuk menampilkan angka di
// layar display

// ambil element-element <button>
// menggunakan class “number”
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const persen = document.querySelector(".precentage");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
    // console.log(`update screen number jadi ${currentNumber}`);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value);
    inputOperator(event.target.value);
  });
});

// membuat agar layar dapat
// menampilkan angka yang benar saat mengklik suatu
// tombol.
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// kalkulasi
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }

  // console.log(`Current number adalah ${currentNumber}`);
};

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";

  console.log(`prev numbernya adalah angka = ${prevNumber}`);
  console.log(`operator yang dipilih ${calculationOperator}`);
  console.log(`yang saat ini jadi current number adalah ${currentNumber}`);
};

// Mengaktifkan fungsi kalkulasi ke aplikasi
// calculator

// definisikan function Calculate
const Calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    case "%":
      result = prevNumber / 100 && currentNumber / 100;
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

// Jalankan Function Calculate saat tombol sama-dengna
// (=) di Klik, dan perbarui layarnya.
equalSign.addEventListener("click", () => {
  Calculate();
  updateScreen(currentNumber);
});

// menghapus isi layar tampilan saat tombol
// AC di klik
clearBtn.addEventListener("click", () => {
  console.log("AC button is pressed");
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// Definisikan function “inputDecimal” dan tambahkan
// titik desimal ke currentNumber
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

// Membuat aplikasi dapat mengkalkulasi
// angka desimal
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const inputPersen = (percent) => {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};

persen.addEventListener("click", (event) => {
  inputPersen(event.target.value);
  updateScreen(currentNumber);
});
