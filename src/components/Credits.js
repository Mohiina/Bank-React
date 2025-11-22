/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/

import {Link} from 'react-router-dom';
import React, { useState } from 'react';


const Credits = (props) => {
  // state for form inputs
  // desc = credit text, amt = credit value
  

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  // fn runs when user adds a credit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCredit(description, amount);
  };

  return (
    <div>
      <h1>Credits</h1>
      <h3>Account Balance: {props.accountBalance}</h3>
      <br />
      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Amount"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Credit</button>
      </form>


      <br/>
      <Link to="/">Return to Home</Link>
      // show all credits
      <ul>
        {props.credits.map((credit, index) => (
          <li key={index}>
            {credit.description} — ${credit.amount.toFixed(2)} — {credit.date.slice(0, 10)}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Credits;