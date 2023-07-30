import {FaBars} from 'react-icons/fa';
import './NavbarStyle.css';
import { useEffect, useRef, useState } from 'react';

export default function Navbar({logo, navmenu, button}) {
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
  // const getMenuStyl = (menuOpened) => {
  //   if (document.documentElement.clientWidth <= 800){
  //     if(!menuOpened){
  //       return{
  //         opacity: "0",
  //         visibility: "hidden",
  //         transform: "translateY(-20px)"
  //       }
  //     }
  //   }
  // };

  return (
    <nav className='container'>
        <h1 className='logo'>{logo}</h1>
        <div ref={menuRef}>
          <div className="menu-icon" onClick={() => setMenuOpened((prev)=> !prev)}>
              <FaBars />
          </div>
            <div className={(menuOpened) ? 'containt active' : 'containt inactive'} 
            // style={getMenuStyl(menuOpened)} 
            >
                <ul className="nav-items">
                    {navmenu.map((e) => <li><a href="">{e}</a></li>
                    )}
                </ul>
                <button className='btn'>{button}</button>
            </div>
          </div>
    </nav>
  )
}
