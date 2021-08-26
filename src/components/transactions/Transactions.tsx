import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import {getTransactions, updateTransaction} from '../../redux/actions';
import {useState} from 'react';
import {MdCached, MdDone, MdCancel} from 'react-icons/md';
import style from './TransactionsStyles.module.css';

export function Transactions() {
    const transactionsStore = useSelector((state: rootState) => state.transaction);
    const [view, setView] = useState('completed');
    const dispatch = useDispatch();

    function handleUpdate(id: string, condition: string) {
        updateTransaction(id, condition);
    }

    function empty(con: string) {
        let empty = true;
        transactionsStore.forEach((t) => {
            if (con === 'completed' && t) empty = false;
            if (t.condition === con) empty = false;
        });
        return empty;
    }

    return (
        <div className={style.container}>
            <div className={style.topBar}>
                <h1>Lista de transacciones</h1>
                <div className={style.buttons}>
                    <button className={style.btn} onClick={() => dispatch(getTransactions())}>
                        <MdCached style={{width: 15, height: 15, alignSelf: 'center'}} />
                    </button>
                    <button className={style.btn} onClick={() => setView('completed')}>
                        Completadas
                    </button>
                    <button className={style.btn} onClick={() => setView('pending')}>
                        Pendientes
                    </button>
                    <button className={style.btn} onClick={() => setView('declined')}>
                        Rechazadas
                    </button>
                    <button className={style.btn} onClick={() => setView('failed')}>
                        Fallidas
                    </button>
                </div>
            </div>

            <div className={style.main}>
                <table>
                    <thead>
                        <tr>
                            <th>Sender email</th>
                            <th>Receiver email</th>
                            <th>Valor</th>
                            <th>Tipo</th>
                            <th>Comentario</th>
                            <th>Fecha</th>
                            <th>Condicion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsStore &&
                            transactionsStore.map((tran, i) =>
                                tran.condition === view ? (
                                    <tr className={style.fila}>
                                        <td>{tran.senderEmail}</td>
                                        <td>{tran.receiverEmail}</td>
                                        <td>{tran.value}</td>
                                        <td>{tran.type}</td>
                                        <td>{tran.comment}</td>
                                        <td>{tran.date.toString().split(' ').slice(0, 5).join(' ')}</td>
                                        <td>
                                            <div className={style.pending}>
                                                {tran.condition}
                                                {tran.condition === 'pending' ? (
                                                    <div className={style.btnsPending}>
                                                        <button className={style.btnPending} onClick={() => handleUpdate(tran.id, 'accepted')}>
                                                            <MdDone
                                                                style={{
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: 'green',
                                                                    alignSelf: 'center',
                                                                }}
                                                            />
                                                        </button>
                                                        <button className={style.btnPending} onClick={() => handleUpdate(tran.id, 'declined')}>
                                                            <MdCancel
                                                                style={{
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: 'red',
                                                                    alignSelf: 'center',
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </td>
                                    </tr>
                                ) : null
                            )}
                        {empty(view) ? (
                            <tr>
                                <th className={style.filaUnica} colSpan={7}>
                                    No se encontraton transacciones
                                </th>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
