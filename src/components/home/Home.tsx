import React from 'react';
import styles from './HomeStyles.module.css';
import {Users} from '../users/Users';
import {Accounts} from '../accounts/Accounts';
import {Transactions} from '../transactions/Transactions';
import {useState} from 'react';
import {Data} from '../data/Data';
import constants from '../constants/constants.module.css';

export function All() {
    const [view, setView] = useState('data');
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h1 className={styles.title}>Banco del Sol Admin App</h1>
                <button className={constants.btn} onClick={() => setView('data')}>
                    data
                </button>
                <button className={constants.btn} onClick={() => setView('user')}>
                    users
                </button>
                <button className={constants.btn} onClick={() => setView('acc')}>
                    accounts
                </button>
                <button className={constants.btn} onClick={() => setView('tran')}>
                    transactions
                </button>
            </div>
            <div className={styles.information}>
                {view === 'data' ? <Data /> : null}
                {view === 'user' ? <Users /> : null}
                {view === 'acc' ? <Accounts /> : null}
                {view === 'tran' ? <Transactions /> : null}
            </div>
        </div>
    );
}
