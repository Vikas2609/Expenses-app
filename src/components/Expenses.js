import React from "react";
import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.data.map((item) => (
        <ExpensesItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Expenses;
