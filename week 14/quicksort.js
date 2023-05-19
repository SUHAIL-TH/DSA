function quicksort(arr){
    if(arr.length<2){
        return arr
    }
    let left=[]
    let right=[]
    let pevot=arr[arr.length-1]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pevot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pevot,...quicksort(right)]
}
let arr=[8,20,-2,4,-6]
console.log(quicksort(arr));


 