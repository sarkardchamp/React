import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function addExpenseData(expenseData) {
    expenseData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseData={addExpenseData} />
    </div>
  );
}

export default NewExpense;
