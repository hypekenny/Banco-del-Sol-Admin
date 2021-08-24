import styles from './Welcome.module.css';
export function Welcome() {
    return (
        <div className={styles.container}>
            <img
                className={styles.imgLogo}
                src="https://cdn.discordapp.com/attachments/872492726397042688/874643755158892594/Banco-del-Sol-Logo.png"
                alt=""
            />
            <h1 className={styles.welcome}>Bienvenido a la app administradora de banco del sol,</h1>
            <h1 className={styles.welcome}>hecha por la cohorte 14-a de Henry</h1>
        </div>
    );
}
