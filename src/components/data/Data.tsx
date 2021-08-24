import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import {monthType, rootState} from '../constants/types';
import styles from './DataStyles.module.css';

export function Data() {
    const allTransactions = useSelector((state: rootState) => state.transaction);
    const total = {recharge: 0, transfer: 0};
    const monthlyData: monthType[] = [];
    const [index, setIndex] = useState(0);

    allTransactions.forEach((tran, i) => {
        if (tran.condition !== 'completed') return;
        const tranMonth = tran.date.toString().split(' ')[1];
        const tranDay = tran.date.toString().split(' ')[0];
        const tranDayNumber = parseInt(tran.date.toString().split(' ')[2]);
        if (!monthlyData.length) {
            if (tran.type === 'Recarga')
                monthlyData.push({
                    name: tranMonth,
                    recarga: tran.value,
                    transferencia: 0,
                    dailyData: [{number: tranDayNumber, recarga: tran.value, transferencia: 0, name: tranDay}],
                    transactionsId: [tran.id],
                });
            else {
                console.log('hola', tran);
                monthlyData.push({
                    name: tranMonth,
                    recarga: 0,
                    transferencia: tran.value,
                    dailyData: [{number: tranDayNumber, recarga: 0, transferencia: tran.value, name: tranDay}],
                    transactionsId: [tran.id],
                });
            }
        }
        for (let i = 0; i < monthlyData.length; i++) {
            if (monthlyData[i].name === tranMonth) {
                for (let j = 0; j < monthlyData[i].dailyData.length; j++) {
                    if (tran.type === 'Recarga') {
                        if (!monthlyData[i].transactionsId.includes(tran.id)) {
                            const day = monthlyData[i].dailyData.findIndex((t) => t.number === tranDayNumber);
                            if (day >= 0) {
                                monthlyData[i].recarga += tran.value;
                                monthlyData[i].transactionsId.push(tran.id);
                                monthlyData[i].dailyData[day].recarga += tran.value;
                            } else {
                                monthlyData[i].recarga += tran.value;
                                monthlyData[i].transactionsId.push(tran.id);
                                monthlyData[i].dailyData.push({
                                    number: tranDayNumber,
                                    recarga: tran.value,
                                    transferencia: 0,
                                    name: tranDay,
                                });
                                return;
                            }
                        }
                    } else {
                        if (!monthlyData[i].transactionsId.includes(tran.id)) {
                            const day = monthlyData[i].dailyData.findIndex((t) => t.number === tranDayNumber);
                            if (day >= 0) {
                                monthlyData[i].transferencia += tran.value;
                                monthlyData[i].transactionsId.push(tran.id);
                                monthlyData[i].dailyData[day].transferencia += tran.value;
                            } else {
                                monthlyData[i].transferencia += tran.value;
                                monthlyData[i].transactionsId.push(tran.id);
                                monthlyData[i].dailyData.push({
                                    number: tranDayNumber,
                                    recarga: 0,
                                    transferencia: tran.value,
                                    name: tranDay,
                                });
                                return;
                            }
                        }
                    }
                }
            } else {
                if (tran.type === 'Recarga')
                    monthlyData.push({
                        recarga: tran.value,
                        transferencia: 0,
                        name: tranMonth,
                        dailyData: [],
                        transactionsId: [tran.id],
                    });
                else {
                    monthlyData.push({
                        name: tranMonth,
                        recarga: 0,
                        transferencia: tran.value,
                        dailyData: [],
                        transactionsId: [tran.id],
                    });
                }
            }
        }
    });

    monthlyData.push({recarga: 1200, transferencia: 1100, name: 'Sep', dailyData: [], transactionsId: ['']});
    monthlyData.push({recarga: 2400, transferencia: 2040, name: 'Oct', dailyData: [], transactionsId: ['']});
    monthlyData.push({recarga: 5500, transferencia: 600, name: 'Nov', dailyData: [], transactionsId: ['']});
    monthlyData.push({recarga: 100, transferencia: 4300, name: 'Dec', dailyData: [], transactionsId: ['']});

    monthlyData[1].dailyData.push({number: 16, recarga: 14200, transferencia: 500, name: 'Tue'});
    monthlyData[1].dailyData.push({number: 17, recarga: 10150, transferencia: 1200, name: 'Wed'});
    monthlyData[1].dailyData.push({number: 18, recarga: 4100, transferencia: 2000, name: 'Thu'});
    monthlyData[1].dailyData.push({number: 19, recarga: 22100, transferencia: 2500, name: 'Sat'});
    monthlyData[1].dailyData.push({number: 21, recarga: 23150, transferencia: 1100, name: 'Sun'});
    monthlyData[1].dailyData.push({number: 22, recarga: 6700, transferencia: 900, name: 'Mon'});
    monthlyData[1].dailyData.push({number: 23, recarga: 5500, transferencia: 3400, name: 'Tue'});
    monthlyData[1].dailyData.push({number: 24, recarga: 2400, transferencia: 1100, name: 'Wed'});

    monthlyData[2].dailyData.push({number: 16, recarga: 5200, transferencia: 2500, name: 'Tue'});
    monthlyData[2].dailyData.push({number: 17, recarga: 14150, transferencia: 3200, name: 'Wed'});
    monthlyData[2].dailyData.push({number: 18, recarga: 8100, transferencia: 2200, name: 'Thu'});
    monthlyData[2].dailyData.push({number: 19, recarga: 2100, transferencia: 1500, name: 'Sat'});
    monthlyData[2].dailyData.push({number: 21, recarga: 7150, transferencia: 5100, name: 'Sun'});
    monthlyData[2].dailyData.push({number: 22, recarga: 16700, transferencia: 1900, name: 'Mon'});
    monthlyData[2].dailyData.push({number: 23, recarga: 9500, transferencia: 4902, name: 'Tue'});
    monthlyData[2].dailyData.push({number: 24, recarga: 2400, transferencia: 1600, name: 'Wed'});

    monthlyData.forEach((month) => {
        total.recharge += month.recarga;
        total.transfer += month.transferencia;
    });

    return (
        <div className={styles.container}>
            <div className={styles.chartContainer}>
                <h1 className={styles.h1Estadisticas}>Estadisticas Anual</h1>
                <div className={styles.chart}>
                    <LineChart
                        width={650}
                        height={500}
                        data={monthlyData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 50,
                        }}
                    >
                        <Line
                            type="monotone"
                            dataKey="recarga"
                            stroke="#ff4b6e"
                            activeDot={{r: 10, onClick: (e: any, payload: any) => setIndex(payload.index)}}
                        />
                        <Line
                            type="monotone"
                            dataKey="transferencia"
                            stroke="blue"
                            activeDot={{r: 10, onClick: (e: any, payload: any) => setIndex(payload.index)}}
                        />
                        <XAxis
                            range={[300, 300]}
                            angle={-35}
                            textAnchor={'end'}
                            style={{fontSize: 24}}
                            dataKey="name"
                            stroke="#ff4b6e"
                            onClick={(e: any) => setIndex(e.index)}
                        />
                        <YAxis stroke="#ff4b6e" />
                        <Legend verticalAlign="top" height={36} />
                        <Tooltip />
                    </LineChart>
                    <div className={styles.textData}>
                        <label>datos anuales</label>
                        <label>recargas: {total.recharge}</label>
                        <label>transferencias: {total.transfer}</label>
                    </div>
                </div>
            </div>
            <div className={styles.chartContainer}>
                <h1 className={styles.h1Estadisticas}>Estadistica Mensual de {monthlyData[index]?.name}</h1>
                <div className={styles.chart}>
                    <LineChart
                        width={650}
                        height={500}
                        data={monthlyData[index]?.dailyData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 50,
                        }}
                    >
                        <Line type="monotone" dataKey="recarga" stroke="#ff4b6e" activeDot={{r: 10}} />
                        <Line type="monotone" dataKey="transferencia" stroke="blue" activeDot={{r: 10}} />
                        <XAxis angle={-35} textAnchor={'end'} dataKey="number" stroke="#ff4b6e" />
                        <YAxis stroke="#ff4b6e" />
                        <Legend verticalAlign="top" height={36} />
                        <Tooltip />
                    </LineChart>
                    <div className={styles.textData}>
                        <label>datos anuales</label>
                        <label>recargas: {monthlyData[index]?.recarga}</label>
                        <label>transferencias: {monthlyData[index]?.transferencia}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
