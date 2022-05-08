let rev = 0;
let num = 123456;
let lastDigit;

while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
}
console.log("Número Reverso : " + rev);


for (let i = 1; i <= 1000; i++) {
    if ((i % 2) == 1) {
        console.log(i);
    }
}

