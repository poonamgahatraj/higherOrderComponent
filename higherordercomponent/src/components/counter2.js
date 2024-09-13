import React from 'react'

import Updatedcomponent from './hoc'

 function Counter2({handleIncrease,count}) {
   
  return (
    <>
    <p>{count}</p>
    <button onClick={handleIncrease}>Increase</button>
    
    </>

  )
}

export default Updatedcomponent(Counter2)

