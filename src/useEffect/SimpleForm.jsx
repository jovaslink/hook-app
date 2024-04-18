import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {
    const [inputform, setInputform] = useState({
        username:'jovaslink',
        email:'jovaslink@gmail.com'
    })
    const {username, email} = inputform;
  
    
    useEffect(() => {
      console.log('lanzado')
    
      return () => {
        console.log('parado')
      }
    }, [username])

    
    const onChangeInput = ({target})=>{
        const {name, value} = target; 
        setInputform({
            ...inputform,
            [name]:value
    });
    
  }
    return (
    <>
    <h2>SimpleForm</h2>
    <input 
        type='text'
        name='username'
        value={username} 
        onChange={onChangeInput} 
        className='form-control'   
        />
    <input 
        type='text'
        name='email'
        value={email} 
        onChange={onChangeInput}
        className='form-control mt-2'   
        /> 
    </>
  )
}
