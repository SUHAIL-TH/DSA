function recurse(number){
    console.log(number);
    let newnum=number-1
    if(newnum>0){
    
        recurse(newnum)
    }
}
recurse(5)







