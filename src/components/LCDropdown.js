import React, {useState} from 'react';
import {languageCentre} from "./NavItems";
import { Link } from 'react-router-dom';
import "./LCDropdown.css";

function LCDropdown() {
  const [languageCentreDropdown, setLanguageCentreDropdown] = useState(false);

  return (
    <>
      <ul className={languageCentreDropdown ? "languageCentre-submenu clicked" : 'languageCentre-submenu'}
       onClick={() => setLanguageCentreDropdown(!languageCentreDropdown)}>
       {languageCentre.map(item =>{
        return(
            <li key={item.id}>
                <Link to={item.path} className={item.cName}
                onClick={() => setLanguageCentreDropdown(false)}>
                {item.title}
                </Link>
            </li>
        );
       })} 
      </ul>
      
    </>
  );
}

export default LCDropdown;
