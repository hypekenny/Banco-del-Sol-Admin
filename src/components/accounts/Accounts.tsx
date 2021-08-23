import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {rootState} from '../constants/types';
import styles from './AccountsStyles.module.css';
import constants from '../constants/constants.module.css';
import {MdEdit} from 'react-icons/md';
import {IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline} from 'react-icons/io';
import {useState} from 'react';
import {getAccounts, updateAccount} from '../../redux/actions';

export function Accounts() {
    const allAccounts = useSelector((state: rootState) => state.account);
    const dispatch = useDispatch();
    const [view, setView] = useState({view: '', index: -1});
    const [confirm, setConfirm] = useState(true);
    const [amount, setAmount] = useState(0);

    function handleUpdate(email: string, amount: number) {
        updateAccount(email, amount);
        setTimeout(() => {
            dispatch(getAccounts());
            setView({view: '', index: -1});
        }, 500);
    }
    return (
        <div>
            <div>
                {allAccounts &&
                    allAccounts.map((acc, i) => (
                        <div key={i} className={constants.card}>
                            <label className={constants.text}>email: {acc.email}</label>
                            <label className={constants.text}>cvu: {acc.cvu}</label>
                            {view.index !== i ? <label className={constants.text}>balance: {acc.balance && acc.balance.amount}</label> : null}
                            {view.view === 'edit' && view.index === i ? (
                                confirm ? (
                                    <div className={styles.btnContainer}>
                                        <div>
                                            <input
                                                type="number"
                                                name="amount"
                                                className={styles.inputAmount}
                                                onChange={(e) => setAmount(parseInt(e.target.value))}
                                            />
                                        </div>
                                        <button className={styles.borderlessBtn} onClick={() => handleUpdate(acc.email, amount)}>
                                            <IoIosCheckmarkCircleOutline className={styles.confirmBtn} />
                                        </button>
                                        <button className={styles.borderlessBtn} onClick={() => setView({view: '', index: -1})}>
                                            <IoIosCloseCircleOutline className={styles.closeBtn} />
                                        </button>
                                    </div>
                                ) : null
                            ) : (
                                <button className={styles.borderlessBtn} onClick={() => setView({view: 'edit', index: i})}>
                                    <MdEdit className={styles.updateBtn} />
                                </button>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}

// {view === 'edit' ? (
//     <button className={styles.borderlessBtn}>
//         <MdEdit style={{width: 25, height: 25, alignSelf: 'center'}} />
//     </button>
// ) : confirm ? (
//     <div>
//         <button className={styles.borderlessBtn}>
//             <MdEdit style={{width: 25, height: 25, alignSelf: 'center'}} />
//         </button>
//         <button className={styles.borderlessBtn}>
//             <MdHighlightOff style={{width: 25, height: 25, alignSelf: 'center'}} />
//         </button>
//     </div>
// ) : null}
