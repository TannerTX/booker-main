import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { useNavigate } from "react-router-dom";
import { NavbarData } from "./NavbarData.js"
import './Navbar.css';

export default function Navbar() {
  
  let navigate = useNavigate();

  return (
    <div className="Navbar-Main">
      <table>
        <tbody>
          <tr>
            {NavbarData.map((item, key) => (
              <td key={key}>
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
