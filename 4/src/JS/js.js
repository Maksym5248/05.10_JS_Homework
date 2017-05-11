do {
    var number1 = +prompt("Введіть перше число");
    var number2 = +prompt("Введіть друге число");
    var sum;
    var i;

    if ( number1 > number2) {
        sum = number2;
        for (i = number1 - number2; i > 0;i--) {
            number2++;
            sum = sum + number2;
        }

    } else {
        sum = number1;
        for (i = number2 - number1; i > 0;i--){
            number1++;
            sum = sum + number1;
         }
    }

    console.log(sum);

    var m =  confirm("Чи бажаєте ви продовжити ?");

} while (m);

