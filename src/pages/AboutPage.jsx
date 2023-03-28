import React from 'react'
import Card from '../components/shared/Card'
import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <Card>
        <div className='about'>
            <h1>About this Proyect</h1>
            <p>This is a React App to leave feedback for</p>
            <p>Version 1.0.0</p>
            <p><Link to='/'>Back to home</Link></p>
        </div>
    </Card>
  )
}

export default Aboutpage