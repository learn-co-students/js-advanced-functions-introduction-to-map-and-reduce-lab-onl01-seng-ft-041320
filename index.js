// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(function(num) {
        return num * -1
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(num => {
        return num
    })
}

function mapToDouble(sourceArray) {
    const newArray = []
    for (let i=0; i<sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2 )
    }
    return newArray
    // return sourceArray.map(num => {
    //     return num * 2
    // })
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => {
        return num ** 2
    })
}

function reduceToTotal(sourceArray, startingPoint) {
    function accum(accumulator, currentValue) {
        return accumulator + currentValue
    }
    startingPoint = startingPoint || 0
    return sourceArray.reduce(accum, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.every(function(e) {
        return (!!e === true || e === null)
    })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.some(function(e) {
        return (!!e === true)
    })
}