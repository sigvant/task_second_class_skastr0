// Exercise 1
// let operand = 1;
//
// let addOneToOperand = (operand) => {
//   result = operand + 1;
//   return result;
// }

// Exercise 2
// let operand = prompt("Choose an integer","like 0 or 7 or 21...")
//
// let addOneToOperand = (operand) => {
//   result = +operand + 1;
//   return alert(result);
// }
//
// addOneToOperand(operand);

// Exercise 3
// let firstOperand = prompt("Choose an integer","like 0 or 7 or 21...");
// let secondOperand = prompt("Choose another integer", "like 5 or 9 or even 14...");
//
// let addOperands = (firstOperand, secondOperand) => {
//   result = +firstOperand + +secondOperand;
//   return alert(result);
// }
//
// addOperands(firstOperand, secondOperand);

// Exercise 4
// let firstOperand = prompt("Choose an integer","like 0 or 7 or 21...");
// let secondOperand = prompt("Choose another integer", "like 5 or 9 or even 14...");
//
// let addOperands = (firstOperand, secondOperand) => {
//   result = +firstOperand + +secondOperand;
//   return alert(result);
// }
//
// let operandVerification = (firstOperand, secondOperand) => {
//   if(typeof +firstOperand==='number' && (+firstOperand%1)===0) {
//     if(typeof +secondOperand==='number' && (+secondOperand%1)===0) {
//       addOperands(firstOperand, secondOperand);
//     } else {
//       alert("Both numbers need to be integers");
//     }
//   } else {
//     alert("Both numbers need to be integers");
//   }
// }
//
// operandVerification(firstOperand, secondOperand);

// Exercise 5, 6 and 7
// let firstOperand = prompt("Choose an integer","like 0 or 7 or 21...");
// let secondOperand = prompt("Choose another integer", "like 5 or 9 or even 14...");
// let operator = prompt("Choose to Add (+), to Subtract (-), to Multiply (*) or to Divide (/)")
//
// let addOperands = (firstOperand, secondOperand) => {
//   result = +firstOperand + +secondOperand;
//   return alert(result);
// }
//
// let subtractOperands = (firstOperand, secondOperand) => {
//   result = +firstOperand - +secondOperand;
//   return alert(result);
// }
//
// let multiplyOperands = (firstOperand, secondOperand) => {
//   result = +firstOperand * +secondOperand;
//   return alert(result)
// }
//
// let divideOperands = (firstOperand, secondOperand) => {
//   if(+secondOperand === 0) {
//     alert("Thou shant divide by Zero")
//   } else {
//   result = +firstOperand / +secondOperand;
//   return alert(result)
//   }
// }
//
// let reloadPage = () => {
//   return location.reload();
// }
//
// let operandVerification = (firstOperand, secondOperand, operator) => {
//
//   if(typeof +firstOperand==='number' && (+firstOperand%1)===0) {
//
//     if(typeof +secondOperand==='number' && (+secondOperand%1)===0) {
//
//       if(operator == '+') {
//
//         addOperands(firstOperand, secondOperand);
//
//       } else if (operator == '-') {
//
//         subtractOperands(firstOperand, secondOperand);
//
//       } else if (operator == '*') {
//
//         multiplyOperands(firstOperand, secondOperand);
//
//       } else if (operator == '/') {
//
//         divideOperands(firstOperand, secondOperand);
//
//       } else {
//
//         alert("You have to choose to add or to subtract!")
//         reloadPage();
//
//       }
//
//     } else {
//
//       alert("Both numbers need to be integers");
//       reloadPage();
//     }
//
//   } else {
//
//     alert("Both numbers need to be integers");
//     reloadPage();
//   }
//
// }
//
// operandVerification(firstOperand, secondOperand, operator);


//Exercise 8

let basicCalculator = () => {

  let firstOperand = prompt("Choose an integer","like 0 or 7 or 21...");
  let secondOperand = prompt("Choose another integer", "like 5 or 9 or even 14...");
  let operator = prompt("Choose to Add (+), to Subtract (-), to Multiply (*), to Divide (/), to exponentiate the first number second number times (pow)","+");

  let addOperands = (firstOperand, secondOperand) => {
    result = +firstOperand + +secondOperand;
    return alert(result);
  }

  let subtractOperands = (firstOperand, secondOperand) => {
    result = +firstOperand - +secondOperand;
    return alert(result);
  }

  let multiplyOperands = (firstOperand, secondOperand) => {
    result = +firstOperand * +secondOperand;
    return alert(result)
  }

  let divideOperands = (firstOperand, secondOperand) => {
    if(+secondOperand === 0) {
      alert("Thou shant divide by Zero")
    } else {
    result = +firstOperand / +secondOperand;
    return alert(result)
    }
  }

  let powerOperands = (firstOperand, secondOperand) => {
    result = math.pow(+firstOperand,+secondOperand);
    return alert(result)
  }

  let reloadPage = () => {
    return location.reload();
  }

  let operandVerification = (firstOperand, secondOperand, operator) => {

    if((typeof +firstOperand==='number') && ((+firstOperand%1)===0) && (firstOperand != null)) {

      if((typeof +secondOperand==='number') && ((+secondOperand%1)===0) && (secondOperand != null)) {

        if(operator == '+') {

          addOperands(firstOperand, secondOperand);

        } else if (operator == '-') {

          subtractOperands(firstOperand, secondOperand);

        } else if (operator == '*') {

          multiplyOperands(firstOperand, secondOperand);

        } else if (operator == '/') {

          divideOperands(firstOperand, secondOperand);

        } else if (operator == 'pow') {

          powerOperands(firstOperand, secondOperand);

        } else {

          alert("You have to choose a valid operator!")
          reloadPage();

        }

      } else {

        alert("Both numbers need to be integers");
        reloadPage();
      }

    } else {

      alert("Both numbers need to be integers");
      reloadPage();
    }

  }

  operandVerification(firstOperand, secondOperand, operator);

}

let arrayCalculator = () => {

  let array = [];
  let number = 0;
  let condition = true;
  let operator = 0;
  let emptyArray = false;

  let reloadPage = () => {
    return location.reload();
  }

  let sumArray = (operand) => {
    let result = 0;
    for(let i = 0; i < operand.length; i++){
      result = result + operand[i];
    }
      return alert(result)
  }

  let averageArray = (operand) => {
    let result = 0;
    for(let i = 0; i < operand.length; i++){
      result = result + operand[i];
    }
      return alert(result/operand.length)
  }

  let fillArray = () => {

    while(condition) {
        number = prompt("Enter an integer, Esc/Click Cancel to stop entering numbers", "1");
        if ((typeof +number === 'number') && ((+number%1)===0)) {
          array.push(+number);
        } if (number === null) {
          alert("Array filling process stopped");
          condition = false;
          array = array.slice(0,-1);
        }
     }
  }

  let arrayOperationVerification = () => {

    operator = prompt("Would you like to sum the elements of the array? (+) or to average the array? (avg)");

    if(operator == '+') {

      sumArray(array);

    } else if (operator == 'avg') {

      averageArray(array);

    } else {
      alert("You have to choose a valid operator");
    }
  }

  let isArrayEmpty = (array) => {
      if (array.length == 0) {
          alert("Array is empty");
          emptyArray = true;
      } else {
          arrayOperationVerification();
      }
  }

  fillArray();
  isArrayEmpty(array);

}
