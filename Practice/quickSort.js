function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1];
    let leftArray = [];
    let rightArray = [];
    for(i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }
    return[...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}


const arr = [12, 11, 13, 5, 6]
console.log(quickSort(arr));