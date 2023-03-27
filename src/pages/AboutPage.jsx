import React from 'react'
import Card from '../components/shared/Card'

function Aboutpage() {
  return (
    <Card>
        <div className='about'>
            <h1>About this Proyect</h1>
            <p>This is a React App to leave feedback for</p>
            <p>Version 1.0.0</p>
            <p><a href='/'>Back to home</a></p>
        </div>
    </Card>
  )
}

export default Aboutpage