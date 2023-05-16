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
        let node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.next=null
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    index(value,index){
        if(index<0 || index>this.size){
            console.log("invalid index")
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }

    }
    remove(index){
        if(index<0||index>this.size){
            console.log("invalid index")
            return
        }
        let removeNode
        if(index==0){
            removeNode=this.head
            this.head=this.head.next
            
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removevalue(value){
        if(this.isEmpty()){
            return null
        }if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let removeNode
            let prev=this.head
            while(prev.next  && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                removeNode=prev.next
             prev.next=removeNode.next
             this.size--

            }  
            return null
            
        }
    }
      
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let curr=this.head
        let i=0
        while(curr){
            if(curr.value===value){
                return i
            }
            curr=curr.next
            i++
        }
        return -1
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next

        }this.head=prev
        
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

}

let list =new linkedList()
console.log(list .isEmpty());

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