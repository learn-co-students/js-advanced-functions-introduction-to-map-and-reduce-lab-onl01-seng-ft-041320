// Your code here
function mapToNegativize(source) {
    const newArr = [];
    for (let i = 0; i < source.length; i++) {
        newArr.push(source[i] * -1);
    }
    return newArr;
}

function mapToNoChange(source) {
    return source;
}

function mapToDouble(source) {
    let array = source;
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

function mapToSquare(source) {
    let array = source;
    for (let i = 0; i < array.length; i++) {
        array[i] **= 2;
    }
    return array;
}

function reduceToTotal(sourceArray, startingPoint) {
    let total;
    if (startingPoint === undefined) {
        total = 0;
        for (let i = 0; i < sourceArray.length; i++) {
            total += sourceArray[i];
        }
    } else {
        total = startingPoint;
        for (let i = 0; i < sourceArray.length; i++) {
            total += sourceArray[i];
        }
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    let result;
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            result = true
        } else {
            result = false
        }
    }
    return result;
}

function reduceToAnyTrue(sourceArray) {
    let result;
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === true) {
            result = true
        } else {
            result = false
        }
    }
    return result;
}