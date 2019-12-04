import moment from  'moment'

//DATA PARA LOS TESTS

export default [
    {
        id: '1',
        descrip: 'Gas',
        note: '',
        importe: 195,
        creadoAt: 0
    },
    {
        id: '2',
        descrip: 'Luz',
        note: '',
        importe: 109500,
        creadoAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        descrip: 'Varios',
        note:'',
        importe: 4500,
        creadoAt: moment(0).add(4, 'days').valueOf()
    }
];