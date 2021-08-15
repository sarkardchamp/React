import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearToFilter, setYearToFilter] = useState("null");
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setYearToFilter(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    if (yearToFilter === "null") return true;
    return Number(expense.date.getFullYear()) === Number(yearToFilter);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={yearToFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
