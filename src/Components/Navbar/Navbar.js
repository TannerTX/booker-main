import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { useNavigate } from "react-router-dom";
import { NavbarData } from "./NavbarData.js"
import './Navbar.css';

export default function Navbar() {
  let navigate = useNavigate();
  const routeChange = (newPath) => {
    navigate(newPath);
  };

  /*
   -- FUTURE ADDITION FOR EASE-OF-USE --
   Implement New buttons for navbar through json
  */
  return (
    <div className="Navbar-Main">
      <table>
        <tbody>
          <tr>

            {NavbarData.map((item) => (
              <td>
                <button className="btn2" onClick={() => navigate(item.path)}>
                  {item.icon}
                </button>
              </td>
            ))}
            
          </tr>
        </tbody>
      </table>
    </div>
  );
}
