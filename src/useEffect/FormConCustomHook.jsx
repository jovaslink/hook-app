import { useForm } from "../hooks/useForm/useForm";


export const FormConCustomHook = () => {
    
   const {inputform,onChangeInput,username,email,onResetForm}= useForm({
    username:'jovaslink',
    email:'jovaslink@hotmail.com'
   });
  
  // const {username,email}=inputform;
    
    
    return (
    <>
    <h2>FormConCustomHook</h2>
    <input
        name='username'
        value={username}
        onChange={onChangeInput} 
        className='form-control'   
    />
    <input
        name='email'
        value={email}
        onChange={onChangeInput} 
        className='form-control mt-2'   
    />
    <button onClick={onResetForm} className="btn btn-primary mt-2" >Reset</button>
    </>
  )
}
