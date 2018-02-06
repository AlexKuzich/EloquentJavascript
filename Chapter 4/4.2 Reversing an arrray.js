function reverseArray(arrayToReverse){
    var reversedArray = [];
    for (var i = 0; i < arrayToReverse.length; i++){
        reversedArray.push(arrayToReverse.slice(arrayToReverse.length - (i+1), arrayToReverse.length - i));
    }
    return reversedArray;
}

/*function reverseArrayInPlace(array){
    for (var i = 0; i < array.length; i++) {
        this.array = array.slice(0, i).concat(array.slice(array.length - 1)).concat(array.slice(i, array.length - 1));
        array = this.array;
    }
    arrayValue = this.array;
}*/

function reverseArrayInPlace(array){
    for (var i = 0; i < array.length / 2; i++){
        var old = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = old;
    }
}

// Your code here.

/*console.log(reverseArray(["A", "B", "C", "D"]));*/
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.time();
// → [5, 4, 3, 2, 1]