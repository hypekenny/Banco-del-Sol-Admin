import {action, rootState} from '../../components/constants/types';
import {SET_ACCOUNTS, SET_TRANSACTIONS, SET_USERS, SET_TOKEN, LOGIN} from '../actions';

const initialState: rootState = {
    user: [],
    account: [],
    transaction: [],
    token: '',
    loged: false,
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
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        case LOGIN:
            return {
                ...state,
                loged: action.payload,
            };
        default:
            return {...state};
    }
}
