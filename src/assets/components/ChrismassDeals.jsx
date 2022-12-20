
import ProductData from "./ProductData"

import ChristmassDealsEl from "./ChristmassDealsEl"
export default function ChristmassDeals(){
    const prods=ProductData.map((prod)=>{
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