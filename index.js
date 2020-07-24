// Your code here
function mapToNegativize(sourceArray){
  let negativeArray = []
  for (let i = 0; i < sourceArray.length; i++){
    negativeArray.push(sourceArray[i] * (-1))
  }
  return negativeArray
}

function mapToNoChange(sourceArray){
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++){
    newArray.push(sourceArray[i])
  }
  return newArray
}

function mapToDouble(sourceArray){
  let doubledArray = []
  for (let i = 0; i < sourceArray.length; i++){
    doubledArray.push(sourceArray[i] * 2)
  }
  return doubledArray
}

function mapToSquare(sourceArray){
  let squareddArray = []
  for (let i = 0; i < sourceArray.length; i++){
    squareddArray.push(sourceArray[i] ** 2)
  }
  return squareddArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++){
    total += sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++){
    if(!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++){
    if(!!sourceArray[i]) return true
  }
  return false
}