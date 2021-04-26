import * as functions from './functions';

// 1
test('Text', () => {
    expect(functions.texto('Helloworld')).toMatch(/Helloworld/);
});

test('Text - (fail case)', () => {
    expect(functions.texto('Esto es un texto')).not.toMatch(/Estoesuntexto/);
});

// 2
test('Sum of two numbers', () => {
    expect(functions.suma(2, 2)).toBe(4);
});

// 3
test('Subtraction of two numbers', () => {
    expect(functions.resta(4, 1)).toBe(3);
});

// 4
test('Multiplication of two numbers', () => {
    expect(functions.multiplicacion(4, 3)).toBe(12);
});

test('Multiplication of two numbers - (fail case)', () => {
    expect(functions.multiplicacion(5, 3)).not.toBe(12);
});

// 5
test('Division by zero - 1', () => {
    expect(functions.division(4, 0)).toBe("No se puede dividir por 0");
});

test('Division by zero - (fail case)', () => {
    expect(functions.division(3, 0)).not.toBe(Number);
});

test('Division of two numbers - 1', () => {
    expect(functions.division(4, 2)).toBe(2);
});

test('Division of two numbers - 2 (fail case)', () => {
    expect(functions.division(6, 2)).not.toBe(2);
});

// 6
test('Multiplication table - 1', () => {
    expect(functions.tablaMultiplicar(5, undefined)).toStrictEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});

test('Multiplication table - 2', () => {
    expect(functions.tablaMultiplicar(5, 6)).toStrictEqual([0, 5, 10, 15, 20, 25, 30]);
});

// 8
test('Sum of squares', () => {
    expect(functions.anidada(4, 5)).toBe(41);
});

// 9
test('Leading zeros', () => {
    expect(functions.cerosIzq(12, 5)).toBe("00012");
});

test('Leading zeros - (fail case)', () => {
    expect(functions.cerosIzq(12, 3)).not.toBe("12");
});