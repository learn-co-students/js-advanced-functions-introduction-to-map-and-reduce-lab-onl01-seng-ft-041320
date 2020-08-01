// Your code here
function mapToNegativize(array) {
    let returnArray = []
    array.forEach(function(a) {
        a = a * -1
        returnArray.push(a)
    })
    return returnArray
}

function mapToNoChange(array) {
    let returnArray = []
    array.forEach(function(a) {
        returnArray.push(a)
    })
    return returnArray
}

function mapToDouble(array) {
    let returnArray = []
    array.forEach(function(a){
        a = a * 2
        returnArray.push(a)
    })
    return returnArray
}

function mapToSquare(array) {
    let returnArray = []
    array.forEach(function(a){
        a = a ** 2
        returnArray.push(a)
    })
    return returnArray
}

function reduceToTotal(array, startPoint=0) {
    let total = startPoint
    array.forEach(function(a) {
        total += a
    })
    return total
}

function reduceToAllTrue(array){
    let result = true
    array.forEach(function(a){
        result = result && !!a
    })
    return result
}

function reduceToAnyTrue(array){
    let result = false
    array.forEach(function(a){
        result = result || !!a
    })
    return result
}