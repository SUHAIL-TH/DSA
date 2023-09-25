class TrieNode{
    constructor(){
        this.map=new Map()
    }
}

var endSymbol="*"
var root=new TrieNode()

class Trie{
    psuffixtrie(str){
        for(var i=0;i<str.length;i++){
            this.insert(i,str)
           }
    }

    insert(index,str){
        var node=root
        for(var j=index;j<str.length;j++){
            let ltr=str.charAt(j)
            var newNode=new TrieNode()
            if(!node.map.has(ltr)){
                node.map.set(ltr,newNode)
            }
            node=node.map.get(ltr)
        }
        node.map.set(endSymbol,null)
    }

    contain(str){
        var node=root
        for(var i=0;i<str.length;i++){
            var letter=str.charAt(i)
            if(!node.map.has(letter)){
                return false
            }
            node=node.map.get(letter)
        }
        return node.map.has(endSymbol)
    }
}

const t=new Trie()
t.psuffixtrie("mannan")
console.log(t.contain("an"));