// // LinkedList
// A single linked list is a linear data structure where each element, called a node, contains a data field and a pointer (or link) to 
// the next node in the sequence. It's characterized by unidirectional traversal, meaning you can only move from one node to the next, 
// and the last node points to null, indicating the end of the list. 

// Here's a more detailed explanation:

// Nodes:
// Each element in the list is a node. A node typically has two parts: 

// Data: Stores the actual value of the element. 
// Next: A pointer (or reference) to the next node in the list. If it's the last node, this pointer will be null. 


// Traversal:

// You can only traverse the list in one direction, from the head (first node) to the tail (last node). 

// Dynamic Size:
// Linked lists can grow or shrink dynamically, unlike arrays that have a fixed size. Memory is allocated for each node as needed. 

// No Random Access:
// You can't directly access a specific node by its index like you can with arrays. You need to traverse the list from the beginning until you reach the desired node. 

// Applications:
// Singly linked lists are used in various applications, including implementing other data structures like stacks and queues, managing dynamic memory, and representing sequences where frequent insertions and deletions are needed


class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    prepend(value){
       
        let node=new Node(value)
        console.log(node)
        if(this.isEmpty()){
          
            this.head=node
        }else{
          
            node.next=this.head
            this.head=node
        }

        this.size++
    }
    append(value){
        let node=new Node(value);
        console.log(node)

        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev=node
            this.size++
        }
    }
    insert(value,index){
        if(index<0||index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            let node= new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next

            }
            node.next=prev.next
            prev.next=node
            this.size++


        }
    }
    removeFrom(index){
        if(index<0||index>this.size){
            return "there is no index"
        }
        let removenode
        if(index==0){
            removenode=this.head
            this.head=this.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                pre=prev.next
            }
            removenode=prev.next
            prev.next=removenode.next
            this.size--
        }
    }
    printLinkedlist(){
        if(this.isEmpty()){
            return "linkedlist is empty"
        }else{
            console.log(this.head)
            let curr=this.head
            let node=""
            for(let i=0;i<this.size;i++){
              
                node+=`${curr.value }, `
                curr=curr.next
            }
            return node
        }
    }
    
}

let linkedlistd=new linkedList()
linkedlistd.prepend(10)
linkedlistd.prepend(12)
linkedlistd.prepend(13)
linkedlistd.prepend(14)
linkedlistd.prepend(15)
linkedlistd.insert(111,2)
console.log(linkedlistd.printLinkedlist())