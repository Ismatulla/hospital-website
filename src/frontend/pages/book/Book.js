import React, { useState } from 'react';
import Button from '../../components/Button';

const Book = () => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [data, setData] = useState('')
  const [enteredValueIsValid, setEnteredValueIsValid] = useState(true)
  const [enteredNumberIsValid, setEnteredNumberIsValid] = useState(true)
  const [enteredDataIsValid, setEnteredDataIsValid] = useState(true)

  const validateInput = (updateState, evts, toggleState) => {
    updateState(evts.target.value)
    evts.target.value.trim() === '' ? toggleState(false) : toggleState(true)
  }

  const onFocusInput = (updateState, state) => {
    updateState(false)
    state.trim() === '' ? updateState(false) : updateState(true)
  }
  const warningMessage = (msg) => <p className='error-text'>please enter your {`${msg}`}</p>

  const nameHandler = (e) => validateInput(setName, e, setEnteredValueIsValid)

  const nameInputBlurHandler = () => onFocusInput(setEnteredValueIsValid, name)

  const numberHandler = (e) => validateInput(setNumber, e, setEnteredNumberIsValid)

  const numberInputBlurHandler = () => onFocusInput(setEnteredNumberIsValid, number)

  const dataInputHandler = (e) => validateInput(setData, e, setEnteredDataIsValid)

  const formHandler = e => {
    e.preventDefault()
    setName('')
    setNumber('')
    setData('')

    if (name.trim() === '') {
      setEnteredValueIsValid(false)
      return
    }

    if (number.trim() === '') {
      setEnteredNumberIsValid(false)
      return
    }

    if (data.trim() === '') {
      setEnteredDataIsValid(false)
      return
    }
  }


  return (

    <div className=' mt-24 mb-8 '>

      <div className='text-center my-12'>
        <h1 className=' pb-16 lg:text-6xl sm:text-3xl font-bold text-center block'>
          <span className='text-cyan-400 '>BOOK </span>
          NOW
        </h1>
      </div>

      <form onSubmit={formHandler}
        className='flex items-center justify-center border-2 rounded-md border-cyan-400 flex-col xl:w-1/2 lg:w-1/2 xl:m-auto lg:m-auto md:w-4/5 md:m-auto sm:m-auto sm:w-4/5 gap-y-8 lg:px-16 xl:px-16 md:px-8 sm:px-8'>

        <h1 className='text-4xl my-4 font-semibold sm:text-center md:text-center'>Book Appoinment</h1>

        <input
          onChange={nameHandler}
          onBlur={nameInputBlurHandler}
          value={name}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your name" type="text" name="search" />
        {!enteredValueIsValid && warningMessage('name')}

        <input
          onChange={numberHandler}
          onBlur={numberInputBlurHandler}
          value={number}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your number" type="tel" name="search" />
        {!enteredNumberIsValid && warningMessage('number')}

        <input
          onChange={dataInputHandler}
          value={data}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" type="date" name="search" />
        {!enteredDataIsValid && warningMessage('date')}
        <div>
          <Button text="Book Now" />
        </div>
      </form>

    </div >
  );
}

export default Book;

