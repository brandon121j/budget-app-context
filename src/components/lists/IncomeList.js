import React, { useContext } from 'react';
import { ListsContext } from '../../context/context'

function IncomeList() {
    const { incomeArray, handleDeleteIncome } = useContext(ListsContext)
    return (
        <div>
            <ul>
                {
                    incomeArray.map((income, index) => {
                        return (
                        <li key={index}>
                            <span>{income.description}</span>
                            <span>{income.amount}</span>
                            <button onClick={() => handleDeleteIncome(index)}>Delete</button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default IncomeList
