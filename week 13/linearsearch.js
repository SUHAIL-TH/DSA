let arr=[1,2,3,4,5,6]
function linearsearch(n){
    for(let i=0;i<arr.length;i++){
        if(n==arr[i]){
            return i
            
        }
    }
    return -1
}

console.log(linearsearch(5))

/////////////binary search

function binarysearch(arr,value){
    let leftindex=0
    let rightindex=arr.length-1
    while(leftindex<=rightindex){
        let middleindex=Math.floor((leftindex+rightindex)/2)
        if(value==arr[middleindex]){
            return middleindex
        }
        if(value>arr[middleindex]){
           return leftindex=middleindex+1
        }else{
          return  rightindex=middleindex-1
        }
    }
     return -1
}

console.log(binarysearch([1,2,3,4,5],4))

// function rurse(n)
// {
//     newn=n-1
//     if(n>0){
//         console.log(n);
//         rurse(newn)

//     }
// }

// rurse(5)

// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

// function fubinacci(n){
//     if(n<2){
//         return n
//     }
//     return fubinacci(n-1)+ fubinacci(n-2)
// }
// console.log(fubinacci(7)); 

//
