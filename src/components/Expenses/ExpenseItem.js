import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("");
    console.log(title);
    console.log("ExpenseItems evaluated by React");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
  
    </Card>
  );
};
export default ExpenseItem;
