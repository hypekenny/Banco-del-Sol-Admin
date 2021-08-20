import React from 'react';
import styles from './HomeStyles.module.css';
import {Users} from '../users/Users';
import {Accounts} from '../accounts/Accounts';
import {Transactions} from '../transactions/Transactions';
import {useState} from 'react';
import {Data} from '../data/Data';

export function All() {
    const [view, setView] = useState('data');
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h1 className={styles.title}>Banco del Sol Admin App</h1>
                <button className={styles.btn} onClick={() => setView('data')}>
                    data
                </button>
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
            </div>
            <div className={styles.information}>
                {view === 'data' ? <Data /> : null}
                {view === 'all' || view === 'user' ? <Users /> : null}
                {view === 'all' || view === 'acc' ? <Accounts /> : null}
                {view === 'all' || view === 'tran' ? <Transactions /> : null}
            </div>
        </div>
    );
}
