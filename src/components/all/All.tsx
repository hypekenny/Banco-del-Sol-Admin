import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './AllStyles.module.css';
import {account, rootStore, transaction, user} from '../../types';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export function All() {
    const allUsers = useSelector<rootStore>((state) => state.users);
    const allAccounts = useSelector<rootStore>((state) => state.accounts);
    const allTransactions = useSelector<rootStore>((state) => state.transactions);

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                {/* <Link> */}
                <p>all</p>
                {/* </Link> */}
                <Link to="/users">
                    <p>users</p>
                </Link>
                {/* <Link> */}
                <p>accounts</p>
                {/* </Link> */}
                {/* <Link> */}
                <p>transactions</p>
                {/* </Link> */}
                {/* <Link> */}
                <p>data</p>
                {/* </Link> */}
            </div>
            <div className={styles.container}>
                <div>
                    {allTransactions &&
                        allTransactions.map((tran) => (
                            <div className={styles.transaction}>
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
                <div>
                    {allUsers &&
                        allUsers.map((user) => (
                            <div>
                                <p>name: {user.name}</p>
                                <p>lastname: {user.lastName}</p>
                            </div>
                        ))}
                </div>
                <div>
                    {allAccounts &&
                        allAccounts.map((acc) => (
                            <div>
                                <p>email: {acc.email}</p>
                                <p>cvu: {acc.cvu}</p>
                                <p>amount: {acc.balance.amount}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
