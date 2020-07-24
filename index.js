//map methods return a new Array

//returns an array with all values made negative
function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * -1)
    }
    return r
  }
//returns an array with the original values
function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i])
    }
    return r
}

//returns an array with the original values multiplied by 2
function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * 2)
    }
    return r
}

//mapToSquare returns an array with the original values squared
function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i])
    }
    return r
}



//reduce methods return a value.

//returns a running total when given a starting point
function reduceToTotal(src, startingPoint=0) {
    for (let i = 0; i < src.length; i++ ) {
        startingPoint = startingPoint + src[i]
      }
      return startingPoint
}

//returns true when all values are truthy
function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (!src[i]) return false
      }
      return true
}

//returns false when no true value is present
function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (src[i]) return true
      }
      return false
}
