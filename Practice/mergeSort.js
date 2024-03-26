function mergeSort(array){
    if(array.length<2){
        return array
    }
    const mid = Math.floor(array.length/2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let sortedArray = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return(sortedArray.concat(left, right))
}

const array = [12, 11, 13, 5, 6]
console.log(mergeSort(array));