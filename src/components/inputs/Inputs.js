import React, { useContext } from 'react';
import { InputContext } from "../../context/context";

function Inputs() {

    const {
        option,
        description,
        amount,
        handleOption,
        handleDescription,
        handleAmount,
        handleSubmit
    } = useContext(InputContext)




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={option} onChange={(e) => handleOption(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <input 
                type="text"
                placeholder="Add description"
                value={description}
                onChange={(e) => handleDescription(e.target.value)}
                />
                <input 
                type="number"
                placeholder="add amount"
                value={amount}
                onChange={(e) => handleAmount(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Inputs
