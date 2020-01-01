export default (gastos) => {
    //Recibe el array de gastos y devuelve la suma de importes
    return gastos
        .map((gasto) => gasto.importe)
        .reduce((sum, value) => sum + value, 0);
};
 