  arr=[8,20,-2,4,-6]

function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        let nextinsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>nextinsert ){
            arr[j+1]=arr[j]
            j=j-1
            
        } 
        arr[j+1]=nextinsert
    }
}

insertionsort(arr)
console.log(arr)