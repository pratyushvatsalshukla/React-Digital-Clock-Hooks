import React from 'react' ;
import { useState } from 'react';

const App = () => {
    var Timing = new Date().toLocaleTimeString() ;
    // const UseState = useState(Timing) ;
    const [CurrentTime, TimeUpdate] = useState(Timing)
    // setInterval(UpdateTime, 1000) ;
    const UpdateTime = () =>{
        Timing = new Date().toLocaleTimeString() ;
        TimeUpdate(Timing) ;
    }
   setInterval(UpdateTime, 1000) ;
    return(
        <div className = "MainDiv">
            <h1> {CurrentTime} </h1>
        </div>
    ) ;
}
export default App ;
