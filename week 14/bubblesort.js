arr1=[-6,20,8,-2,4] 
 function bubblesort(arr){
    let swapped
    do{
        swapped=false
        for(let i=0 ;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }

        }
    }while(swapped)

 }

 bubblesort(arr1)
 console.log(arr1)
 