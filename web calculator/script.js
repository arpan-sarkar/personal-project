// document.querySelector('.leftCol').style.transform = 'translateX(px)';
document.querySelector(".leftCol").style.width = "260px";
document.querySelector(".number").style.transform = "translateY(-50px)";
document.querySelector(".number").style.width = "200px";

// function appendToDisplay(value) {
//   document.getElementById("display").value += value;
// }

// function clearDisplay() {
//   document.getElementById("display").value = "";
// }

// function deleteLast() {
//   let display = document.getElementById("display");
//   display.value = display.value.slice(0, -1);
// }

// function calculateResult() {
//   try {
//     document.getElementById("display").value = eval(
//       document.getElementById("display").value
//     );
//   } catch (e) {
//     alert("Invalid expression");
//   }
// }

function appendToDisplay(value) {
    let display = document.getElementById("display");
  
    if (value === "%") {
      let currentValue = display.value;
      if (currentValue) {
        display.value = (parseFloat(currentValue) / 100).toString();
      }
    } else {
      display.value += value;
    }
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      let expression = document.getElementById("display").value;
      // Replace percentage values with their equivalent decimal values
      expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
      document.getElementById("display").value = eval(expression);
    } catch (e) {
      alert("Invalid expression");
    }
  }
  
