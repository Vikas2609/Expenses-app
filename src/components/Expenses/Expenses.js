import React from "react";
import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";
import Card from '../UI/Card'

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.data.map((item) => (
        <ExpensesItem key={item.id} {...item} />
      ))}
    </Card>
  );
};

export default Expenses;
