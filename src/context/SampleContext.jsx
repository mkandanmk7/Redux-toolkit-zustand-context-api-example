import { createContext, useContext, useState } from "react"

let SampleContext = createContext();
let CartContext = createContext();

const SampleContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({ name: "muthu" })
  const [carts,setCarts]=useState([]);
  const [cartTotal,setCartTotal]=useState(0);
  const login = (data) => {
    console.log(data)
    setGlobalState(data);
  }
  const getCartTotalAmount = (cartData) => {
      let cartTotal= cartData.reduce((acc,cart)=>{
        return acc.price+cart.price;
    })
    setCartTotal(cartTotal);
    
  }
  


  return <SampleContext.Provider value={{ globalState, setGlobalState, login }} >
    <CartContext.Provider value={{carts,setCarts,getCartTotalAmount,cartTotal}}>
      {children}
    </CartContext.Provider>
  </SampleContext.Provider>
}

export const useSampleContext = () => {
  return useContext(SampleContext);

}
export const useCartContext=()=>{
  return useContext(CartContext);
}


export default SampleContextProvider