
 import ProductData from "./ProductData"
 import {ChristmassDealsEl} from "./ChristmassDealsEl"
 import { useContext,useState } from "react"
 import { AuthContext } from "../context"
 import { CartComponent } from "./CartComponent"
 
 
 
 


const Deals=()=>{

   
    
   
      const {showCartPage,setshowcartpage}=useContext(AuthContext)
      const {SeachVal,setSearchval}=useContext(AuthContext)
      
      const filtered=ProductData.filter((fill)=>fill.title.toLocaleLowerCase().includes(`${SeachVal}`))
        const prods=filtered.map((prod)=>{
            return(
    <ChristmassDealsEl key={prod.id} {...prod}/>
            )
        })
        return<div>{showCartPage?"":<div>
            <p>Our Deals...</p>
      <hr/><div className="deals">
           
        {prods}
              </div></div> } </div> 
        
    }
    
    
 
export {Deals}