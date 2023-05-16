class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedList{
    constructor(value){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            
            this.head=node
            this.tail=node            
        }else{

            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("list is emmpty");
        }else{
            let curr=this.head
            let listvalue=''
            while(curr){
                listvalue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalue);
        }

    }
    removefromfront(){
        if(this.isEmpty()){
            console.log("list is empty")
            return 
        }else{
            this.head=this.head.next
        }
        this.size--



    }
    removefromend(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        if(this.size===1){
            this.head=null
            this.tail=null

        }else{
            let prev=this.head
            while(prev.next!=this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
        }
    }

}

let list =new linkedList()
console.log(list.isEmpty());

// list.prepend(10)
// list.prepend(22)
list.append(10)
list.append(22)
list.index(4,0)
list.index(9,2)
// list.remove(2)
// list.removevalue(232)
list.print()
list.reverse()
list.print()


// console.log(list.search(55))
console.log(list.getSize());