
import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'school fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2021, 6, 12)
  },
  {
    id: 'e3',
    title: 'house rent',
    amount: 750,
    date: new Date(2021, 5, 4)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 280,
    date: new Date(2021, 5, 3)
    }
 ];


const  App = ()=>{


  const[expenses, setExpenses]= useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense)=>{
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense);
  }
 

    return ( 
    <div>
         <NewExpense onAddExpense={addExpenseHandler} />
         <Expenses item={expenses}/>
        </div>
    );
}

export default App;