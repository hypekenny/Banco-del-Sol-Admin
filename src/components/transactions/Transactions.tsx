import React from 'react';
import {useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import constants from '../constants/constants.module.css';
import {updateTransaction} from '../../redux/actions';
import {useState} from 'react';

export function Transactions() {
    const allTransactions = useSelector((state: rootState) => state.transaction);
    const [view, setView] = useState('pending');
    return (
        <div>
            <div>
                <h1>Transaction list</h1>
                <button className={constants.btn} onClick={() => setView('pending')}>
                    pending
                </button>
                <button className={constants.btn} onClick={() => setView('completed')}>
                    completed
                </button>
                <button className={constants.btn} onClick={() => setView('failed')}>
                    declined
                </button>
            </div>
            {view === 'pending'}
            {view === 'completed'}
            {view === 'declined'}
            {allTransactions &&
                allTransactions.map((tran, i) =>
                    tran.condition === view ? (
                        <div key={i} className={constants.card}>
                            <button onClick={() => updateTransaction(tran.id, 'accepted')}>accept</button>
                            <button onClick={() => updateTransaction(tran.id, 'declined')}>decline</button>
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
