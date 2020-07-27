// Your code here
function mapToNegativize(sourceArray) { 
    return sourceArray.map(sA => sA * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.slice(0, (sourceArray.length + 1))
}

function mapToDouble(sourceArray) {
    return sourceArray.map(sA => sA * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(sA => sA ** 2 )
}


// function reduceToTotal(sourceArray, startingPoint=0) {
//     return sourceArray.reduce(sA => sA + startingPoint)
// }
// // => 1

// function reduceToTotal(sourceArray, startingPoint=0) {
//     return sourceArray.reduce(function(accumulator, currentValue) {
//          accumulator + currentValue;
//     }, startingPoint);
// }
// // => undefined

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    sourceArray.forEach(sA => total = total + sA)
    return total
    // 
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
    }
    return false
}