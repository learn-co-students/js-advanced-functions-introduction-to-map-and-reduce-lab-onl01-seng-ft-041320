// Your code here

function mapToNegativize(arr){
    let newArr = []
    arr.forEach(element => newArr.push(element * -1));
    return newArr
}

function mapToNoChange(arr){
    let newArr = []
    arr.forEach(element => newArr.push(element));
    return newArr
}

function mapToDouble(arr){
    let newArr = []
    arr.forEach(element => newArr.push(element * 2));
    return newArr
}


function mapToSquare(arr){
    let newArr = []
    arr.forEach(element => newArr.push(element * element));
    return newArr
}


function reduceToTotal(arr, total = 0){

    arr.forEach(element => total += element);
    return total
}

function reduceToAllTrue(arr){
   let newArr = []
    arr.forEach(element => {
            if(!element){
                newArr.push(element)
            }
        });
    if(newArr.length > 0){
        return false
    }
    else{
        return true
    }

}


function reduceToAnyTrue(arr){
    let newArr = []
     arr.forEach(element => {
             if(!!element){
                 newArr.push(element)
             }
         });
     if(newArr.length > 0){
         return true
     }
     else{
         return false
     }

 } 