/*type Reserve = {
    (from: Date, to: Date, destination: string): object 
    (from: Date, destination: string): object
    //exercise 3.
    (destination: string): object
}

let reserve: Reserve = (
    fromOrToOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
) => {
      if (typeof fromOrToOrDestination === 'string') {
        return {
            destination: fromOrToOrDestination,
        }
    } else if (fromOrToOrDestination instanceof Date && typeof toOrDestination === 'string') {
        return {
            from: fromOrToOrDestination,
            destination: toOrDestination,
        }
    } else { 
        return {
            from: fromOrToOrDestination, 
            to: toOrDestination,
            destination: destination,
        }    
    }
}

console.log(reserve('Mumbai'));
console.log(reserve(new Date(),'dos'));
console.log(reserve(new Date(), new Date(), 'Havana'));
*/





/*exercise 4. [Hard] Update our call implementation from earlier in the chapter (“Using bounded
polymorphism to model arity”) to only work for functions whose second argument is a
string. For all other functions, your implementation should fail at compile time. */
/*I imagine the solution to this one is by separating the first two arguments which are require, and adding the optional ones after the third argument. 
perhaps it can be done with a method that takes the first two elements/items in the array, and separates them into a new array. 
(first: undefined, second: string, 
function call(
    f: (...args: unknown[]) => unknown,
    ...args: unknown[]
    ): unknown {
    return f(...args)
}
*/








/*5. Implement a small typesafe assertion library, is. Start by sketching out your types. When
you’re done, you should be able to use it like this:


// Compare a string and a string
is('string', 'otherstring') // false

// Compare a boolean and a boolean
is(true, false) // false

// Compare a number and a number
is(42, 42) // true

// Comparing two different types should give a compile-time error
is() // Error TS2345: Argument of type '"foo"' is not assignable to parameter of type 'number'.

// [Hard] I should be able to pass any number of arguments
is([1], [1, 2], [1, 2, 3]) // false*/



type IsCheck = {
    <T>(par0: T, par1: T, /*...par2: T[]*/): boolean
}

let is: IsCheck = (
    par0,
    par1,
    //...part2
) => {
    /*if (part2 !== undefined) {
        //separate each element of the array and compare among them and to par0 and par1
    }  else*/ if (par0 === par1/* && part2 === undefined*/) {
        return true
    }
    else return false
}
console.log(is('string', 'otherstring'));
console.log(is(true, false));
console.log(is(42,42));
//console.log(is(10, 'foo'));
//console.log(is([1], [1, 2], [1, 2, 3]));
//console.log(is(8, 8, 8, 8));
