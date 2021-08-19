import React from 'react';
import styles from './HomeStyles.module.css';
import {Users} from '../users/Users';
import {Accounts} from '../accounts/Accounts';
import {Transactions} from '../transactions/Transactions';
import {useState} from 'react';

export function All() {
    const [view, setView] = useState('all');
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <button className={styles.btn} onClick={() => setView('all')}>
                    all
                </button>
                <button className={styles.btn} onClick={() => setView('user')}>
                    users
                </button>
                <button className={styles.btn} onClick={() => setView('acc')}>
                    accounts
                </button>
                <button className={styles.btn} onClick={() => setView('tran')}>
                    transactions
                </button>
                <button className={styles.btn} onClick={() => setView('data')}>
                    data
                </button>
            </div>
            <div className={styles.information}>
                {view === 'all' || view === 'user' ? <Users /> : null}
                {view === 'all' || view === 'acc' ? <Accounts /> : null}
                {view === 'all' || view === 'tran' ? <Transactions /> : null}
            </div>
        </div>
    );
}
