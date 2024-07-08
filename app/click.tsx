'use client'
 
import { useState } from 'react'
 
export default function Click() {
  const [count, setCount] = useState(0)
 
  return (
    <div className='item'>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  )
}