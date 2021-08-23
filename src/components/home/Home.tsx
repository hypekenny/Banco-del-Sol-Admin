import React from "react";
import styles from "./HomeStyles.module.css";
import { Users } from "../users/Users";
import { Accounts } from "../accounts/Accounts";
import { Transactions } from "../transactions/Transactions";
import { useState } from "react";
import { Data } from "../data/Data";

export function All() {
  const [view, setView] = useState("data");
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {/* Sacar clase del div 17 */}
        <div className={styles.divImgLogo}>
          <img
            className={styles.imgLogo}
            src="https://cdn.discordapp.com/attachments/872492726397042688/874643755158892594/Banco-del-Sol-Logo.png"
            alt=""
          />
        </div>
        <div className={styles.elipse}></div>

        <button className={styles.btn} onClick={() => setView("data")}>
          DATA
        </button>

        <button className={styles.btn} onClick={() => setView("user")}>
          USER
        </button>

        <button className={styles.btn} onClick={() => setView("acc")}>
          ACCOUNT
        </button>

        <button className={styles.btn} onClick={() => setView("tran")}>
          TRANSACCIONES
        </button>
      </div>
      <div className={styles.information}>
        {view === "data" ? <Data /> : null}
        {view === "user" ? <Users /> : null}
        {view === "acc" ? <Accounts /> : null}
        {view === "tran" ? <Transactions /> : null}
      </div>
    </div>
  );
}
