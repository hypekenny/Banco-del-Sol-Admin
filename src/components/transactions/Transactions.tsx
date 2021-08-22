import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import constants from '../constants/constants.module.css';
import {getTransactions, updateTransaction} from '../../redux/actions';
import {useState} from 'react';

export function Transactions() {
    const transactionsStore = useSelector((state: rootState) => state.transaction);
    const [view, setView] = useState('pending');
    const dispatch = useDispatch();

    function handleUpdate(id: string, condition: string) {
        updateTransaction(id, condition);
        setTimeout(() => {
            dispatch(getTransactions());
        }, 500);
    }

    return (
        <div>
            <div>
                <h1>Transaction list</h1>
                <button className={constants.btn} onClick={() => dispatch(getTransactions())}>
                    reload
                </button>
                <button className={constants.btn} onClick={() => setView('pending')}>
                    pending
                </button>
                <button className={constants.btn} onClick={() => setView('completed')}>
                    completed
                </button>
                <button className={constants.btn} onClick={() => setView('declined')}>
                    declined
                </button>
                <button className={constants.btn} onClick={() => setView('failed')}>
                    failed
                </button>
            </div>
            {transactionsStore &&
                transactionsStore.map((tran, i) =>
                    tran.condition === view ? (
                        <div key={i} className={constants.card}>
                            {view === 'pending' ? <button onClick={() => handleUpdate(tran.id, 'accepted')}>accept</button> : null}
                            {view === 'pending' ? <button onClick={() => handleUpdate(tran.id, 'declined')}>decline</button> : null}
                            <label className={constants.text}>sender email: {tran.senderEmail}</label>
                            <label className={constants.text}>receiver email: {tran.receiverEmail}</label>
                            <label className={constants.text}>value: {tran.value}</label>
                            <label className={constants.text}>type: {tran.type}</label>
                            <label className={constants.text}>comment: {tran.comment}</label>
                            <label className={constants.text}>date: {tran.date.toString().split(' ').slice(0, 4).join(' ')}</label>
                            <label className={constants.text}>condition: {tran.condition}</label>
                        </div>
                    ) : null
                )}
        </div>
    );
}
