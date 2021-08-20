import React from 'react';
import {useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import constants from '../constants/constants.module.css';

export function Transactions() {
    const allTransactions = useSelector((state: rootState) => state.transaction);
    return (
        <div>
            {allTransactions &&
                allTransactions.map((tran, i) => (
                    <div key={i} className={constants.card}>
                        <p>sender email: {tran.senderEmail}</p>
                        <p>receiver email: {tran.receiverEmail}</p>
                        <p>value: {tran.value}</p>
                        <p>type: {tran.type}</p>
                        <p>comment: {tran.comment}</p>
                        <p>date: {tran.date}</p>
                        <p>succeeded: {tran.succeeded}</p>
                    </div>
                ))}
        </div>
    );
}
