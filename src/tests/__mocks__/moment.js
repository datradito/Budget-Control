/** Mockeo moment para que me devuelva siempre el mismo timestamp asi no falla el test
 * Ver docs https://jestjs.io/docs/en/manual-mocks
 */
const moment = require.requireActual('moment');

 export default (timestamp = 0) => {
    return moment(timestamp);
};