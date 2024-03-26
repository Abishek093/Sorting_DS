class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    display() {
      return this.items;
    }
  }
  
  // Example usage:
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log("Queue:", queue.display()); // Output: [1, 2, 3]
  console.log("Dequeued item:", queue.dequeue()); // Output: 1
  console.log("Queue:", queue.display()); // Output: [2, 3]
  console.log("Front item:", queue.front()); // Output: 2
  console.log("Queue size:", queue.size()); // Output: 2
  