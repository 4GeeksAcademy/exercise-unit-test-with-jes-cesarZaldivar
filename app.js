const sum = (a, b) => {
    return a + b;
};

let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra británica
};

// Funciones de conversión
function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    const euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

// Exportar funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
