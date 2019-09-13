import {createStore} from 'redux';

export const STEP_ONE = 'STEP_ONE';
export const STEP_TWO = 'STEP_TWO';
export const STEP_THREE = 'STEP_THREE';

const initState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

function reducer(state = initState, action){
    const{type, payload} = action;
    switch(type){
        case STEP_ONE:
            return{
                ...state,
                name: payload.name,
                address: payload.address,
                city: payload.city,
                state: payload.state,
                zip: payload.zip
            }
        default:
            return state;
    }
}

export default createStore(reducer);