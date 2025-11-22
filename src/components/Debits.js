/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, { useState } from "react";


const Debits = (props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit, index) => {
      const date = debit.date.slice(0, 10);
      const amountFormatted = isNaN(debit.amount)
        ? "NaN"
        : `$${debit.amount.toFixed(2)}`;
  
      return (
        <li key={index}>
          {debit.description} — {amountFormatted} — {date}
        </li>
      );
    });
  };
  
  // Render the list of Debit items and a form to input new Debit item
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addDebit(description, amount);
  };
  
  
  return (
    <div>
      <h1>Debits</h1>

      <h3>Account Balance: {props.accountBalance}</h3>

      <form onSubmit={handleSubmit}>

      <input 
        type="text" 
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input 
        type="number" 
        placeholder="Amount"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

        <button type="submit">Add Debit</button>
      </form>

      {debitsView()}


      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

Debits.defaultProps = {
  debits: []
};

export default Debits;