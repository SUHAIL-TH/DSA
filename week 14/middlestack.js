let stack=[1,2,3,4,5]

let mid=Math.round(stack.length/2)
let srt3=[]
while(stack.length>mid){
    srt3.push(stack.pop())
}
stack.pop()
stack.push(6)
while(srt3.length>0){
    stack.push(srt3.pop())
}

console.log(stack)