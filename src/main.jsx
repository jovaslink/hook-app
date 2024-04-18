import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import './index.css'
import { FetchConCustomHook } from './multiplesHooks/FetchConCustomHook';
//import { FormConCustomHook } from './useEffect/FormConCustomHook';
//import { SimpleForm } from './useEffect/SimpleForm';
//import { CounterConCustomHook } from './useState/CounterConCustomHook';
//import { CounterApp } from './useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp/>
    <FetchConCustomHook/>
  </React.StrictMode>,
)
