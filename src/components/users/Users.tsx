import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {rootState, user} from '../constants/types';
import styles from './UsersStyles.module.css';
import {useState} from 'react';
import {getUsers, manageUser} from '../../redux/actions';
import {MdDelete, MdDeleteForever} from 'react-icons/md';
import {IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline} from 'react-icons/io';

export function Users() {
    const allUsers = useSelector((state: rootState) => state.user);
    const token = useSelector((state: rootState) => state.token);
    const dispatch = useDispatch();

    const [disabled, setDisabled] = useState<user[]>([]);
    const [undisabled, setUndisabled] = useState<user[]>([]);
    const [view, setView] = useState({view: 'active', index: -1});
    const [search, setSearch] = useState('');
    const allAccounts = useSelector((state: rootState) => state.account);

    async function addDisabled(user: user) {
        disabled.push(user);
    }

    async function handleDisabled() {
        manageUser(disabled, 'disabled', token, dispatch);
        update();
    }

    async function addUndisabled(user: user) {
        undisabled.push(user);
    }

    async function handleUndisabled() {
        manageUser(undisabled, 'active', token, dispatch);
        update();
    }

    function update() {
        setTimeout(() => {
            dispatch(getUsers(token));
            setDisabled([]);
            setUndisabled([]);
        }, 200);
    }

    function wipeData() {
        setView({view: 'active', index: -1});
    }
    function empty(con: string) {
        let empty = true;
        allUsers.forEach((u) => {
            if (con === 'all' && u) empty = false;
            if (u.condition === con) empty = false;
        });
        return empty;
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerList}>
                <div>
                    <h1>Lista de usuarios</h1>
                    <div className={styles.buttons}>
                        <button
                            className={styles.btn}
                            onClick={() => {
                                wipeData();
                            }}
                        >
                            Activos
                        </button>

                        <button className={styles.btn} onClick={() => setView({view: 'disabled', index: -1})}>
                            Desactivados
                        </button>
                    </div>
                </div>
                <input
                    className={styles.input}
                    placeholder="Ingrese email para buscar..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className={styles.main}>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>DNI</th>
                                    <th>Telefono</th>
                                    <th>Nacimiento</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers &&
                                    allUsers.map((user, i) =>
                                        user.condition === view.view && user.email.includes(search) ? (
                                            <tr className={styles.fila} key={i}>
                                                <td>{user.email}</td>
                                                <td>{user.name}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.dni}</td>
                                                <td>{user.phoneNumber}</td>
                                                <td>{user.birthdate}</td>
                                                <td>
                                                    <div className={styles.condition}>
                                                        {view.index === i ? (
                                                            <div className={styles.condition2}>
                                                                {view.view === 'active' ? (
                                                                    <button
                                                                        className={styles.borderlessBtn}
                                                                        onClick={() => {
                                                                            addDisabled(user);
                                                                            setTimeout(() => {
                                                                                handleDisabled();
                                                                            }, 500);
                                                                        }}
                                                                    >
                                                                        <IoIosCheckmarkCircleOutline className={styles.confirmBtn} />
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        className={styles.borderlessBtn}
                                                                        onClick={() => {
                                                                            addUndisabled(user);
                                                                            setTimeout(() => {
                                                                                handleUndisabled();
                                                                            }, 500);
                                                                        }}
                                                                    >
                                                                        <IoIosCheckmarkCircleOutline className={styles.confirmBtn} />
                                                                    </button>
                                                                )}
                                                                <button
                                                                    className={styles.borderlessBtn}
                                                                    onClick={() => setView({...view, index: -1})}
                                                                >
                                                                    <IoIosCloseCircleOutline className={styles.closeBtn} />
                                                                </button>
                                                            </div>
                                                        ) : view.view === 'active' ? (
                                                            <div>
                                                                <button className={styles.disableBtn} onClick={() => setView({...view, index: i})}>
                                                                    <MdDelete className={styles.disableIcon} />
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <button className={styles.disableBtn} onClick={() => setView({...view, index: i})}>
                                                                    <MdDeleteForever className={styles.disableIcon} />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : null
                                    )}
                                {empty(view.view) ? (
                                    <tr>
                                        <th className={styles.filaUnica} colSpan={8}>
                                            No se encontraton usuarios
                                        </th>
                                    </tr>
                                ) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
                <h1>Lista de cuentas</h1>
                <div className={styles.main}>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>CVU</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allAccounts &&
                                    allAccounts.map((acc, i) =>
                                        view.view === acc.condition && acc.email.includes(search) ? (
                                            <tr className={styles.fila}>
                                                <td>{acc.email}</td>
                                                <td>{acc.cvu}</td>
                                                <td>{acc.balance && acc.balance.amount}</td>
                                            </tr>
                                        ) : null
                                    )}
                                {empty(view.view) ? (
                                    <tr>
                                        <th className={styles.filaUnica} colSpan={8}>
                                            No se encontraton usuarios
                                        </th>
                                    </tr>
                                ) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
