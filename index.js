// Your code here

function mapToNegativize(array){
    const returnArray = []
    for(let i of array){
        returnArray.push(i * -1)
    }
    return returnArray
}
function mapToNoChange(array){
    const returnArray = []
    for(let i of array){
        returnArray.push(i)
    }
    return returnArray
}
function mapToDouble(array){
    const returnArray = []
    for(let i of array){
        returnArray.push(i * 2)
    }
    return returnArray
}
function mapToSquare(array){
    const returnArray = []
    for(let i of array){
        returnArray.push(i ** 2)
    }
    return returnArray
}

function reduceToTotal(array, memo){
    let total = 0
    if (memo){total += memo}
    for(let i of array){
        total += i
    }
    return total
}

function reduceToAllTrue(array){
    let value = true
    for(let b of array){
        value = value && b
    }
    return !!value
}

function reduceToAnyTrue(array){
    let value = false
    for(let b of array){
        value = value || b
    }
    return !!value
}