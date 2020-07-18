// Your code here

function mapToNegativize(array){
  let neg= [];
  array.forEach(function(e) {
    e= e* (-1);
    neg.push(e)})
  return neg};

function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i])
    }
  return r
  }

function mapToDouble(array){
  let double= [];
  array.forEach(function(e) {
    e= e*2;
    double.push(e)
  })
  return double
}

function mapToSquare(array){
  let double= [];
  array.forEach(function(e) {
    e= e**2;
    double.push(e)
  })
  return double
}


function reduceToTotal(array, base=0){
  let total= base;
  array.forEach(function(e){
    total = total + e
  })
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}
