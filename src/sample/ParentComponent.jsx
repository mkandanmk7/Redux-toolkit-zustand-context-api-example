import React from 'react'
import ChildComponent from './ChildComponent'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slice/CounterSlice'

const ParentComponent = () => {
    const [dataFromChild,setDataFromChild]=React.useState("")
    let {counter}=useSelector((state)=>state.COUNTER);
    let dispatch=useDispatch();
    console.log(counter);
    const getDataFromChild = (data) => {
      console.log("data from child:",data)
      setDataFromChild(data);
    }
    const handleInc = () => {
      dispatch(increment());
    }
    const handleDec = () => {
      dispatch(decrement(6))
    }
    
    
  return (
    <div>
      Parent Component
      <h3>Value from child <span className='bg-red-500'> {dataFromChild}</span></h3>
      <span className='bg-red-400 h-10 p-2' onClick={handleInc}>increment</span>
      <span className='bg-red-400 h-10 p-2' onClick={handleDec}>DEC</span>
      <ChildComponent getDataFromChild={getDataFromChild} />
    </div>
  )
}

export default ParentComponent
