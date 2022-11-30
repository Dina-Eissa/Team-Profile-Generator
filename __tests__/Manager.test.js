// using Manager constructor
const Manager = require("../lib/Manager");

// creating manager object
test("creates an Manager object", () => {
  const manager = new Manager("Dina", 10, "dina.eissa@gmail.com", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Dina", 10, "dina.eissa@gmail.com.com");

  expect(manager.getRole()).toEqual("Manager");
});
