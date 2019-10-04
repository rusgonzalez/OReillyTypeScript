/*//examples
function trueOrNull(isTrue: boolean) {
    if (isTrue) {
    return 'true'
    }
    return null
}

const result = trueOrNull(false);
const result1 = trueOrNull(true);
//console.log('result', result, result1);


function stringOrNumber(a: string, b: number) {
    return a || b
}
const x = stringOrNumber('', 4);
const y = stringOrNumber('asd', 46);

//console.log(x);

let d = [1, 'a']
const z = d.map(_ => {
    if (typeof _ === 'number') {
        return _ * 3
    }
    return _.toUpperCase()
});

console.log(z);*/

//Exercises
//1
let h = null;

console.log(h);

//2
let i: 3 = 3
i = 4 // Error TS2322: Type '4' is not assignable to type '3'.

let j = [1, 2, 3]
j.push(4)
j.push('5') // Error TS2345: Argument of type '"5"' is not
// assignable to parameter of type 'number'.

let k: never = 4 // Error TSTS2322: Type '4' is not assignable
// to type 'never'.

let l: unknown = 4
let m = l * 2 // Error TS2571: Object is of type 'unknown'.


