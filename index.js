// Your code here

function mapToNegativize(sourceArray) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        result.push(-sourceArray[i])
    }
    return result
}

// console.log(mapToNegativize([1, 3, 5, 9]))

// mapToNoChange(sourceArray)
function mapToNoChange(sourceArray) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(sourceArray[i])
    }
    return result
}

// mapToDouble(sourceArray)

function mapToDouble(sourceArray) {
    let result = []
    let i = 0
    while (i < sourceArray.length) {
        result.push(sourceArray[i] * 2)
        i++
    }
    return result
}

// function mapToDouble(sourceArray) {
//     let result = []
//     for (let i = 0; i < sourceArray.length; i++) {
//         result.push(sourceArray[i] *2)
//     }
//     return result
// }

// mapToSquare(sourceArray)

function mapToSquare(sourceArray) {
    let result = []
    let i = 0
    while (i < sourceArray.length) {
        result.push(sourceArray[i] * sourceArray[i])
        i++
    }
    return result
}

// function mapToSquare(sourceArray) {
//     let result = []
//     for (let i = 0; i < sourceArray.length; i++) {
//         result.push(sourceArray[i] * sourceArray[i])
//     }
//     return result
// }

function reduceToTotal(sourceArray, startingPoint=0) {
    // let startingPoint = 0
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

// reduceToAllTrue(sourceArray)

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false
        }
    }
    return true
}

// reduceToAnyTrue(sourceArray)

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            return true
        }
    }
    return false
}