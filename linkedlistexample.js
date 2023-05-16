class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}class linkedList{
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
        const  node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    index(value,index){
        const node=new Node(value)
        if(index<0 ||index>this.size){
            console.log("invalid index")
            return

        }
        if(index===0){
            this.prepend(value)
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node

        }
        this.size++
    }
    removeindex(index){
        if(index<0 ||index>this.size){
            console.log("invalid index")
            return
        }
        if(index===0){
            this.head=this.head.next
        }
        else{
            let prev=this.head
            let removeNode
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
    }
    removevalue(value){

        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        if(value===this.head.value){
            this.head=this.head.next
            this.size--
        }else{
            let curr=this.head
            while(curr.next &&curr.next.value!=value){
                curr=curr.next

            }
            if(curr.next){
                let removeNode=curr.next
                curr.next=removeNode.next
                this.size--

            }
            return null

        }
        
       
    }
    reverse(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }
        else{
            let prev=null
           let   curr=this.head
            while(curr){
                let next=curr.next
                curr.next=prev
                prev=curr
                curr=next

            }
            this.head=prev

        }
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }else{
            let curr=this.head
            let list=""
            while(curr){
                list+=`${curr.value} `
                curr=curr.next
            }
            console.log(list)
        }
    }
}

const list=new linkedList()
list.prepend(10)
list.prepend(33)
list.append(78)
list.index(67,0)
list.print()
// list.removevalue(67)
list.reverse()
list.print()