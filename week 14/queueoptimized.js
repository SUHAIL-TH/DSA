class Queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        delete this.items[this.front]
        this.front++
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    size(){
        return this.rear-this.front
        
    }
    peek(){
        return this.items[this.front]
    }
    print(){
        console.log(this.items);
    }
}
const queue=new Queue()

queue.enqueue(10)
queue.enqueue(550)
queue.enqueue(50) 
queue.dequeue()
queue.print()
console.log(queue.peek())
console.log(queue.isEmpty())