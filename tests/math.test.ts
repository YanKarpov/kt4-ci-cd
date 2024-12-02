import { add, multiply, divide } from "../src/math";

describe("Math functions", () => {
    test("add: adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("multiply: multiplies two numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test("divide: divides two numbers", () => {
        expect(divide(6, 3)).toBe(2);
    });

    test("divide: throws error when dividing by zero", () => {
        expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
    });
});
