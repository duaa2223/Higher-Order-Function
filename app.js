// function powerOfTwo(arr) {
//     return arr.map(function(num) {
//         return Math.pow(2, num);
//     });
// }

// //ex
// const inputArray = [1, 2, 3, 4, 5];
// const resultArray = powerOfTwo(inputArray);
// console.log(resultArray);

function powerOfTwoFor(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(2, arr[i]));
    }
    return result;
}

// ex
console.log(powerOfTwoFor([1, 2, 3])); 

//
function powerOfTwoForEach(arr) {
    let result = [];
    arr.forEach(function(element) {
        result.push(Math.pow(2, element));
    });
    return result;
}

// ex
console.log(powerOfTwoForEach([1, 2, 3])); 

function powerOfTwoMap(arr) {
    return arr.map(function(element) {
        return Math.pow(2, element);
    });
}

// ex
console.log(powerOfTwoMap([1, 2, 3])); 

//2
function evenOddMap(arr) {
    return arr.map(function(element) {
        if (typeof element !== 'number') {
            return 'N/A';
        }
        return element % 2 === 0 ? 'even' : 'odd';
    });
}

// ex
console.log(evenOddMap([1, 2, 3, "Rawan"])); 
//3
function printNames(arr) {
    arr.forEach(function(name) {
        console.log(name);
    });
}

// ex
printNames(["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"]);

//4
function fizzbuzz(arr) {
    let result = [];
    arr.forEach(function(element) {
        if (element % 3 === 0 && element % 5 === 0) {
            result.push("Fizz Buzz");
        } else if (element % 3 === 0) {
            result.push("Fizz");
        } else if (element % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(element);
        }
    });
    return result;
}

// ex
console.log(fizzbuzz([1, 3, 5, 15, 22, 30])); 






