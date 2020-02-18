const apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// classes
class Car {}

let car: Car = new Car();

// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// When to use type annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

words.forEach(element => {
  if (element === "green") {
    foundWord = true;
    console.log(foundWord);
  }
});
