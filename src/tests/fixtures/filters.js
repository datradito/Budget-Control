import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    fechaInicio: undefined,
    fechaFin: undefined,
};

const altFilters = {
    text: 'Luz',
    sortBy: 'amount',
    fechaInicio: moment(0),
    fechaFin: moment(0).add(3, 'days')
};

export { filters, altFilters };

