import React from 'react';
import {useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import styles from './UsersStyles.module.css';
import constants from '../constants/constants.module.css';
import {useState} from 'react';

export function Users() {
    const allUsers = useSelector((state: rootState) => state.user);
    const [view, setView] = useState('all');
    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <div>
                    <button className={constants.btn} onClick={() => setView('create')}>
                        all
                    </button>
                </div>
                <div>
                    <button className={constants.btn} onClick={() => setView('create')}>
                        create
                    </button>
                </div>
                <div>
                    <button className={constants.btn} onClick={() => setView('create')}>
                        deleted users
                    </button>
                </div>
            </div>

            {view === 'all' ? (
                <div>
                    {allUsers &&
                        allUsers.map((user, i) => (
                            <div key={i} className={constants.card}>
                                <input type="checkbox"></input>
                                <label className={constants.text}>email: {user.email}</label>
                                <label className={constants.text}>name: {user.name}</label>
                                <label className={constants.text}>lastname: {user.lastName}</label>
                                <label className={constants.text}>dni: {user.dni}</label>
                                <label className={constants.text}>phonenumber: {user.phoneNumber}</label>
                            </div>
                        ))}
                </div>
            ) : null}
            {view === 'create' ? <div>pending</div> : null}
        </div>
    );
}
