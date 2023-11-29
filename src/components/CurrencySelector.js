import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SYMBOL_TO_NAME = {
    "$": "Dollar",
    "€": "Euro",
    "£": "Pound",
    "₹": "Rupee"
}
const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',   
            payload: event.target.value,
        });
    }
    return (

        <div className="alert alert-success">
            Currency: 
            <select onChange={handleCurrencyChange} >
                <option value="£" name="£">£ {SYMBOL_TO_NAME["£"]}</option>
                <option value="$" name="$">$ {SYMBOL_TO_NAME["$"]}</option>
                <option value="€" name="€">€ {SYMBOL_TO_NAME["€"]}</option>
                <option value="₹" name="₹">₹ {SYMBOL_TO_NAME["₹"]}</option>
            </select>
        </div>
    );
};
export default CurrencySelector;