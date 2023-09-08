class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
    print(){                                                            ssss
        console.log(this.items.toString())
    }

}

const stack=new Stack()


console.log(stack.isEmpty());
console.log(stack.size())

stack.push(10)

stack.push(107)


console.log(stack.peek())
stack.print()
  
