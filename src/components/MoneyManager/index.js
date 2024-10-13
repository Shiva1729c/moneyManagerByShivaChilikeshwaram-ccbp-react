import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// const initialTransactionList = [
//   {
//     title: 'salary',
//     amount: 50000,
//     type: 'Income',
//     id: uuidv4(),
//   },
//   {
//     title: 'salary',
//     amount: 10000,
//     type: 'Expenses',
//     id: uuidv4(),
//   },
// ]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    // finding the option displayText based on its id
    const typeOfOption = transactionTypeOptions.find(
      eachType => eachType.optionId === type,
    )
    const {displayText} = typeOfOption
    // -----------------------------------------------------
    const newTransaction = {
      id: v4(),
      title,
      amount,
      type: displayText,
    }

    if (title !== '' && amount !== '') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const filteredTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionList: filteredTransactionList})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  renderAddTransaction = () => {
    const {title, amount, type} = this.state
    return (
      <div className="add-transaction-container">
        <h1 className="transaction-heading">Add Transaction</h1>
        <form onSubmit={this.onAddTransaction}>
          <label htmlFor="title" className="label-name">
            TITLE
          </label>
          <br />
          <input
            type="text"
            id="title"
            className="input-element"
            placeholder="TITLE"
            onChange={this.onChangeTitle}
            value={title}
          />
          <br />
          <label htmlFor="amount" className="label-name">
            AMOUNT
          </label>
          <br />
          <input
            type="text"
            id="amount"
            className="input-element"
            placeholder="AMOUNT"
            onChange={this.onChangeAmount}
            value={amount}
          />
          <br />
          <label htmlFor="transactionDropdown" className="label-name">
            TYPE
          </label>
          <br />
          <select
            id="transactionDropdown"
            className="input-element"
            onChange={this.onChangeType}
            value={type}
          >
            {transactionTypeOptions.map(transactionType => (
              <option
                key={transactionType.optionId}
                value={transactionType.optionId}
              >
                {transactionType.displayText}
              </option>
            ))}
          </select>
          <br />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
      </div>
    )
  }

  renderTransactionHistory = () => {
    const {transactionList} = this.state
    return (
      <div className="history-container">
        <h1 className="transaction-heading">History</h1>
        <ul className="history-details-titles-container">
          <li className="history-details">
            <p className="history-title">Title</p>
            <p className="history-title">Amount</p>
            <p className="history-title">Type</p>
          </li>
        </ul>
        <ul className="transaction-item-container">
          {transactionList.map(eachTransaction => (
            <TransactionItem
              transactionDetails={eachTransaction}
              key={eachTransaction.id}
              deleteTransaction={this.deleteTransaction}
            />
          ))}
        </ul>
      </div>
    )
  }

  totalIncome = () => {
    const {transactionList} = this.state
    let totalIncome = 0

    transactionList.forEach(transaction => {
      if (transaction.type === 'Income') {
        totalIncome += parseInt(transaction.amount)
      }
    })

    return totalIncome
  }

  totalExpenses = () => {
    const {transactionList} = this.state
    let totalExpenses = 0

    transactionList.forEach(transaction => {
      if (transaction.type === 'Expenses') {
        totalExpenses += parseInt(transaction.amount)
      }
    })

    return totalExpenses
  }

  render() {
    const personTotalIncome = this.totalIncome()
    const personTotalExpenses = this.totalExpenses()
    const totalBalance = personTotalIncome - personTotalExpenses
    return (
      <div className="money-manager-bg-container">
        <div className="responsive-container">
          <div className="header">
            <h1 className="header-name">Hi, Richard</h1>
            <p className="header-greeting">
              Welcome back to your
              <span className="app-name"> Money Manager</span>
            </p>
          </div>
          <ul className="money-details-container">
            <MoneyDetails
              totalIncome={personTotalIncome}
              totalExpenses={personTotalExpenses}
              totalBalance={totalBalance}
            />
          </ul>
          <div className="transaction-container">
            {this.renderAddTransaction()}
            {this.renderTransactionHistory()}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
