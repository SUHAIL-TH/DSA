//class
//class is a blue print to create a object it contain the method and properties the object will have

// Object
//object is the real time instances of class , it contain the actual values and can use the method defined in the class


class Hello{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    printName(){
        console.log(`my name is ${this.name} my age is ${this.age}`)
    }
}

const newObj=new Hello("suhail",28)
console.log(newObj.age)
console.log(newObj.name)
newObj.printName()