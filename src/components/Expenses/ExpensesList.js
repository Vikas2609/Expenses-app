import React from "react";
import "./ExpensesList.css";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = (props) => {
  return props.item.length === 0 ? (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  ) : (
    <ul className="expenses-list">
      {props.item.map((item) => (
        <ExpensesItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ExpensesList;
