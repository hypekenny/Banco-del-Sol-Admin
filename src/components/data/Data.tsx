import React from 'react';
import {useSelector} from 'react-redux';
import {LineChart, Line, XAxis, YAxis} from 'recharts';
import {rootState} from '../constants/types';
import styles from './DataStyles.module.css';

export function Data() {
    const allTransactions = useSelector((state: rootState) => state.transaction);

    interface monthType {
        name: string;
        amount: number;
        dailyData: dayType[];
    }
    interface dayType {
        number: number;
        name: string;
        amount: number;
    }

    const monthlyData: monthType[] = [];
    allTransactions.forEach((tran) => {
        const tranMonth = tran.date.toString().split(' ')[1];
        const tranDay = tran.date.toString().split(' ')[0];
        const tranDayNumber = parseInt(tran.date.toString().split(' ')[2]);
        if (!monthlyData.length)
            monthlyData.push({amount: tran.value, name: tranMonth, dailyData: [{number: tranDayNumber, amount: tran.value, name: tranDay}]});
        for (let i = 0; i < monthlyData.length; i++) {
            if (monthlyData[i].name === tranMonth) {
                for (let j = 0; j < monthlyData[i].dailyData.length; j++) {
                    if (monthlyData[i].dailyData[j].number === tranDayNumber) monthlyData[i].dailyData[j].amount += tran.value;
                    else monthlyData[i].dailyData.push({number: tranDayNumber, amount: tran.value, name: tranDay});
                }
                monthlyData[i].amount += tran.value;
            } else monthlyData.push({amount: tran.value, name: tranMonth, dailyData: []});
        }
    });

    monthlyData.push({amount: 1200, name: 'Sep', dailyData: []});
    monthlyData.push({amount: 2400, name: 'Oct', dailyData: []});
    monthlyData.push({amount: 5500, name: 'Nov', dailyData: []});
    monthlyData.push({amount: 100, name: 'Dec', dailyData: []});

    monthlyData[0].dailyData.push({number: 16, amount: 1200, name: 'Tue'});
    monthlyData[0].dailyData.push({number: 17, amount: 1050, name: 'Wed'});
    monthlyData[0].dailyData.push({number: 18, amount: 4100, name: 'Thu'});
    monthlyData[0].dailyData.push({number: 20, amount: 2100, name: 'Sat'});
    monthlyData[0].dailyData.push({number: 21, amount: 2150, name: 'Sun'});
    monthlyData[0].dailyData.push({number: 22, amount: 6700, name: 'Mon'});
    monthlyData[0].dailyData.push({number: 23, amount: 500, name: 'Tue'});
    monthlyData[0].dailyData.push({number: 24, amount: 2400, name: 'Wed'});

    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                <LineChart width={600} height={500} data={monthlyData}>
                    <Line type="monotone" dataKey="amount" stroke="#ff4b6e" />
                    <XAxis dataKey="name" stroke="#ff4b6e" />
                    <YAxis stroke="#ff4b6e" />
                </LineChart>
            </div>
            <div className={styles.chart}>
                <LineChart width={600} height={500} data={monthlyData[0].dailyData}>
                    <Line type="monotone" dataKey="amount" stroke="#ff4b6e" />
                    <XAxis dataKey="number" stroke="#ff4b6e" />
                    <YAxis stroke="#ff4b6e" />
                </LineChart>
            </div>
        </div>
    );
}
