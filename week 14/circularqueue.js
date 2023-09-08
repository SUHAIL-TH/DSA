class circularqueue{
    constructor(capacity){
        this.items=new Array(capacity)
        this.currentLength=0
        this.capacity=capacity
        this.rear=-1
        this.front=-1
 
    }
    isFull(){
        return this.currentLength===this.capacity
    }
    isEmpty(){
        return  this.currentLength===0
    }
    enqueue(element){
         if(!this.isFull()){
             this.rear=(this.rear+1)%this.capacity
            this.items[this.rear]=element
            this.currentLength=+1
            if(this.front===-1){
                this.front=this.rear
            }
         }
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
        }else{
            this.items[this.front]=null
            this.front=(this.front+1)%this.capacity
            this.currentLength-=-1
            if(this.isEmpty()){
                this.rear=-1
                this.front=-1
            }
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty")
        }else{
            let i
            let str=""
           
            for(i=this.front;i!=this.rear;i=(i+1)%this.capacity){
                str+=this.items[i]+" "
            }
            str+=this.items[i]
            console.log(str)
        }
    }
    peek(){
        if(!this.isEmpty()){
        return this.items[this.front]
        }
        return null
    }
}

const circle=new circularqueue( 5)
circle.enqueue(6)
circle.enqueue(9)
circle.enqueue(5)
circle.enqueue(56)
circle.enqueue(67)

circle.dequeue()
circle.enqueue(65)


circle.print()
// console.log(circle.peek())


