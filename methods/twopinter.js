//this contain the code for  doing two pinter

//Write the code for reverse an array usin gtow pointer?


let array=[1,2,3,4,5,6]

function reversearray(array){
    let left=0
    let right=array.length-1
    while(left<right){
        let temp=array[left]
        array[left]=array[right]
        array[right]=temp

        //increment the pointers
        left++
        right-- //decremetn the pointer
        
    }
    return array

}

let data=reversearray(array)
console.log(data)//reveresed array data