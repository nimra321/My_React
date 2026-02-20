import ExpenceItem from './ExpenceItem'

function ExpenseList({ expenses, onDeleteExpense }) {

    if(!expenses || expenses.length === 0) {
        return (
            <p className="no-expense">No Expenses Yet</p>
        )
    }

  return (
    <div className="expense-list">
        { expenses.map((item) => (
            <ExpenceItem key={item.id} item={item} onDeleteExpense={onDeleteExpense}/>
        ))}
      </div>
  )
}

export default ExpenseList