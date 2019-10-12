/*
//represents CHESS GAME
type Color = 'Black' | 'White'
type Fila = 'A' | 'B' | 'C' |'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game {
    private pieces = Game.makePieces()

    private static makePieces() {
        return [
            
            //Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),

            // Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),
            
            // Bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),


        ]
    }
}

//a chess piece
abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: Fila, 
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }
    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): boolean
}

//A set of coordinates for a piece
class Position {
    constructor(
        private file: Fila,
        private rank: Rank
    ) {}
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}


class King extends Piece {
    canMoveTo(position:Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

 */




 /*

//Using 'this' as a return type
let set = new Set
set.add(1).add(2).add(3)
set.has(2) // true
set.has(4) // false

class Set {
    has(value: number): Set {
        // ...
    }
    add(value: number): MutableSet {
        // ...
    }
}
*/


/*

interface Animal {
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void
}

interface Feline {
    meow(): void
}

class Cat implements Animal, Feline {
    name = 'Whiskers'
    eat(food: string) {
        console.info('Ate some', food, ". Mmm!")
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
    meow(){
        console.info('Meow')
    }
}
*/




/*

//Design Patterns
//Factory Pattern
type Shoe = {
    purpose: string
}
class BalletFlat implements Shoe {
    purpose = 'dancing'
}
class Boot implements Shoe {
    purpose = 'woodcutting'
}
class Sneaker implements Shoe {
    purpose = 'walking'
}

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        switch (type) {
        case 'balletFlat': return new BalletFlat
        case 'boot': return new Boot
        case 'sneaker': return new Sneaker
        }
    }
}

//Builder Pattern ?
class RequestBuilder {
    private url: string | null = null
    private data: object | null = null
    private method: 'get' | 'post' | null = null

    setURL(url:string): this {
        this.url = url
        return this
    }
    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
        }
        setData(data: object): this {
        this.data = data
        return this
        }
    send() {}
}
new RequestBuilder()
.setURL('/users')
.setMethod('get')
.setData({firstName: 'Anna'})
.send() 
*/




/*




//Exercises
//#2 When you mark a class’s constructor as private, that means you can’t instantiate or extend
//the class. What happens when you mark it as protected instead? Play around with this in
//your code editor, and see if you can figure it out.
type a = number
type b = string

class Blueprint {
    constructor(a:a)
}
*/

//3. Extend the implementation we developed “Factory Pattern” to make it safer, at the expense
//of breaking the abstraction a bit. Update the implementation so that a consumer knows at
//compile time that calling Shoe.create('boot') returns a Boot and calling
//Shoe.create('balletFlat') returns a BalletFlat (rather than both returning a Shoe).
//Hint: think back to “Overloaded Function Types”.