import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Forwarding = () => {
    const navigate = useNavigate();
    useEffect(
        ()=>{
            navigate('/login')
        },[]
    )
  return (
    <div></div>
  )
}

export default Forwarding