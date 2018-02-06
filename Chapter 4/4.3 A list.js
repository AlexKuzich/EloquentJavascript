/*function arrayToList(array){
    var listValue = array.shift();
    var list;
    if (array[0] !== undefined) {
        list = {
            value: listValue,
            rest: arrayToList(array)
        }
    } else {
        list = {
            value: listValue,
            rest: null
        }
    }
    return list;
}*/

//fastest
function arrayToList(array){
    var list = null;
    for (var i = 0; i < array.length; i++){
        list = {
            value: array[array.length - 1 - i],
            rest: list
        }
    }
    return list;
}

/*function listToArray(list) {
    var array = [];
    array.push(list.value);
    if (list.rest !== null) {
        var returnedArray = listToArray(list.rest);
        for (var i = 0; i < returnedArray.length; i++)
            array.push(returnedArray[i]);
    }
    return array;
}*/

//fastest
function listToArray(list){
    var array = [];
    for (var node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}

function prepend(element, list){
    return {
        value: element,
        rest: list
    }
}

/*function nth(list, position){
    if (position !== 0 && list.rest === null)
        return undefined;
    else if (position === 0)
        return list.value;
    else
        return nth(list.rest, position - 1);
}

//fastest
function nth(list, position){
    var i = 0;
    for (var node = list; node; node = node.rest){
        if (i === position){
            return node.value;
        }
        i++;
    }
}*/

function nth(list, n) {
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20