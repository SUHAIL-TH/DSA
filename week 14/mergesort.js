
 function mergesort(arr){
    if(arr.length<2){
        return arr
    }
    let midd =Math.floor(arr.length/2)
    let leftarr=arr.slice(0,midd)
    let rightarr=arr.slice(midd)
   
    return merge(mergesort(leftarr),mergesort(rightarr))
 }

 function merge(leftar,rightar){   
    const sortedarr=[]
    
    while(leftar.length && rightar.length){
        if(leftar[0]<=rightar[0]){
            sortedarr.push(leftar.shift())
        }else{
            sortedarr.push(rightar.shift())
        }
    }
    return [...sortedarr,...leftar,...rightar]
 }
 let arr=[ 8,20,-2,4,-6]
 console.log(mergesort(arr))