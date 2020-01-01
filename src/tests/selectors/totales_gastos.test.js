import totales_gastos from '../../selectors/totales_gastos';
import gastos from '../fixtures/gastos';

test('Deberia ser 0 si no hay gastos', () => {
    const res = totales_gastos([]);
    expect(res).toBe(0);
});

test('Deberia mostrar un total si es unico gasto', () => {
    const res = totales_gastos( [gastos[0]] );
    expect(res).toBe(195);
});

test('Deberia mostrar total de todos los gastos', () => {
    const res = totales_gastos( gastos );
    expect(res).toBe(114195);
});