
import { AuthContext } from "../context";
import { useContext } from "react";
import { Link } from "react-router-dom";


const AddedToCArt=()=>{

    const {showCartPage,setshowcartpage}=useContext(AuthContext)
    const { Added, setAdded } = useContext(AuthContext);
    const{showAdded,setShowAdded}=useContext(AuthContext)
    return <div className="AddedNotification">
    <p>You Have Added The Following to Cart</p>
    <p>Title: <span className="grey">{Added.title}</span></p>
    <p> price:<span className="grey">{Added.price}</span></p>
     <button onClick={()=>{
      setShowAdded(false)
      
    }} >Cancel</button>
    <Link to={"/cart"}><button className="view-cart" onClick={()=>{
      setShowAdded(false)
    }}>View Cart</button></Link>
   
  </div>
}

export {AddedToCArt}