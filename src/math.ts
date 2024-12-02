export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function power(a: number, b: number): number {
    return Math.pow(a, b);
}

export function modulus(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot calculate modulus with divisor zero");
    }
    return a % b;
}

export function squareRoot(a: number): number {
    if (a < 0) {
        throw new Error("Cannot compute square root of negative number");
    }
    return Math.sqrt(a);
}

export function absolute(a: number): number {
    return Math.abs(a);
}

export function log10(a: number): number {
    if (a <= 0) {
        throw new Error("Logarithm input must be greater than zero");
    }
    return Math.log10(a);
}

export function sine(a: number): number {
    return Math.sin(a);
}

export function cosine(a: number): number {
    return Math.cos(a);
}

export function tangent(a: number): number {
    return Math.tan(a);
}
