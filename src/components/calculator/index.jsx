import { useState, useEffect } from 'react';

import './calculator.css';

function Calculator(){

    const[value, setValue] = useState("");
    const[percentage, setPercentage] = useState("");
    const[total, setTotal] = useState(0);

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    const handlePercentageChange = (e) => {
        setPercentage(e.target.value);
    };

    useEffect(() => {
        if(value && !percentage){
            setTotal(parseFloat(value));
        }else if (value && percentage) {
            const tipAmount = (parseFloat(value) * parseFloat(percentage)) / 100;
            setTotal(parseFloat(value) + tipAmount);
        } else {
            setTotal(0);
        }
    }, [value, percentage]);

    return(

        <div className="calculator">

            <div className="calculator--bx">
                <label htmlFor="" className='bx--title'>Enter the account value</label>
                <input 
                    type="number" 
                    className='bx--input' 
                    value={value} 
                    onChange={handleValueChange}
                />
            </div>

            <div className="calculator--bx calculator--border">
                <label htmlFor="" className='bx--title'>Enter the tip percentage you want to leave</label>
                <input type="number" className='bx--input' value={percentage} onChange={handlePercentageChange} />
            </div>

            <div className="calculator--bx">
                <label htmlFor="" className='bx--title'>Total with tip percentage</label>
                <span>${total.toFixed(2)}</span>
            </div>

        </div>

    );
}

export { Calculator };