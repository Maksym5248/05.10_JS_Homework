do {
    var number1 = +prompt("Введіть перше число");
    var number2 = +prompt("Введіть друге число");
    var operation = prompt("яку з операцій над числами ви бажаэте виконати +, -, *, /");
    var result;

    switch(operation){
    case "+": {
         result = number1 + number2;
         break;
        }
    case "-":{
        result = number1 - number2;
        break;
        }
    case "*":{
        result = number1 * number2;
        break;
        }
    case "/":{
        result = number1 / number2;
        break;
        }

    default:
        break;
    }

    console.log(result);

    var m = confirm("вибажаєте продовжити ?");

} while (m)

