import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions';
import styles from './Welcome.module.css';
export function Welcome() {
    const dispatch = useDispatch();
    const [data, setData] = useState({user: 'admin@admin.com', password: 'admin123'});
    return (
        <div className={styles.container}>
            <div>
                <img
                    className={styles.imgLogo}
                    src="https://cdn.discordapp.com/attachments/872492726397042688/874643755158892594/Banco-del-Sol-Logo.png"
                    alt=""
                />
                <h1 className={styles.welcome}>Bienvenido a la app administradora de banco del sol,</h1>
                <h1 className={styles.welcome}>hecha por la cohorte 14-a de Henry</h1>
            </div>

            <div className={styles.form}>
                <div className={styles.formText}>
                    <label>usuario : </label>
                    <input className={styles.input} type="text" value={data.user} onChange={(e) => setData({...data, user: e.target.value})} />
                </div>
                <div className={styles.formText}>
                    <label>contraseña : </label>
                    <input
                        className={styles.input}
                        type="password"
                        value={data.password}
                        onChange={(e) => setData({...data, user: e.target.value})}
                    />
                </div>
                <button className={styles.btn} onClick={() => (data.user.length > 0 && data.password.length > 0 ? dispatch(login(data)) : null)}>
                    iniciar sesion
                </button>
            </div>
        </div>
    );
}
