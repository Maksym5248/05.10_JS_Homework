var product = 1;

for (var i = 1; i <= 100; i++){

    if (i % 3 === 0){
        product = product * i;
    }
}

console.log(product);