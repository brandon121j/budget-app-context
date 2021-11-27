import React, { useContext } from 'react';
import { ListsContext } from '../../context/context'

function IncomeList() {
    const { incomeArray } = useContext(ListsContext)
    return (
        <div>
            <ul>
                {
                    incomeArray.map((income, index) => {
                        <li key={index}>
                            <span>{income.description}</span>
                            <span>{income.amount}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default IncomeList
