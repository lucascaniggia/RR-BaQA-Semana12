import * as functions from './functions';

test('Sum of two numbers', () => {
    expect(functions.suma(2, 2)).toBe(4);
});


test('Subtraction of two numbers', () => {
    expect(functions.resta(4, 2)).toBe(2);
});

test('Multiplication of two numbers', () => {
    expect(functions.multiplicacion(4, 2)).toBe(8);
});

test('Division by zero', () => {
    expect(functions.division(4, 0)).toBe("No se puede dividir por 0");
});

test('Division of two numbers', () => {
    expect(functions.division(4, 2)).toBe(2);
});