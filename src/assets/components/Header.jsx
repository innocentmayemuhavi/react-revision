import { useState,useContext,useEffect } from "react";
import { AuthContext } from "../context";
import { CartComponent } from "./CartComponent";
const Header = () => {
  const [ac, setAc] = useState(false);
  const [lgn, setLgn] = useState(true);
 const {SeachVal,setSearchval}=useContext(AuthContext)

  const Acc = () => {
    setAc((prevState) => !prevState);
  }
  const Log = () => {
    setLgn(prevState=>!prevState)
  }

  const UpdateVal=(event)=>{
    setSearchval(event.target.value)
    console.log(SeachVal)

  }

  useEffect(()=>{
    console.log(SeachVal)
  },[])



  return (
    <header>
      <div className="logo">
        <img src="./src/assets/images/sp-logo.jpg"></img>
        <h3>SuperPass-E-Market</h3>
      </div>

      <div>
        <input
          className="search"
          type="search"
          placeholder="Search for Products"
          onChange={UpdateVal}
        />
      </div>
      <div className="act">
        <h3>MayeCompanies</h3>
        <img
          className="accountpic"
          onClick={Acc}
          src="../src/assets/images/Account.jpeg"
        />
      </div>
      {ac && (
        <div className="account">
          <img onClick={Acc} src="./src/assets/images/cancel.png" />
          <p>Welcome to our E-market...</p>
          {lgn && (
            <p>
              Name:<span className="grey"></span>
            </p>
          )}
          {lgn && (
            <p>
              User id:<span className="grey"></span>
            </p>
          )}
         <div className="crt"><img  src="./src/assets/images/cart.png" />
        <CartComponent/>
        </div>
       {lgn&&<p>cart</p>}
          {lgn === false ? (
            <button className="lgn" onClick={Log}>Login</button>
          ) : (
            <button className="lgn" onClick={Log}>Logout</button>
          )}
        </div>
      )}
     
    </header>
  );
}
export {Header}
