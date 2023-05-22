class Grap{
    constructor(){
        this.map=new Map()
    }
    addvertex(data){
        this.map.set(data,new Array())
    }
    insert(vertex,edge,isbiderect){
        if(!this.map.has(vertex)){
            this.addvertex(vertex)
        }
        if(!this.map.has(edge)){
            this.addvertex(edge)
        }
        this.map.get(vertex).push(edge)
        if(isbiderect){

            this.map.get(edge).push(vertex)
        }
    }
    display(){
        for(var x of this.map.keys()){
            var s=" "
            s+=x+":"
            for(var y of  this.map.get(x)){
                s+=y+" "
            }
            console.log(s)
        }
    }
}

const map=new Grap()
map.insert(3,5,true)
map.insert(3,12,true)
map.insert(11,5,true)
map.insert(9,5,true)
map.insert(3,8,false)
map.display()