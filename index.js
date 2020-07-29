// Your code here
/* mapping */
function mapToNegativize(array) {
    let newArray = []
    array.forEach( (number) => { newArray.push( number * -1 ) } )
    return newArray
}

function mapToNoChange(array) {
    return [...array]
}

function mapToDouble(array) {
    let newArray = []
    array.forEach( (number) => { newArray.push( number * 2 ) } )
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    array.forEach( (number) => { newArray.push( number ** 2 ) } )
    return newArray
}

/* reducing */

function reduceToTotal(array, startingPoint = 0) {
    let total = startingPoint;
    array.forEach( (number) => {total += number} )
    return total;
}

function reduceToAllTrue(array) {
    let truthiness = true;
    if (truthiness) {
        array.forEach((element) => {
            if (!!!element) {truthiness = false}
        })
    }

    return truthiness
}

function reduceToAnyTrue(array) {
    let truthiness = false;
    if (!truthiness) {
        array.forEach((element) => {
            if (!!element) {truthiness = true}
        })
    }

    return truthiness
}