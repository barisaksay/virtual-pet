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
 })