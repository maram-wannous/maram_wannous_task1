import {FaBars} from 'react-icons/fa';
import './NavbarStyle.css';
import { useEffect, useRef, useState } from 'react';

export default function Navbar({logo, list, button}) {
  const [menuOpened, setMenuOpened] = useState(false);
  let menuRef = useRef();

  // click out side the menu
  useEffect(()=>{
    let handler = (e)=> {
      if(!menuRef.current.contains(e.target)){
      setMenuOpened(false);
    }
  };
  document.addEventListener("mousedown", handler);
  return()=> {
    document.removeEventListener("mousedown", handler);
  }
  
  },);
  // menu style
  const getMenuStyl = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800){
      if(!menuOpened){
        return{
          opacity: "0",
          visibility: "hidden",
          transform: "translateY(-20px)"
        }
      }
    }
  };

  return (
    <nav className='container'>
        <h1 className='logo'>{logo}</h1>
        <div ref={menuRef}>
          <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
              <FaBars />
          </div>
            <div className='containt' style={getMenuStyl(menuOpened)} >
                <ul className="nav-items">
                    <li><a href="#">{list[0]}</a></li>
                    <li><a href="#">{list[1]}</a></li>
                    <li><a href="#">{list[2]}</a></li>
                    <li><a href="#">{list[3]}</a></li>
                </ul>
                <button className='btn'>{button}</button>
            </div>
          </div>
    </nav>
  )
}