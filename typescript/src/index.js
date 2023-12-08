// let age : number = 20;
// if (age < 50)
//     age += 10;
// console.log(age);
// let numbers: number[] = [1, 2, 3];
// let city: string = "Nairobi";
// let age: number = 20;
// let isMarried: boolean = true;
// Tuple
// let person: [string, number] = [city, age];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
