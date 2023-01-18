import { AuthContext } from "../context";
import { useContext } from "react";
import { AddedToCArt } from "./ShowAdded";
const Footer = () => {
  const { showAdded, setShowAdded } = useContext(AuthContext);
  return (
    <footer>
      {showAdded && <AddedToCArt />}
      <a href="">
        <p>Team</p>
      </a>
      <p>&copy;Copyrigt2022||MayeCompanies||Superpass</p>
    </footer>
  );
};

export { Footer };
