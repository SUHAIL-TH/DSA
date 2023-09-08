// let name="suhail"

// let reverse=name.split('').reverse().join("")

// // console.log(reverse)


// let name="ajmallannut"
// let lenth=name.length
// console.log("length of the string")
// console.log(lenth)

// console.log("concert to uppercase")


//  console.log(name.toUpperCase())



    const vowels = ['A', 'E', 'I', 'O', 'U']
    const splitedText ="SUHAIL THATTAPARAMBIL"
     result=""
    for(let i  = 0; i< splitedText.length; i++){
        var name=false
        for(let j = 0; j < vowels.length ; j++){
            
            if(splitedText[i] == vowels[j]){
               

                name=true
                
                break
            }
            
        }
        if(!name){
            result+=splitedText[i]
        }
    }

 console.log(result)
