// Importar las funciones del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para la suma
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para convertir euros a dólares
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; // 3.5 euros a dólares
    expect(dollars).toBeCloseTo(expected);
});

// Prueba para convertir dólares a yenes
test("Converting 1 dollar should give 156.5 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = 1 / 1.07 * 156.5; // 1 dólar a yenes
    expect(yen).toBeCloseTo(expected);
});

// Prueba para convertir yenes a libras
test("Converting 156.5 yen should give 0.87 pounds", function() {
    const pounds = fromYenToPound(156.5);
    const expected = 156.5 / 156.5 * 0.87; // 156.5 yen a libras
    expect(pounds).toBeCloseTo(expected);
});
