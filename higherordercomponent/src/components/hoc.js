import React from 'react'
import { useState } from 'react'

function Updatedcomponent(Originalcomponent) {
 function NewComponent(){
    const[count,setCount]=useState(10)
    function handleIncrease(){
        setCount(count+1)
    }
    return <Originalcomponent handleIncrease={handleIncrease} count={count}/>
 }
 return NewComponent;

}

export default Updatedcomponent