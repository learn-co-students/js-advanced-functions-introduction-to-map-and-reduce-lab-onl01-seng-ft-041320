function mapToNegativize(arr) {
    return arr.map(num => num * -1);
}

function mapToNoChange(arr) {
    return arr.slice();
}

function mapToDouble(arr) {
    return arr.map(num => num * 2);
}

function mapToSquare(arr) {
    return arr.map(num => num * num);
}

function reduceToTotal(arr, int = 0) {
    let total = int;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total; 
}

function reduceToAllTrue(arr) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            result = false;
            break;
        }
    }
    return result
}

function reduceToAnyTrue(arr) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result = true;
            break;
        }
    }
    return result
}