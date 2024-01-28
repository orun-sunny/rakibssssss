import React, {useState} from 'react';
import {whoWeAreDropdown} from "./NavItems";
import { Link } from 'react-router-dom';
import "./Dropdown1.css";

function Dropdown1() {
  const [dropdown1, setaDropdown1] = useState(false);

  return (
    <>
      <ul className={dropdown1 ? "whoWeAre-submenu clicked" : 'whoWeAre-submenu'}
       onClick={() => setaDropdown1(!dropdown1)}>
       {whoWeAreDropdown.map(item =>{
        return(
            <li key={item.id}>
                <Link to={item.path} className={item.cName}
                onClick={() => setaDropdown1(false)}>
                {item.title}
                </Link>
            </li>
        );
       })} 
      </ul>
      
    </>
  );
}

export default Dropdown1;
