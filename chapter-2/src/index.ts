let a = 1 + 2;
let b = 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;

//in order to have a difference between TS and JS, variables must be explicitly typed: see var e
let e:number = a + 'klajshd'; 

console.log(a, b, c, d, e);