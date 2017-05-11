do {
    var number1 = +prompt("Введіть перше число");
    var number2 = +prompt("Введіть друге число");
    var operation = prompt("яку з операцій над числами ви бажаэте виконати +, -, *, /");
    var result;
    if (operation === "+"){
        result = number1 + number2;
    } else if (operation === "-"){
        result = number1 - number2;
    } else if (operation === "*"){
        result = number1 * number2;
    } else if (operation === "/"){
        result  = number1 / number2;
    }
    console.log(result);

    var m = confirm("вибажаєте продовжити ?");

} while (m);