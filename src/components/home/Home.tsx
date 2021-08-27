import React from 'react';
import styles from './HomeStyles.module.css';
import {Users} from '../users/Users';
import {Transactions} from '../transactions/Transactions';
import {useState} from 'react';
import {Data} from '../data/Data';
import {Welcome} from '../welcome/Welcome';
import {useSelector} from 'react-redux';
import {rootState} from '../constants/types';

export function Home() {
    const [view, setView] = useState('welcome');
    const loged = useSelector((state: rootState) => state.loged);
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.divImgLogo} onClick={() => setView('welcome')}>
                    <img
                        className={styles.imgLogo}
                        src="https://cdn.discordapp.com/attachments/872492726397042688/874643755158892594/Banco-del-Sol-Logo.png"
                        alt=""
                    />
                </div>
                <div className={styles.elipse}></div>
                {loged ? null : <div onClick={() => alert('inicia sesion para utilizar la aplicacion')} className={styles.notLoged} />}

                <button className={styles.btn} onClick={() => setView('data')}>
                    DATA
                </button>

                <button className={styles.btn} onClick={() => setView('user')}>
                    USUARIOS
                </button>

                <button className={styles.btn} onClick={() => setView('tran')}>
                    TRANSACCIONES
                </button>

                <button className={styles.btn} onClick={() => setView('about')}>
                    SOBRE NOSOTROS
                </button>
            </div>
            <div className={styles.information}>
                {view === 'welcome' ? <Welcome /> : null}
                {view === 'data' ? <Data /> : null}
                {view === 'user' ? <Users /> : null}
                {view === 'tran' ? <Transactions /> : null}
            </div>
        </div>
    );
}
