function mapToNegativize(sourceArray) {
  let negativeArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    negativeArray.push(sourceArray[i] * -1)
  }
  return negativeArray
}


function mapToNoChange(sourceArray) {
  let sameArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    sameArray.push(sourceArray[i])
  }
  return sameArray
}

function mapToDouble(sourceArray) {
  let doubleArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    doubleArray.push(sourceArray[i] * 2)
  }
  return doubleArray
}

function mapToSquare(sourceArray) {
  let squareArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    squareArray.push(sourceArray[i] ** 2)
  }
  return squareArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let arrayTotal = startingPoint
  sourceArray.forEach(element => arrayTotal += element)
  return arrayTotal
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === false) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === true) {
      return true
    }
  }
  return false
}
