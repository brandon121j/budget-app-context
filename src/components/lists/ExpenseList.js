import React, { useContext } from 'react';
import { ListsContext } from "../../context/context";

function ExpenseList() {
    const { expenseList } = useContext(ListsContext)
    return (
        <div>
            <ul>
            {
                expenseList.map((expense, index) => {
                    console.log(expense)
                    return (
                        <li key={index}>
                            <span>{expense.description}</span>
                            <span>{expense.amount}</span>
                        </li>
                    )
                })
            }
            </ul>
        </div> 
    )
}

export default ExpenseList
