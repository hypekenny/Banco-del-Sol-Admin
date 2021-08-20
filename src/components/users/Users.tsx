import React from 'react';
import {useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import styles from './UsersStyles.module.css';
import constants from '../constants/constants.module.css';

export function Users() {
    const allUsers = useSelector((state: rootState) => state.user);
    return (
        <div className={styles.container}>
            <div>
                {allUsers &&
                    allUsers.map((user, i) => (
                        <div key={i} className={constants.card}>
                            <p>name: {user.name}</p>
                            <p>lastname: {user.lastName}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
