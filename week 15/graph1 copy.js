class Graph{
    constructor(){
        this.adajacenlist={}
    }
    addvertex(vertex){
        if(!this.adajacenlist[vertex]){
            this.adajacenlist[vertex]=new Set()
        }
    }
    addedge(vertex1,vertex2){
        if(!this.adajacenlist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adajacenlist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adajacenlist[vertex1].add(vertex2)
        this.adajacenlist[vertex2].add(vertex1)
    }
    removevertex(vertex){
        if(!this.adajacenlist[vertex]){
            console.log("there is no such vertex")
            return 
        }else{
         for(let adjacentvertex of this.adajacenlist[vertex]){
            this.removeedge(vertex,adjacentvertex)
         }    
        }
    }
    display(){
        for(let vertex in this.adajacenlist){
            console.log(vertex+"--->"+[...this.adajacenlist[vertex]])
        }
    }
    bfs(startindex){
        let visted=new Set()
        let queue=[]
        visted.add(startindex)
        queue.push(startindex)
        while(queue.length){
            let vertex=this.queue.shift()
            console.log(vertex)
            for(let neighbour of this.adajacenlist[vertex]){
                if(!visted.has(neighbour)){
                    visted.add(neighbour)
                    queue.push(neighbour)
                }
            }

        }
    }
    dfs(startindex){
        let visted=new Set()
        let explore=(vertex)=>{
            visted.add(vertex)
            console.log(vertex)
            for(let vertex of this.adajacenlist[vertex]){
                if(!visted.has(vertex)){
                    
                    explore(vertex)
                }
            }

        }
        exploare(startindex)
    }

}

const graph=new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addedge("A","B")
graph.addedge("B","C")
graph.display()