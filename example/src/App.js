import React from 'react'

import { Button } from 'tg-buttonui'
import 'tg-buttonui/dist/index.css'

const App = () => {
  return (
    <>
     
      <h1 style={{textAlign:"center"}}>BUTTONS</h1>
      <div className='buttons'>
        <Button text='Primary Button' type='primary' />

        <Button text='Default Button' />

        <Button text='Dashed Button' type='dashed' />

        <Button text='Text Button' type='text' />

        <Button text='Link Button' type='link' />
      </div>
    </>
  )
}
export default App
