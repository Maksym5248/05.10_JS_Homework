var month = prompt("Введіть назву місяця");
var m = month.toUpperCase();

switch (m){
    case "СІЧЕНЬ": {
        m = 1;
        break;
    }
    case "ЛЮТИЙ": {
        m = 2;
        break;
    }
    case "БЕРЕЗЕНЬ": {
        m = 3;
        break;
    }
    case "КВІТЕНЬ": {
        m = 4;
        break;
    }
    case "ТРАВЕНЬ": {
        m = 5;
        break;
    }
    case "ЧЕРВЕНЬ": {
        m = 6;
        break;
    }
    case "ЛИПЕНЬ": {
        m = 7;
        break;
    }
    case "СЕРПЕНЬ": {
        m = 8;
        break;
    }
    case "ВЕРЕСЕНЬ": {
        m = 9;
        break;
    }
    case "ЖОВТЕНЬ": {
        m = 10;
        break;
    }
    case "ЛИСТОПАД": {
        m = 11;
        break;
    }
    case "ГРУДЕНЬ": {
        m = 12;
        break;
    }

    default:{
        m = "Ви ввели невірну назву місяця";
        break;
    }

}

console.log(m);