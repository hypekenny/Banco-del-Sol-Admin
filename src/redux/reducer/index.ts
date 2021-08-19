import {action} from '../../types';
import {SET_ACCOUNTS, SET_TRANSACTIONS, SET_USERS} from '../actions';

const initialState = {
    users: [],
    accounts: [],
    transactions: [],
};

export default function rootReducer(state = initialState, action: action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
            };
        case SET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
            };
        default:
            return {...state};
    }
}
