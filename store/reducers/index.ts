import { combineReducers } from 'redux';
import { action } from '../../types/action';

const authUser = (state = {}, action: action) => {
    switch (action.type) {
        case 'SET_AUTH_USER':
            return action.payload;
        default:
            return state
    }
}

const reducers = combineReducers({
    authUser,
});

export default reducers;