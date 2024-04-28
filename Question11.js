let string = "Hello World!";
let integer = 123;
let boolean = true;
let value = null;
const specialVariable = undefined;
const biginteger = 12345678910;
let obj = {
    a : 1,
    b : 2,
    c : 3
};
let arr = [1,2,3,4,5];

let age = prompt("Enter your Age :");
if(age>=18){
    console.log("You are eligible for voting");
}else if(age>120){
    console.log("Please enter Valid age");
}else{
    console.log("You are not eligible for voting");
}

let sum = (a,b) =>{
    return a+b;
};

function calculate(a,b){
    let operand = prompt("enter any mathematical operation to perform on two values");
    if(operand==='+'){
        return a+b;
    }else if(operand==='-'){
        return a-b;
    }else if(operand==='*'){
        return a*b;
    }else if(operand==='/'){
        return a/b;
    }else{
        console.log("enter any operation to perform");
    }
}

for (let i in arr){
    console.log(arr[i]);
}

arr.forEach((item)=>{
    console.log(item);
});