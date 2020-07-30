
function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(-1 * array[i])
    }
    return newArray
}

function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(2 * array[i])
    }
    return newArray 
}

function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)
    }
    return newArray
}

function reduceToTotal(array, starting = 0) {
    let total = starting 
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total 
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true 
}

function reduceToAnyTrue(array) {
    for (let i = 0; i< array.length; i++) {
        if (array[i]) return true
    }
    return false 
}