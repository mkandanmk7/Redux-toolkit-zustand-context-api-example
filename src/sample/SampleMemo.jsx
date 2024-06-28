import React, { useMemo, useState } from 'react'

const SampleMemo = () => {
    const [messages,setMessages]=useState([
        { id: 1, text: 'Hello!' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'I am doing well, thanks!' },
      ]);

      const totalChars=useMemo(()=>{
      console.log("in memo")

        return messages.reduce((acc,message)=>acc+message.text.length,0)
      },[messages])
      const addMessage = (text) => {
      let newMessage={id:text.length,text,}
      setMessages([...messages,newMessage])
      }
      console.log("in out memo")
    
  return (
    <div>
      <p>Memo Component</p>
      <p>total char:{totalChars}</p>
      <input className='border border-red-300' type="text"  onChange={(e)=>addMessage(e.target.value)} />
    </div>
  )
}

export default SampleMemo
