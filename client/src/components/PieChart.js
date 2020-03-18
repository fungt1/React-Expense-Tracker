import React, { useContext, useEffect } from 'react';
import PieChart from 'react-minimal-pie-chart'
import { GlobalContext } from '../context/GlobalState';

export const Chart = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const pieData = transactions.map((transaction, key) => {
        return {
            'title': transaction.text, 'value': Math.abs(transaction.amount), 'color': transaction.amount < 0 ? 'red' : 'green'

        };


    })

    return (

        <PieChart data={pieData}
            label
            labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif',
            }}
            radius={30}
            labelPosition={115}

        />

    )


}