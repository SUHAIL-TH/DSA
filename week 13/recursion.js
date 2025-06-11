//this is code is for recerssion part 
//a function call itself is called 

function recurse(number){
    console.log(number);
    let newnum=number-1
    if(newnum>0){
    
        recurse(newnum)
    }
}
recurse(5)







