import React from "react"
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return(
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collection' element={<Home/>} />
          <Route path='/about' element={<Home/>} />
          <Route path='/contact' element={<Home/>} />
          <Route path='/card' element={<Home/>} />
          <Route path='/login' element={<Home/>} />
          <Route path='/place-order' element={<Home/>} />
          <Route path='/product/:productId' element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}


export default App
