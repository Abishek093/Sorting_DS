function BubbleSort(arr){
    const n = arr.length
    for(let i = 0; i<n; i++){
        for(j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

const arr = [4,6,12,3,8,10]
console.log(BubbleSort(arr)); 