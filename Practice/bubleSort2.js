function BubleSort(array){
    const length = array.length
    for(let i = 0 ; i < length ; i++){
        for(let j = 0 ; j < length ; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array
} 

const array = [4,6,12,3,8,10]
console.log(BubleSort(array)); 