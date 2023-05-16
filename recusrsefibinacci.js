function fubinaccii(n){
    if(n<2){
        return n
    }
    return fubinaccii(n-1)+fubinaccii(n-2)
}
console.log(fubinaccii(5)) 