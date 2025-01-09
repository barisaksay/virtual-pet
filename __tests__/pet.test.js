const Pet = require("../pet")

describe('pet constructor tests', () => { 
    it("should create an instance of Pet",()=>{
        let testPet= new Pet("petto")
        expect(testPet).toBeInstanceOf(Pet)
    })
 })