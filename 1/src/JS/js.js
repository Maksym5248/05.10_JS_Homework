for (var i = 1; i <= 5; i++) {
    var a = prompt ("Введіть назву предмета");
    var b = +prompt ("Введіть оцінку");
    var c = "У вас низька оцінка з предмету "+a;

    if (b >= 60) {
        c = "У вас високі оцінки !!!";
    } else {
        break;
    }
}

console.warn(c);

