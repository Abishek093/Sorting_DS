function BubleSort(arr){
    n=arr.length
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

const arr = [4,6,12,3,8,10]
console.log(BubleSort(arr)); 