// Your code here
function mapToNegativize(array) {
    let newArray = []
    array.forEach(element => {
        // this ~ inverts, it's called the NOT Bitwise operator
        // https://www.w3schools.com/js/js_bitwise.asp
        let newNumber = ~element + 1
        newArray.push(newNumber)
    })
    return newArray
}

function mapToNoChange(array) {
    const newArray = array
    return newArray
}

function mapToDouble(array){
    let newArray = []
    array.forEach(element => {
        let newElement = element * 2
        newArray.push(newElement)
    })
    return newArray
}

function mapToSquare(array){
    let newArray = []
    array.forEach(element => {
        let newElement = element * element
        newArray.push(newElement)
    })
    return newArray
}

function reduceToTotal(array, startingPoint = 0){
    let total = startingPoint
    for ( let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array){
    let truthiness = true
    for(let i = 0; i < array.length; i++){
        if (!!array[i] === false){
            truthiness = false
        }
    }
    return truthiness
}

function reduceToAnyTrue(array){
    let truthiness = false
    for(let i = 0; i < array.length; i++){
        if (!!array[i] === true){
            truthiness = true
        }
    }
    return truthiness
}