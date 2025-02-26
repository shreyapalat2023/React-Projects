
import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from "./hooks/useCurrencyInfo"



function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);



  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>

      <div className='w-full h-screen flex flex-wrap justify-center items-center'>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrip-blur-sm'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className='w-full mb-1'>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from} />

              </div>
              <div className='relative w-full h-0.5'>
                {/* Swap Button */}
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-blue-600 text-white px-3 py-1'>swap</button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox
                  label="To" />
              </div>
              <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert to</button>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
