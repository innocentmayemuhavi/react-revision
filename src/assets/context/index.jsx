import { createContext,useState } from "react";


const AuthContext=createContext({
  SeachVal:"",
  setSearchval:()=>{},
  Cart:[],
  setCart:()=>{},
  Added:{},
  setAdded:()=>{},
  data_from_searver:JSON.parse(localStorage.getItem("Cart")),
  setData_from_searver:()=>{}


})


const AuthProvider=({children})=>{
const [SeachVal,setSearchval]=useState("")
const [Cart,setCart]=useState([])
const [data_from_searver,setData_from_searver]=useState(JSON.parse(localStorage.getItem("Cart")))
const [Added,setAdded]=useState({
})

    return(<AuthContext.Provider 
    value={{
        SeachVal,
        setSearchval,
        Added,
        setAdded,
        Cart,
        setCart,
        data_from_searver,
        setData_from_searver
    }}>
        {children}
    </AuthContext.Provider>)
}

export {AuthContext,AuthProvider}