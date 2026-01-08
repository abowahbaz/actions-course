const greet = require("../src/app").greet;

test("greet function returns correct greeting message", () => {
  expect(greet("Alice")).toBe("Hello, Alice!");
  expect(greet("Bob")).toBe("Hello, Bob!");
});
