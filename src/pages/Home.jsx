import React from 'react'
import ParentComponent from '../sample/ParentComponent'
import CompoentA from '../sample/CompoentA'
import CartPage from '../sample/CartPage'

const Home = () => {
  return (
    <div>
     Home Component 
     <br/>
     <CompoentA />
     <CartPage />
     {/* <ParentComponent /> */}
    </div>
  )
}

export default Home
