import axios from 'axios';
import firebase from 'firebase';
import {user} from '../../components/constants/types';
require('firebase/firebase-auth');

export const SET_USERS = 'SET_USERS';
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_TOKEN = 'SET_TOKEN';

export function createUser(user: any, address: any, password: string) {
    user.address = address;
    console.log('dentro del index', user);
    return (dispatch: any) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email.toLowerCase(), password)
            .then((response) => {
                response.user?.getIdToken().then(async (idToken) => {
                    await axios.post(`http://localhost:3001/api/user/`, user, {
                        headers: {
                            authorization: `Bearer ${idToken}`,
                        },
                    });
                    dispatch(getUsers(idToken));
                    dispatch(getAccounts());
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function getUsers(token: string) {
    return async (dispatch: any) => {
        try {
            const response = await axios.get('http://localhost:3001/api/user/all', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            dispatch({
                type: SET_USERS,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export function getAccounts() {
    return async (dispatch: any) => {
        try {
            const response = await axios.get('http://localhost:3000/api2/account');
            dispatch({
                type: SET_ACCOUNTS,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export function getTransactions() {
    return async (dispatch: any) => {
        const response = await axios.get('http://localhost:3000/api2/transactions');
        dispatch({
            type: SET_TRANSACTIONS,
            payload: response.data,
        });
    };
}

export async function deleteUser(users: user[], token: string, dispatch: any) {
    try {
        await axios.delete('http://localhost:3001/api/user/', {
            headers: {
                authorization: `Bearer ${token}`,
            },
            data: {users},
        });
        dispatch(getUsers(token));
        dispatch(getAccounts());
    } catch (error) {
        console.log(error);
    }
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
