// sum function create using loop
let sum = 0;
for (let i = 1; i <= 6; i++){
    sum = sum + i;
}
console.log(sum);

// minus function create using loop
let  Minus = 0;
for (let i = 6; i >= 1; i --){
    Minus = Minus + i;
}
console.log(Minus)

// into function create using function
function sumFunction(i){
    if (i == 1){
        return 1;
    }
    return sumFunction(i - 1) * i;
}
console.log(sumFunction(6))

// sum function create using Function

function minusFunction(i){
    if (i == 1){
        return 1;
    }
    return minusFunction(i - 1) + i;
}
console.log(minusFunction(6))

// Minus function create using Function
function intoFunction(i){
    if (i == 1){
        return 1;
    }
    return intoFunction(i - 1) * i;
}
console.log(intoFunction(6))