
const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
      
        it("should initiate an object", () => {
            const obj = new Intern();
         
            expect(typeof(obj)).toEqual("object");
        });
    });
     // test school 
    describe("School", () => {
        it("should create new School", () => {
          const obj = new Intern("Jane", 101, "jane@email.com", "CWRU");
          expect(obj.school).toEqual("CWRU");
        });
      });
          // test getSchool method
    describe("getSchool", () => {
        it("can return school by getSchool method", () => {
          const obj = new Intern("Jane", 101, "jane@email.com", "CWRU");
          expect(obj.getSchool()).toEqual("CWRU");
        });
      });
      // test getRole method
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Intern";//must define role
          const obj = new Intern("Jane", 101, "jane@email.com", "CWRU");
          expect(obj.getRole()).toEqual(role);
        });
      });
});