import React from 'react';
import {Line, LineChart, ResponsiveContainer, XAxis} from 'recharts';
import styles from './DataStyles.module.css';

export function Data() {
    const data = [
        {
            month: 'Jan',
            amount: 200,
        },
        {
            month: 'Feb',
            amount: 123,
        },
        {
            month: 'Mar',
            amount: 515,
        },
        {
            month: 'Apr',
            amount: 7357,
        },
        {
            month: 'may',
            amount: 579,
        },
        {
            month: 'Jun',
            amount: 246,
        },
        {
            month: 'Jul',
            amount: 345,
        },
        {
            month: 'Agu',
            amount: 6246,
        },
        {
            month: 'Sep',
            amount: 2624,
        },
        {
            month: 'Oct',
            amount: 650,
        },
        {
            month: 'Nov',
            amount: 2020,
        },
        {
            month: 'Dec',
            amount: 2010,
        },
    ];
    return (
        <div className={Styles.chart}>
            <div className={Styles.chart}>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="month" stroke="#ff4b6e" />
                        <Line type="monotone" dataKey="amount" stroke="#ff4b6e" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
