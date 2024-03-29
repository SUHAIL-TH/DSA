class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    dfs(startVertex){
        let visited = new Set()
        const explore =(vertex)  => {
            visited.add(vertex)
            console.log(vertex);
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    explore(neighbour)
                }
            }
        }

        explore(startVertex)
    }

    bfs(startVertex){
        let visited = new Set()
        let queue = []

        visited.add(startVertex)
        queue.push(startVertex)
        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
 
}

const graph = new Graph()
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.display() 
console.log("dfs traversek");        // A -> B | B -> A,C | C -> B

graph.dfs('A')          // A B c
// graph.bfs('A')          // A B C    

