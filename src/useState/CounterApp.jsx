import { useState } from "react";


export const CounterApp = () => {
    const [state, setState] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    });
  
 const {counter1,counter2,counter3}=state; 
  



return (
    <>
        <h2>CounterApp</h2>
        <hr/>
        <h3>{counter1}</h3>
        <h3>{counter2}</h3>
        <h3>{counter3}</h3>

        <button className="btn btn-primary" 
            onClick={()=>{
                    setState({
                            ...state,
                            counter1:counter1+1,

                        });
                    }} 
        >+1</button>
        
    </>
    
  )
}
