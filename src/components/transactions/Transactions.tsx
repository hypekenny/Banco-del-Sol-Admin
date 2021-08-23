import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../constants/types";
import { getTransactions, updateTransaction } from "../../redux/actions";
import { useState } from "react";
import { MdCached, MdDone, MdCancel } from "react-icons/md";
import style from "./TransactionsStyles.module.css";

export function Transactions() {
  const transactionsStore = useSelector(
    (state: rootState) => state.transaction
  );
  const [view, setView] = useState("all");
  const dispatch = useDispatch();

  function handleUpdate(id: string, condition: string) {
    updateTransaction(id, condition);
    setTimeout(() => {
      dispatch(getTransactions());
    }, 500);
  }

  return (
    <div>
      <div>
        <h1>Transaction list</h1>
        <div className={style.buttons}>
          <button
            className={style.btn}
            onClick={() => dispatch(getTransactions())}
          >
            <MdCached style={{ width: 15, height: 15, alignSelf: "center" }} />
          </button>
          <button className={style.btn} onClick={() => setView("all")}>
            All
          </button>
          <button className={style.btn} onClick={() => setView("pending")}>
            Pending
          </button>
          <button className={style.btn} onClick={() => setView("completed")}>
            Completed
          </button>
          <button className={style.btn} onClick={() => setView("declined")}>
            Declined
          </button>
          <button className={style.btn} onClick={() => setView("failed")}>
            Failed
          </button>
        </div>
      </div>

      {/* <div className={constants.card}>
        
        <label className={style.text}>sender email</label>
        <label className={style.text}>
          receiver email
        </label>
        <label className={style.text}>value</label>
        <label className={style.text}>type</label>
        <label className={style.text}>comment</label>
        <label className={style.text}>
          date:
        </label>
        <label className={style.text}>
          condition
        </label>
      </div>

      {transactionsStore &&
        transactionsStore.map((tran, i) =>
          tran.condition === view || view === "all" ? (
            <div key={i} className={constants.card}>
              {tran.condition === "pending" ? (
                <button onClick={() => handleUpdate(tran.id, "accepted")}>
                  accept
                </button>
              ) : null}
              {tran.condition === "pending" ? (
                <button onClick={() => handleUpdate(tran.id, "declined")}>
                  decline
                </button>
              ) : null}
              <label className={style.text}>
                sender email: {tran.senderEmail}
              </label>
              <label className={style.text}>
                receiver email: {tran.receiverEmail}
              </label>
              <label className={style.text}>value: {tran.value}</label>
              <label className={style.text}>type: {tran.type}</label>
              <label className={style.text}>comment: {tran.comment}</label>
              <label className={style.text}>
                date: {tran.date.toString().split(" ").slice(0, 4).join(" ")}
              </label>
              <label className={style.text}>
                condition:
                <span className={style.text}>{tran.condition}</span>
              </label>
            </div>
          ) : null
        )} */}

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
            {/* <tr>
              <th className={style.filaUnica} colSpan={7}>
                No se encontraton transacciones
              </th>
            </tr> */}
            {transactionsStore &&
              transactionsStore.map((tran, i) =>
                tran.condition === view || view === "all" ? (
                  <tr className={style.fila}>
                    <td>{tran.senderEmail}</td>
                    <td>{tran.receiverEmail}</td>
                    <td>{tran.value}</td>
                    <td>{tran.type}</td>
                    <td>{tran.comment}</td>
                    <td>
                      {tran.date.toString().split(" ").slice(0, 4).join(" ")}
                    </td>
                    <td>
                      <div className={style.pending}>
                        {tran.condition}
                        {tran.condition === "pending" ? (
                          <div className={style.btnsPending}>
                            <button
                              className={style.btnPending}
                              onClick={() => handleUpdate(tran.id, "accepted")}
                            >
                              <MdDone
                                style={{
                                  width: 18,
                                  height: 18,
                                  color: "green",
                                  alignSelf: "center",
                                }}
                              />
                            </button>
                            <button
                              className={style.btnPending}
                              onClick={() => handleUpdate(tran.id, "declined")}
                            >
                              <MdCancel
                                style={{
                                  width: 18,
                                  height: 18,
                                  color: "red",
                                  alignSelf: "center",
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
