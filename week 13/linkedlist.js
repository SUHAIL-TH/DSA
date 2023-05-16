//insert in the staring of linked list 
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    // getsize(){
    //     return this.size
    // }
    prepend(value){
        const node=new Node(value)
    
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
            let prev=this.head
          
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++

    }
    insert(value,index){
        if(index<0&& index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)

        } else{
            let node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
                
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }

        

    }
    removefrom(index){
        if(index<0 || index>this.size){
            return null
        }
        let removenode
        if(index==0){
            removenode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removenode=prev.next
            prev.next=removenode.next
        }
        this.size--
    }
    print (){
        if(this.isEmpty()){
            console.log("this list is empty");
        }else{
            let curr=this.head
            let listpointer=""
            while(curr){
                listpointer+=`${curr.value } `
                curr=curr.next
            }
            console.log(listpointer);
        }
    }
}
const list=new LinkedList()

list.append(10)
list.print()
list.append(100)
list.print()
list.insert(45,0)
list.insert(44,2)
list.print()
list.removefrom(2)
list.print()




