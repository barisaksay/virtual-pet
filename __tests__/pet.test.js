const Pet = require("../pet")

describe('pet constructor tests', () => { 
    let fido;
    beforeEach(()=>{
       fido = new Pet("fido")
    })

    it("should create an instance of Pet",()=>{
        expect(fido).toBeInstanceOf(Pet)
    })

    it("should set name prop",()=> {
        expect(fido.name).toBe("fido")
    })

    it("should have initial age=0",()=>{
        expect(fido.age).toBe(0)
    })

    it("should have initial fitness 10",()=>{
        expect(fido.fitness).toBe(10);
    })

    it("should have initial hunger 0",()=>{

        expect(fido.hunger).toBe(0);
    })

    it("growUp should increment age by 1 ",()=>{
        fido.growUp()
        expect(fido.age).toBe(1)
    })

    it("growUp should increase hunger by 5",()=>{
        fido.growUp()
        expect(fido.hunger).toBe(5);
    })

    it("growUp should decrease fitness by 3",()=>{
        fido.growUp()
        expect(fido.fitness).toBe(7);
    })

    it("walk method should increase fitness by 4",()=>{
        fido.fitness=1
        fido.walk()
        expect(fido.fitness).toBe(5);
    })

    it("fitness should not exceed 10",()=>{
        fido.walk()
        expect(fido.fitness).toBe(10);
    })

    it("feed method decrease hunger by 3",()=>{
        fido.hunger=7;
        fido.feed()
        expect(fido.hunger).toBe(4);
    })

    it("hunger should not go below 0",()=>{
        fido.feed()
        expect(fido.fitness).toBe(0);
    })


    it("checkUp:fitness<=3 only should return I need walk",()=>{
        fido.fitness=3;
        fido.hunger=4;
        expect(fido.checkUp()).toEqual("I need a walk");
    })

    it("checkUp:hunger>=5 only should return I need walk",()=>{
        fido.hunger=5;
        expect(fido.checkUp()).toEqual("I am hungry");
    })


    it("checkUp:hunger>=5 && fitness<=3 should return I am hungry AND I need a walk",()=>{
        fido.hunger=5;
        fido.fitness=3;
        expect(fido.checkUp()).toEqual("I am hungry AND I need a walk");
    })

    it("checkUp:hunger<5&& fitness>3 should return I feel great!",()=>{
        fido.hunger=3;
        fido.fitness=7;
        expect(fido.checkUp()).toEqual("I feel great!");
    })

    it("isAlive returns true",()=>{
        
        expect(fido.isAlive).toBe(true);
    })

    it("isAlive returns false: condition hunger",()=>{
        fido.hunger=11
        expect(fido.isAlive).toBe(false);
    })

    it("isAlive returns false: condition fitness",()=>{
        fido.fitness=0
        expect(fido.isAlive).toBe(false);
    })

    it("isAlive returns false: condition age",()=>{
        fido.age=30
        expect(fido.isAlive).toBe(false);
    })
    
 })