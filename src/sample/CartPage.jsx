import React, { useEffect } from 'react'
import { useCartContext } from '../context/SampleContext';
import { Axios } from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../slice/ProductSlice';
import { useCartsState } from '../zustand';

const CartPage = () => {
    let { cartTotal, getCartTotalAmount } = useCartContext();
    let {allproducts}=useSelector((state)=>state.productState)
    let dispatch=useDispatch();
    let {carts,setCarts}=useCartsState();
    const Shopingcart = [

        { id: 2, item: "curd", price: 10 },
        { id: 1, item: "milk", price: 22 },
    ];
    
    const getAllProducts = async() => {
      let res=await Axios.get("https://fakestoreapi.com/products");
        dispatch(getproducts(res.data))
    }
    useEffect(()=>{
        setCarts(Shopingcart)
        getAllProducts()
    },[])
    
    console.log("Carts from zustan:",carts)

    return (
        <div>
            <button className='p-3 bg-red-400' onClick={() => getCartTotalAmount(Shopingcart)}>Get Total</button>
            {allproducts.map((product)=>{
                return <p key={product.id}>{product.title}</p>
            })}
            <h3>Cart total is {cartTotal}</h3>
        </div>
    )
}

export default CartPage
