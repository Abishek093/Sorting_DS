class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty")
            return null;
        }
        return this.items[this.items.length-1]
    }

    size(){
        return this.items.length
    }

    clear(){
        this.items = []
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top element:", stack.peek());  // Output: 3
console.log("Stack size:", stack.size());   // Output: 3
console.log("Popped element:", stack.pop()); // Output: 3
console.log("Stack size after pop:", stack.size()); // Output: 2
