function titleize(arr, callback) {
    arr.map(function(ele) {
        return `Mx. ${ele} Jingleheimer Schmidt`
    }).forEach(callback)
}

function printCallback(ele) {
    console.log(ele)
}

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`)
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
}

Elephant.prototype.play = function() {
    let trick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
    console.log(`${this.name} the elephant is ${trick}!`);
}

let ellie = new Elephant("Ellie", 80, ["playing the trumpet", "reciting the Odyssey from memory", "convincing the proletariat to rise up against the bourgeoisie. Wow"])
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(eleph) {
    console.log(`${eleph.name} is trotting by!`)
}

herd.forEach(paradeHelper)

function dinerBreakfast() {
    let foods = "I'd like cheesy scrambled eggs please.";
    console.log(foods);
    return function(food) {
        
        foods = foods.slice(0, foods.length - 7) + `and ${food} please.`
        console.log(foods)
    }
}