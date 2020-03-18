import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Chart } from './components/PieChart';
import { PopUp } from './components/PopUp';


import { GlobalProvider } from './context/GlobalState';

import './App.css';


class App extends Component {

  render() {
    return (


      <GlobalProvider>
        <AppNavBar />
        <PopUp />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <Chart />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>

    );
  }
}

export default App;
