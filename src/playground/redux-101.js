import { createStore } from 'redux';


//FUNC GENERADORAS DE ACCIONES Q DEVUELVEN OBJ ACCION

/* const aumentaCount = (payload = {}) => ({
        type: 'AUMENTA',
        //si el tipo de payload.aumentaPor es numerico => V : F
        aumentaPor: typeof p
ayload.aumentaPor === 'number' ? payload.aumentaPor : 1,
}); */

//Destructuro:
const aumentaCount = ({aumentaPor = 1} = {}) => ({
        type: 'AUMENTA',
        //aumentaPor: aumentaPor,
        aumentaPor
});

const disminuyeCount = ({disminuyePor = 1} = {}) => ({
    type: 'DISMINUYE',
    disminuyePor
});

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ( { count } ) => ({
    type: 'SET',
    count
})

//REDUCER:
    //1-SON FUNCIONES PURAS
    //2-NUNCA CAMBIA EL state O el action
    
const countReducer = (state = { count : 0}, action)=> {
    switch (action.type) {
        case 'AUMENTA':
            return {
                count: state.count + action.aumentaPor
            }
        
        case 'DISMINUYE':
            return {
                count: state.count - action.disminuyePor
            }
        
        case 'RESET':
            return {
            count: 0
            }
        
        case 'SET':
            return {
                count: action.count
            }      
    
        default:
            return state;
    }
};

const store = createStore( countReducer );


//MONITOREA LOS CAMBIOS DEL STORE
const unsuscribe = store.subscribe( () => (
    console.log(store.getState())
)
    
);

store.dispatch(aumentaCount({aumentaPor:5}));

store.dispatch(aumentaCount());

store.dispatch(resetCount());

store.dispatch(disminuyeCount());

store.dispatch(disminuyeCount({disminuyePor:10}));

store.dispatch(setCount({count:100}));


//LA FUNCION SUSCRIBE DEVUELVE EL VALOR PARA DESACTIVARLA
//unsuscribe();
