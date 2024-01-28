import React, {useState} from 'react';
import {trainingAndDevelopment} from "./NavItems";
import { Link } from 'react-router-dom';
import "./Dropdown3.css";


function Dropdown3() {
  const [dropdown3, setaDropdown3] = useState(false);
  const [languageCentreDropdown, setlanguageCentreDropdown] = useState(false);

  return (
    <>
      <ul style={{textAlign: "start"}}  className={dropdown3 ? "training-submenu clicked" : 'training-submenu'}
       onClick={() => setaDropdown3(!dropdown3)}>
       {trainingAndDevelopment.map(item =>{

        return(
            <li key={item.id}>
                <Link to={item.path} className={item.cName}
                onClick={() => setaDropdown3(false)}>
                {item.title}
                </Link>
            </li>
        );
       })} 
      </ul>
      
    </>
  );
}

export default Dropdown3;
