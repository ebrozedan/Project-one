
console.log("Hello World")
function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
    return sum;
}
function sub(num1, num2){
    const diff = num1 - num2;
    console.log(diff);
    return sum;
}
function div(num1, num2){
    if(num2 ==0){
        throw new Error("pleas change the number")
    }
    const quotint = num1 / num2;
    console.log(quotint);
    return sum;
}
function mul(num1, num2){
    const product = num1 + num2;
    console.log(product);
    return sum;
}
function pow(n, p) {
    if (p == 1) return n;
    return n * pow(n, p - 1);
}

let n = 8;

let power = 3

console.log(pow(n, power));

function cos(ab){
    ab =Math.cosh(20)
   return ab;
}