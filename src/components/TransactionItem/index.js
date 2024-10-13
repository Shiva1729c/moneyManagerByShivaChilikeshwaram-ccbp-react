import './index.css'

// Write your code here
const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-item-element">{title}</p>
      <p className="transaction-item-element">RS {amount}</p>
      <p className="transaction-item-element">{type}</p>
      <button
        type="button"
        data-testid="delete"
        className="delete-button"
        onClick={onDeleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
