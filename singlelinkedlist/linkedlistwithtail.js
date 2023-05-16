class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    } 

    isEmpty(){
        return this.size == 0;
    }

    getSize(){
        return this.size;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }

    removeFromFrond(){
        if(this.isEmpty()){
            return console.log("No element found as node");
        }else{
            let value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return console.log("No element found as node");
        }
        const value = this.tail.value;
        if(this.size==1){
            this.head = null;
            this.tail = null;
        }else{
            let previous = this.head;
            while(previous.next !== this.tail){
                previous = previous.next;
            }
            previous.next = null
            this.tail = previous
        }
        this.size--
        return value
    }

    print(){
        if(this.isEmpty()){
            return console.log("list is empty");
        }
        let current = this.head;
        let listValues = '';
        for(let i=0;i<this.size;i++){
            listValues+=`${current.value}`;
            current = current.next;
        }
        console.log(listValues);
    }
}

module.exports = LinkedList;

// const list = new LinkedList();

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.removeFromEnd() 
// list.removeFromFrond() 

// list.print();