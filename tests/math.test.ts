import { add, multiply, divide, subtract, power, modulus, squareRoot, absolute, log10, sine, cosine, tangent } from "../src/math";

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

    test("subtract: subtracts two positive numbers", () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test("subtract: subtracts a positive and a negative number", () => {
        expect(subtract(5, -3)).toBe(8);
    });

    test("subtract: subtracts two negative numbers", () => {
        expect(subtract(-5, -3)).toBe(-2);
    });

    test("power: raises a number to a power", () => {
        expect(power(2, 3)).toBe(8);
    });

    test("modulus: calculates modulus of two numbers", () => {
        expect(modulus(5, 3)).toBe(2);
        expect(modulus(10, 2)).toBe(0);
    });

    test("modulus: throws error when dividing by zero", () => {
        expect(() => modulus(5, 0)).toThrow("Cannot calculate modulus with divisor zero");
    });

    test("squareRoot: calculates square root of a positive number", () => {
        expect(squareRoot(9)).toBe(3);
    });

    test("squareRoot: throws error for negative number", () => {
        expect(() => squareRoot(-9)).toThrow("Cannot compute square root of negative number");
    });

    test("absolute: calculates absolute value of a number", () => {
        expect(absolute(-5)).toBe(5);
        expect(absolute(5)).toBe(5);
    });

    test("log10: calculates logarithm base 10 of a number", () => {
        expect(log10(100)).toBe(2);
    });

    test("log10: throws error for non-positive number", () => {
        expect(() => log10(0)).toThrow("Logarithm input must be greater than zero");
        expect(() => log10(-10)).toThrow("Logarithm input must be greater than zero");
    });

    test("sine: calculates sine of an angle", () => {
        expect(sine(Math.PI / 2)).toBeCloseTo(1);
    });

    test("cosine: calculates cosine of an angle", () => {
        expect(cosine(Math.PI)).toBeCloseTo(-1);
    });

    test("tangent: calculates tangent of an angle", () => {
        expect(tangent(Math.PI / 4)).toBeCloseTo(1);
    });
});
