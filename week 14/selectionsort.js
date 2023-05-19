let arr=[99,4,53,25,6,7,89]

function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        let minindex=i
        
        for (let j=i+1;j<arr.length;j++){
           
            if(arr[j]<arr[minindex]){
                minindex=j
            }
        }
        if(minindex!=i){
            let temp=arr[minindex]
            arr[minindex]=arr[i]
            arr[i]=temp
        }
    }
    console.log("hiii")
    return arr
}
console.log(selectionsort(arr))