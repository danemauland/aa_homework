function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

function madLib(verb, adjective, noun) {
    return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`
}

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

function fizzBuzz(arr) {
    return arr.filter(num => ((num % 5 === 0 || num % 3 == 0) && num % 15 != 0));
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}

function sumOfNPrimes(n) {
    let prime_count = 0
    let sum = 0
    for (let i = 2; prime_count < n; i++) {
        if (isPrime(i)) {
            sum += i
            prime_count++
        }
    }
    return sum
}



console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));