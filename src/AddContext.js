import { createContext, useState } from "react";

let AddContext = createContext();

export function AddProvider ({children}){
    // const [cart,setCart]=useState([]);
    const [cartlist,setCartlist]=useState([])
    const [total,setTotal] = useState(0)
    
    
    let addToCart =(product)=>{
        setCartlist([...cartlist,{...product,quantity:1}])
        setTotal(total + product.price)
       
    }

    let removeCart = (product)=>{
    let itemindex = cartlist.findIndex(item=>product._id === item._id)
    cartlist.splice(itemindex,1)
    setCartlist([...cartlist])
    setTotal(total-product.price*product.quantity)
    }
   
    const incQuantity = (cartItem)=>{
        let itemIndex = cartlist.findIndex((item)=> cartItem._id===item._id);
        cartlist[itemIndex].quantity = cartlist[itemIndex].quantity + 1
        setCartlist([...cartlist])
        setTotal(total+cartItem.price)
      }
      const decQuantity = (cartItem)=>{
        let itemIndex = cartlist.findIndex((item)=> cartItem._id===item._id);
        cartlist[itemIndex].quantity = cartlist[itemIndex].quantity - 1
        setCartlist([...cartlist])
        setTotal(total-cartItem.price)
      }



    return(
        <AddContext.Provider value={{cartlist,addToCart,total,removeCart,incQuantity,decQuantity}}>{children}</AddContext.Provider>
    )
};
export default AddContext;