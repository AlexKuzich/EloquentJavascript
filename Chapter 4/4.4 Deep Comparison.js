
function deepEqual(val1, val2) {
    if ((typeof(val1) !== "object" || typeof(val2) !== "object") ||(val1 === null || val2 === null))
        return (val1 === val2);
    else if ((typeof(val1) === "object") && (typeof(val2) === "object")) {
        for (var property in val1) {
            if (deepEqual(val1[property], val2[property]) === false)
                return false;
        }
        return true;
    }
}

var book = null;

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, {here: {is: "an"}, object: 2}));

console.log(deepEqual(null, null));