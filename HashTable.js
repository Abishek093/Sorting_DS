class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = 0
    }
    hash(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }
    set(key, value){
        const index = this.hash(key)
        this.table[index] = value
        this.size++
    }
    get(key){
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index = this.hash(key)
        if(this.table[index]){
            this.table[index] = undefined
            this.size --
            return true
        }else{
            return false
        }
    }
    dispaly(){
        for(let i = 0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50)
table.set("name","Bruce")
table.set("Age", 20)
table.dispaly()
console.log(table.size);

table.remove("age")
table.dispaly()
console.log(table.size);