function mapToNegativize(sourceArray) {
    let newArray = [];
    for (let e of sourceArray) {
        newArray.push(e * -1);
    }
    return newArray;
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let newArray = [];
    for (let e of sourceArray) {
        newArray.push(e * 2);
    }
    return newArray;
}

function mapToSquare(sourceArray) {
    let newArray = [];
    for (let e of sourceArray) {
        newArray.push(e ** 2);
    }
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let e of sourceArray) {
        total += e;
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    let truthy = true;
    for (let e of sourceArray) {
        if (!e) {
            truthy = false;
            break;
        }
    }
    return truthy;
}

function reduceToAnyTrue(sourceArray) {
    let truthy = false;
    for (let e of sourceArray) {
        if (e) {
            truthy = true;
            break;
        }
    }
    return truthy;
}