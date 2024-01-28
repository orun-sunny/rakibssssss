import React, {useState} from 'react';
import {whatWeDoDropdown} from "./NavItems";
import { Link } from 'react-router-dom';
import "./Dropdown2.css";

function Dropdown2() {
  const [dropdown2, setaDropdown2] = useState(false);

  return (
    <>
      <ul className={dropdown2 ? "whatWeDo-submenu clicked" : 'whatWeDo-submenu'}
       onClick={() => setaDropdown2(!dropdown2)}>
       {whatWeDoDropdown.map(item =>{
        return(
            <li key={item.id}>
                <Link to={item.path} className={item.cName}
                onClick={() => setaDropdown2(false)}>
                {item.title}
                </Link>
            </li>
        );
       })} 
      </ul>
      
    </>
  );
}

export default Dropdown2;
