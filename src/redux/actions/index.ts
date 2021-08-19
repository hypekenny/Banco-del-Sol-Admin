import {account, transaction, user} from '../../types';

export const SET_USERS = 'SET_USERS';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

export function setUsers(users: user) {
    return (dispatch) => {
        dispatch({
            type: SET_USERS,
            payload: users,
        });
    };
}
export function setAccounts(accounts: account) {
    return (dispatch) => {
        dispatch({
            type: SET_ACCOUNTS,
            payload: accounts,
        });
    };
}
export function setTransactions(transactions: transaction) {
    return (dispatch) => {
        dispatch({
            type: SET_TRANSACTIONS,
            payload: transactions,
        });
    };
}
