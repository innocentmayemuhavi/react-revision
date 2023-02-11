import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";

const Header = () => {
  const { isLoggedin, setLoggedin,User,SeachVal, setSearchval, showAccount, setShowAccount,Cart } = useContext(AuthContext);


 const Acc = () => {
    setShowAccount((prevState) => !prevState);
  };
  const Log = () => {
    setLoggedin((prevState) => !prevState);
  };

  const UpdateVal = (event) => {
    setSearchval(event.target.value);
    console.log(SeachVal);
  };

  useEffect(() => {
    console.log(SeachVal);
  }, []);

  return (
    <header>
      <div className="logo">
        <img src="./images/sp-logo.jpg"></img>
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
        <img className="accountpic" onClick={Acc} src="./images/Account.jpeg" />
      </div>
      {showAccount && (
        <div className="account">
          <img onClick={Acc} src="./images/cancel.png" />
          <p>Welcome to our E-market...</p>
          {isLoggedin && (
            <p>
              Name:<span className="grey">{User.name}</span>
            </p>
          )}
          {isLoggedin && (
            <p>
              User id:<span className="grey">{User.id}</span>
            </p>
          )}
          <div className="crt">
            <Link to={"/cart"}>
              <img className="cart-image" src="./images/cart.png" />
            </Link>
            {Cart.items.length > 0 ? (
              <div className="NumberOfCartElements">
                {Cart.items.length}
              </div>
            ) : (
              ""
            )}
          </div>
          {isLoggedin && <p>cart</p>}
          {isLoggedin === false ? (
            <button className="lgn" onClick={Log}>
              Login
            </button>
          ) : (
            <button className="lgn" onClick={Log}>
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};
export { Header };
