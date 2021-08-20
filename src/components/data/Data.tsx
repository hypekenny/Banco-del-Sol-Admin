import React from 'react';
import {useSelector} from 'react-redux';
import {LineChart, Line, XAxis, YAxis} from 'recharts';
import {rootState} from '../../types';
import styles from './DataStyles.module.css';

export function Data() {
    const allTransactions = useSelector((state: rootState) => state.transaction);

    interface dataT {
        amount: number;
        name: string;
    }
    const data: dataT[] = [];
    allTransactions.map((tran) => {
        const tranMonth = tran.date.toString().split(' ')[1];
        if (!data.length) {
            console.log('solo uno');
            data.push({amount: tran.value, name: tranMonth});
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === tranMonth) {
                console.log('a');
                data[i].amount += tran.value;
            } else {
                console.log('b');
                data.push({amount: tran.value, name: tranMonth});
            }
        }
    });

    data.push({amount: 1200, name: 'Sep'});
    data.push({amount: 2400, name: 'Oct'});
    data.push({amount: 5500, name: 'Nov'});
    data.push({amount: 100, name: 'Dec'});

    console.log('final', data);

    return (
        <div>
            <div className={styles.chart}>
                <LineChart width={600} height={500} data={data}>
                    <Line type="monotone" dataKey="amount" stroke="#ff4b6e" />
                    <XAxis dataKey="name" stroke="#ff4b6e" />
                    <YAxis stroke="#ff4b6e" />
                </LineChart>
            </div>
            <div className={styles.chart}>
                <LineChart width={600} height={500} data={data}>
                    <Line type="monotone" dataKey="amount" stroke="#ff4b6e" />
                    <XAxis dataKey="name" stroke="#ff4b6e" />
                    <YAxis stroke="#ff4b6e" />
                </LineChart>
            </div>
        </div>
    );
}
