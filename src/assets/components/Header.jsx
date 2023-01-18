import { useState,useContext,useEffect } from "react";
import { AuthContext } from "../context";

const Header = () => {

  const {isLoggedin, setLoggedin} = useContext(AuthContext);
 const {SeachVal,setSearchval}=useContext(AuthContext)
 const {showCartPage,setshowcartpage}=useContext(AuthContext)
 const {showAccount,setShowAccount}=useContext(AuthContext)
 const { data_from_searver, setData_from_searver } = useContext(AuthContext);
 const { showAdded, setShowAdded } = useContext(AuthContext);
  const Acc = () => {
    setShowAccount((prevState) => !prevState);
  }
  const Log = () => {
    setLoggedin(prevState=>!prevState)
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
      {showAccount && (
        <div className="account">
          <img onClick={Acc} src="./src/assets/images/cancel.png" />
          <p>Welcome to our E-market...</p>
          {isLoggedin && (
            <p>
              Name:<span className="grey"></span>
            </p>
          )}
          {isLoggedin && (
            <p>
              User id:<span className="grey"></span>
            </p>
          )}
         <div className="crt"  onClick={()=>{
          setshowcartpage(prev=>!prev)
          setShowAdded(false)

         }}><img  src="./src/assets/images/cart.png" />
         {data_from_searver.length>0?<div className="NumberOfCartElements">{data_from_searver.length}</div>:""}
        </div>
       {isLoggedin&&<p>cart</p>}
          {isLoggedin === false ? (
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
