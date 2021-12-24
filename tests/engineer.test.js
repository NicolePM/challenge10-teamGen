
const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
     
        it("should initiate an object", () => {
            const obj = new Engineer();
          
            expect(typeof(obj)).toEqual("object");
        });
    });
   
    describe("Github", () => {
        it("should create new github", () => {
          const obj = new Engineer("Amal",12, "amal.email@email", "NicolePM");
          expect(obj.github).toEqual("NicolePM");
        });
      });
          // test getGithub method
    describe("getGithub", () => {
        it("can return gitHub username by getGithub method", () => {
          const obj = new Engineer("Amal", 12, "amal.email@email", "NicolePM");
          expect(obj.getGithub()).toEqual("NicolePM");
        });
      });
      // test getRole method
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Engineer";//must define role
          const obj = new Engineer("Amal", 12, "amal.email@email", "NicolePM");
          expect(obj.getRole()).toEqual(role);
        });
      });
});