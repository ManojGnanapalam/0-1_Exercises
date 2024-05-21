class Animal {
    constructor (name , legcount, speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }

    speak(){
        console.log("hi there " + this.speaks);
    }
}

let dog = new Animal("dog", "4", "bhow bhow")

dog.speak()