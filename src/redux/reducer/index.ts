import {action, rootState} from '../../types';
import {SET_ACCOUNTS, SET_TRANSACTIONS, SET_USERS} from '../actions';

const initialState: rootState = {
    user: [],
    account: [],
    transaction: [],
};

export default function rootReducer(state = initialState, action: action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                user: action.payload,
            };
        case SET_ACCOUNTS:
            return {
                ...state,
                account: action.payload,
            };
        case SET_TRANSACTIONS:
            return {
                ...state,
                transaction: action.payload,
            };
        default:
            return {...state};
    }
}
