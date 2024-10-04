import { createContext, useState } from "react";

let AddContext = createContext();

export function AddProvider ({children}){
    const [cartlist,setCartlist]=useState([])
    const [total,setTotal] = useState(0)
    const [user,setUser]=useState()
    const [item,setItem] = useState(0)
    const [paymentData,setPaymentData] = useState([])
    
    let getUserEmail=(data)=>{
      setUser(data)
     
    }
    console.log(user)
    let addToCart =(product)=>{
        setCartlist([...cartlist,{...product,quantity:1}])
        setTotal(total + product.price)
       setItem({...product,quantity:1})
       
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

      const totalAmount=(total)=>{
        if (total>=200) {
          return total;
        } else if(total<=0){
          return 0;
        }
        else{
          return total+40
        }
      
      }
      let amount = totalAmount(total)
    return(
        <AddContext.Provider value={{cartlist,addToCart,amount,total,item,removeCart,incQuantity,decQuantity,user,setUser,getUserEmail,paymentData,setPaymentData}}>{children}</AddContext.Provider>
    )
};
export default AddContext;