import { add, multiply, divide } from "../src/math";

describe("Math functions", () => {
    test("add: adds two positive numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("add: adds a positive and a negative number", () => {
        expect(add(5, -3)).toBe(2);
    });

    test("add: adds two negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test("add: adds zero", () => {
        expect(add(0, 5)).toBe(5);
        expect(add(5, 0)).toBe(5);
    });

    test("multiply: multiplies two positive numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test("multiply: multiplies by zero", () => {
        expect(multiply(5, 0)).toBe(0);
        expect(multiply(0, 5)).toBe(0);
    });

    test("multiply: multiplies negative numbers", () => {
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(2, -3)).toBe(-6);
        expect(multiply(-2, -3)).toBe(6);
    });

    test("divide: divides two positive numbers", () => {
        expect(divide(6, 3)).toBe(2);
    });

    test("divide: divides negative numbers", () => {
        expect(divide(-6, 3)).toBe(-2);
        expect(divide(6, -3)).toBe(-2);
        expect(divide(-6, -3)).toBe(2);
    });

    test("divide: divides by one", () => {
        expect(divide(5, 1)).toBe(5);
    });

    test("divide: throws error when dividing by zero", () => {
        expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
    });
});
