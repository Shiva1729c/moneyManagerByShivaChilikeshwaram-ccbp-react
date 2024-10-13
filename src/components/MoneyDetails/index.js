// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses, totalBalance} = props
  return (
    <>
      <li className="money-details-item your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="finance-details">
          <p className="finance-description">Your Balance</p>
          <p className="finance-count" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </li>
      <li className="money-details-item your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="finance-details ">
          <p className="finance-description">Your Income</p>
          <p className="finance-count" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="money-details-item your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="finance-details">
          <p className="finance-description">Your Expenses</p>
          <p className="finance-count" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
