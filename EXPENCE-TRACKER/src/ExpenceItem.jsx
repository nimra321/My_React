
function ExpenceItem({ item, onDeleteExpense }) {


  return (
    <div className="expence-item">
        <span>{item.title}</span>
        <span>Rs. {item.amount}</span>
        <button onClick={() => onDeleteExpense(item.id)}>❌</button>
    </div>
  )
}

export default ExpenceItem