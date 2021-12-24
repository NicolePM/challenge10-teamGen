
const Employee = require('../lib/employee');


//test cases

describe("Employee", () => {
    describe("Initialization", () => {
    
      it("should initiate an object", () => {
        const obj = new Employee();
       
        expect(typeof(obj)).toEqual("object");
      });
    });

    // test name 
    describe("Name", () => {
      it("should create new name", () => {
        const obj = new Employee("Amal");
        expect(obj.name).toEqual("Amal");
      });
    });
    // test id 
    describe("Id", () => {
      it("should create new id", () => {
        const obj = new Employee("Amal",12);
        expect(obj.id).toEqual(12);
      });
    });
    // test email 
    describe("Email", () => {
      it("should create new Email", () => {
        const obj = new Employee("Amal",12, "amal.email@email");
        expect(obj.email).toEqual("amal.email@email");
      });
    });
    // test  getName method
    describe("getName", () => {
      it("can return name by getName method", () => {
        const obj = new Employee("Amal");
        expect(obj.getName()).toEqual("Amal");
      });
    });
    // test getId method
    describe("getId", () => {
      it("can return id by getId method", () => {
        const obj = new Employee("Amal", 12);
        expect(obj.getId()).toEqual(12);
      });
    });
    // test getEmail method
    describe("getEmail", () => {
      it("can return email by getEmail method", () => {
        const obj = new Employee("Amal", 12, "amal.email@email");
        expect(obj.getEmail()).toEqual("amal.email@email");
      });
    });
    // test getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Employee"; //role definition 
        const obj = new Employee("Amal", 12, "amal.email@email");
        expect(obj.getRole()).toEqual(role);
      });
    });
});

