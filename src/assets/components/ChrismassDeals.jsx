
import ProductData from "./ProductData"
import {ChristmassDealsEl} from "../../../ChristmassDealsEl"
import { useContext,useState } from "react"
import { AuthContext } from "../context"



const ChristmassDeals=()=>{
  const {SeachVal,setSearchval}=useContext(AuthContext)
  
  const filtered=ProductData.filter((fill)=>fill.title.toLocaleLowerCase().includes(`${SeachVal}`))
    const prods=filtered.map((prod)=>{
        return(
<ChristmassDealsEl key={prod.id} {...prod}/>
        )
    })
    return(
      <div className="deals">
       
{prods}
      </div>  
    )
}


export {ChristmassDeals}
