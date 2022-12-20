import React from "react";

export default function Header() {
  const [ac, setAc] = React.useState(false);
  const [lgn, setLgn] = React.useState(true);
  function Acc() {
    setAc((prevState) => !prevState);
  }
  function Log(){
    setLgn(prevState=>!prevState)
  }
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
          {lgn &&<div className="crt"><img  src="./src/assets/images/cart.png" />
          
        </div>
      
        }
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
