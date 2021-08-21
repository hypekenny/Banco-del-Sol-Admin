import axios from 'axios';
import {account, transaction, user} from '../../components/constants/types';

export const SET_USERS = 'SET_USERS';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_TOKEN = 'SET_TOKEN';

export function setUsers(users: user) {
    return (dispatch: any) => {
        dispatch({
            type: SET_USERS,
            payload: users,
        });
    };
}
export function setAccounts(accounts: account) {
    return (dispatch: any) => {
        dispatch({
            type: SET_ACCOUNTS,
            payload: accounts,
        });
    };
}
export function setTransactions(transactions: transaction) {
    return (dispatch: any) => {
        dispatch({
            type: SET_TRANSACTIONS,
            payload: transactions,
        });
    };
}
export function setToken(token: string) {
    return (dispatch: any) => {
        dispatch({
            type: SET_TOKEN,
            payload: token,
        });
    };
}

export async function updateTransaction(id: string, condition: string) {
    await axios.post('http://localhost:3000/api2/transactions/update', {id, condition});
}
