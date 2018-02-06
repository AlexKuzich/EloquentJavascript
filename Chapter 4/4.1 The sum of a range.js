function range(start, end, step){
    var arrayOfNumbers = [];
    if (start <= end) {
        if (step === undefined)
            step = 1;
        for (var i = start; i <= end; i += step)
            arrayOfNumbers.push(i);
    } else {
        if (step === undefined)
            step = -1;
        for (var j = start; j >= end; j += step)
            arrayOfNumbers.push(j);
    }
    return arrayOfNumbers;
}

function sum(arrayOfNumbers){
    var sumOfNumbers = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++)
        sumOfNumbers += arrayOfNumbers[i];
    return sumOfNumbers;
}

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 10, 2));
console.log(range(6,3));
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]