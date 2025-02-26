import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    const amountInputId = useId()
    return (
        <>
            <div className={`bg-black p-3 rounded-lg text-sm flex 
             mt-2.5 pb-5 m-auto`}>
                <div className='w-1/2'>
                    <label className='text-white/40 mb-2 inline-block my-2' htmlFor={amountInputId}>{label}</label>
                    <input
                    id={amountInputId}
                        className='outline-none w-full bg-white py-1.5'
                        type='number'
                        placeholder='Amount'
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />

                </div>
                <div className='w-1/2 flex flex-wrap justify-end text-right'>
                    <p className='text-white/40 mb-2 w-full'>Currency Type</p>
                    <select
                        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}>
                        {currencyOptions.map((curr) => (

                        <option key={curr} value={curr}>{curr}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>


    )
}

export default InputBox