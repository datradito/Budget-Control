import { createStore, combineReducers } from 'redux';

//Gastos Reducer
const gastosReducerDefault = [];

const gastosReducer = ( state = gastosReducerDefault, action ) => {
    switch(action.type) {
        default:
            return state
    }
}

//Filters Reducer
const filtersReducerDefault = {
    text:'',
    sortBy:'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type) {
        default:
            return state
    }
}


//Store
const store = createStore(
    combineReducers({
        gastos: gastosReducer,
        filters: filtersReducer
    })
)

console.log(store.getState());

//STATE
const demoState = {
    gastos:[{
        id:'alskdsldkags',
        description:'Mi gasto',
        note:'Esto es una nota',
        amount:15000,
        createdAt: 0 //TIMESTAMP
    }],
    filters:{
        text:'gasto',
        sortBy:'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};



