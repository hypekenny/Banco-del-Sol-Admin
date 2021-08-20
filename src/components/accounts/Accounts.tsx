import React from 'react';
import {useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import styles from './AccountsStyles.module.css';
import constants from '../constants/constants.module.css';

export function Accounts() {
    const allAccounts = useSelector((state: rootState) => state.account);
    return (
        <div className={styles.container}>
            <div>
                {allAccounts &&
                    allAccounts.map((acc, i) => (
                        <div key={i} className={constants.card}>
                            <p>email: {acc.email}</p>
                            <p>cvu: {acc.cvu}</p>
                            <p>amount: {acc.balance && acc.balance.amount}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
