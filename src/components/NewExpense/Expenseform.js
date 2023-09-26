import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // const inputChangeHandler=(identifiermvalue)=>{
  //   if(identifier === 'title')
  //   {
  //     setEnteredTitle(value);
  //   }  else if(identifier === 'amount')
  //   {
  //     setEnteredAmount(value);
  //   }  else(identifier === 'date')
  //   {
  //     setEntereddate(value);
  //   }
  // }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
         <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit"> ADD EXPENSE </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
