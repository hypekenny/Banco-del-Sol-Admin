import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../constants/types";
import styles from "./AccountsStyles.module.css";
import constants from "../constants/constants.module.css";
import { MdEdit } from "react-icons/md";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { useState } from "react";
import { getAccounts, updateAccount } from "../../redux/actions";

export function Accounts() {
  const allAccounts = useSelector((state: rootState) => state.account);
  const dispatch = useDispatch();
  const [view, setView] = useState({ view: "", index: -1 });
  const [confirm, setConfirm] = useState(true);
  const [amount, setAmount] = useState(0);

  function handleUpdate(email: string, amount: number) {
    updateAccount(email, amount);
    setTimeout(() => {
      dispatch(getAccounts());
      setView({ view: "", index: -1 });
    }, 500);
  }
  return (
    <div>
      {/* <div>
        {allAccounts &&
          allAccounts.map((acc, i) => (
            <div key={i} className={constants.card}>
              <label className={constants.text}>email: {acc.email}</label>
              <label className={constants.text}>cvu: {acc.cvu}</label>
              {view.index !== i ? (
                <label className={constants.text}>
                  amount: {acc.balance && acc.balance.amount}
                </label>
              ) : null}
              {view.view === "edit" && view.index === i ? (
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
                    <button
                      className={styles.borderlessBtn}
                      onClick={() => handleUpdate(acc.email, amount)}
                    >
                      <IoIosCheckmarkCircleOutline
                        className={styles.confirmBtn}
                      />
                    </button>
                    <button
                      className={styles.borderlessBtn}
                      onClick={() => setView({ view: "", index: -1 })}
                    >
                      <IoIosCloseCircleOutline className={styles.closeBtn} />
                    </button>
                  </div>
                ) : null
              ) : (
                <button
                  className={styles.borderlessBtn}
                  onClick={() => setView({ view: "edit", index: i })}
                >
                  <MdEdit className={styles.updateBtn} />
                </button>
              )}
            </div>
          ))}
      </div> */}
      <div>
        <div>
          <h1>Lista de cuentas</h1>
        </div>
        <div className={styles.main}>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>CVU</th>
                <th>Amount</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {allAccounts.length === 0 ? (
                <tr>
                  <th className={styles.filaUnica} colSpan={7}>
                    No se encontraton cuentas
                  </th>
                </tr>
              ) : null}

              {allAccounts &&
                allAccounts.map((acc, i) => (
                  <tr className={styles.fila}>
                    <td>{acc.email}</td>
                    <td>{acc.cvu}</td>
                    <td>{acc.balance && acc.balance.amount}</td>
                    <td>
                      <div className={styles.amount}>
                        {view.view === "edit" && view.index === i ? (
                          confirm ? (
                            <div className={styles.btnContainer}>
                              <div>
                                <input
                                  type="number"
                                  name="amount"
                                  className={styles.inputAmount}
                                  onChange={(e) =>
                                    setAmount(parseInt(e.target.value))
                                  }
                                />
                              </div>
                              <button
                                className={styles.borderlessBtn}
                                onClick={() => handleUpdate(acc.email, amount)}
                              >
                                <IoIosCheckmarkCircleOutline
                                  className={styles.confirmBtn}
                                />
                              </button>
                              <button
                                className={styles.borderlessBtn}
                                onClick={() => setView({ view: "", index: -1 })}
                              >
                                <IoIosCloseCircleOutline
                                  className={styles.closeBtn}
                                />
                              </button>
                            </div>
                          ) : null
                        ) : (
                          <button
                            className={styles.borderlessBtn}
                            onClick={() => setView({ view: "edit", index: i })}
                          >
                            <MdEdit className={styles.updateBtn} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      ;
    </div>
  );
}
