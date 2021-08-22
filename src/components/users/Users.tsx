import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import styles from './UsersStyles.module.css';
import constants from '../constants/constants.module.css';
import {useState} from 'react';
import {createUser} from '../../redux/actions';
import {useEffect} from 'react';
import {MdDelete} from 'react-icons/md';

export function Users() {
    const allUsers = useSelector((state: rootState) => state.user);
    const [newUser, setNewUser] = useState({email: '', name: '', lastName: '', dni: '', phoneNumber: '', birthdate: '', address: {}});
    const [newAddress, setNewAddress] = useState({street: '', number: '', zipcode: '', city: '', province: ''});
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [view, setView] = useState('all');

    function handleChangeUser(e: any) {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    function handleChangeAddress(e: any) {
        setNewAddress({...newAddress, [e.target.name]: e.target.value});
    }

    async function handleCreate() {
        setNewUser({...newUser, address: newAddress});
        setTimeout(() => {
            dispatch(createUser(newUser, password));
        }, 500);
    }

    useEffect(() => {
        wipeData();
    }, [allUsers]);

    function wipeData() {
        setView('all');
        setPassword('');
        setNewUser({email: '', name: '', lastName: '', dni: '', phoneNumber: '', birthdate: '', address: {}});
        setNewAddress({street: '', number: '', zipcode: '', city: '', province: ''});
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button
                    className={constants.btn}
                    onClick={() => {
                        setView('all');
                        wipeData();
                    }}
                >
                    full list
                </button>

                <button className={constants.btn} onClick={() => setView('create')}>
                    create new
                </button>

                <button className={constants.btn} onClick={() => setView('disabled users')}>
                    disabled users
                </button>
            </div>

            {view === 'all' ? (
                <div>
                    {allUsers &&
                        allUsers.map((user, i) => (
                            <div key={i} className={constants.card}>
                                <div>
                                    <input className={styles.checkbox} type="checkbox"></input>
                                    <label className={constants.text}>email: {user.email}</label>
                                    <label className={constants.text}>name: {user.name}</label>
                                    <label className={constants.text}>lastname: {user.lastName}</label>
                                    <label className={constants.text}>dni: {user.dni}</label>
                                    <label className={constants.text}>phonenumber: {user.phoneNumber}</label>
                                    <label className={constants.text}>birthdate: {user.birthdate}</label>
                                </div>
                                <button className={styles.disableBtn}>
                                    <MdDelete className={styles.disableIcon} />
                                </button>
                            </div>
                        ))}
                </div>
            ) : null}
            {view === 'create' ? (
                <div className={styles.createContainer}>
                    <div className={styles.inputContainer}>
                        <div className={styles.label}>
                            <label>email : </label>
                            <input className={styles.input} type="text" name="email" value={newUser.email} onChange={handleChangeUser} />
                        </div>
                        <div className={styles.label}>
                            <label>contraseña : </label>
                            <input
                                className={styles.input}
                                type="text"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.label}>
                            <label>nombre :</label>
                            <input className={styles.input} type="text" name="name" value={newUser.name} onChange={handleChangeUser} />
                        </div>
                        <div className={styles.label}>
                            <label>apellido :</label>
                            <input className={styles.input} type="text" name="lastName" value={newUser.lastName} onChange={handleChangeUser} />
                        </div>
                        <div className={styles.label}>
                            <label>dni :</label>
                            <input className={styles.input} type="text" name="dni" value={newUser.dni} onChange={handleChangeUser} />
                        </div>
                        <div className={styles.label}>
                            <label>telefono :</label>
                            <input className={styles.input} type="text" name="phoneNumber" value={newUser.phoneNumber} onChange={handleChangeUser} />
                        </div>
                        <div className={styles.label}>
                            <label>fecha de nacimiento :</label>
                            <input className={styles.input} type="text" name="birthdate" value={newUser.birthdate} onChange={handleChangeUser} />
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.label}>
                            <label>calle : </label>
                            <input className={styles.input} type="text" name="street" value={newAddress.street} onChange={handleChangeAddress} />
                        </div>
                        <div className={styles.label}>
                            <label>numero :</label>
                            <input className={styles.input} type="text" name="number" value={newAddress.number} onChange={handleChangeAddress} />
                        </div>
                        <div className={styles.label}>
                            <label>codigo postal :</label>
                            <input className={styles.input} type="text" name="zipcode" value={newAddress.zipcode} onChange={handleChangeAddress} />
                        </div>
                        <div className={styles.label}>
                            <label>localidad :</label>
                            <input className={styles.input} type="text" name="city" value={newAddress.city} onChange={handleChangeAddress} />
                        </div>
                        <div className={styles.label}>
                            <label>provincia :</label>
                            <input className={styles.input} type="text" name="province" value={newAddress.province} onChange={handleChangeAddress} />
                        </div>
                        <button className={styles.createBtn} onClick={() => handleCreate()}>
                            CREATE
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
