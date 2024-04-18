import React from 'react';
import { useCounter } from '../hooks/useCounter/useCounter';

export const CounterConCustomHook = () => {
    const {counter,incremetar,decremetar,reset}=useCounter();

  return (
    <>
        <h2>CounterConCustomHook:{counter} </h2>
        <hr/>
        <button className='btn btn-primary' onClick={incremetar}>+1</button>
        <button className='btn btn-primary' onClick={decremetar}>-1</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
    </>
  )
}

