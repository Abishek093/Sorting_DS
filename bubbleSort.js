function bubbleSort(arr){
    const n =arr.length

    for(let i = 0; i<n-1; i++){
        for(let j = 0; j<n-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}




const arr = [4,6,12,3,8,10]
console.log(bubbleSort(arr)); 