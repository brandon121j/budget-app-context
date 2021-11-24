import React, { useContext } from 'react';
import { ListsContext } from "../../context/context";

function ExpenseList() {
    const { expenseList } = useContext(ListsContext)
    return (
        <div>
            ExpenseList
        </div>
    )
}

export default ExpenseList
