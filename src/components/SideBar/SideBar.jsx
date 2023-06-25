
import React, { useState, useEffect } from 'react';
import { UserNav } from "./UserNav/UserNav"
import { LogoutBtn } from "./LogoutBtn/LogoutBtn "
import Logo from '../../images/sideBar/Goose_logo_SideBar.png'
import css from './sideBar.module.css'


import { MdClose } from 'react-icons/md';


export const SideBar=()=>{

    const [shouldRender, setShouldRender] = useState(true);
    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1440) {
          setShouldRender(false);
        } else {
          setShouldRender(true);
        }
      };
          window.addEventListener('resize', handleResize);
          // проверяем ширину окна
          handleResize()
      // Очистка подписки при размонтировании компонента
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // если false то не рендерим и выходим
    if (!shouldRender) {
      return null;
    }


return (
<div className={css.conteinerSideBar}>

<div  className={css.logoBox}>
<img className={css.logoImg} src={Logo} alt="Goose_logo" /> 
<p  className={css.logoTitle}>GooseTrack</p>

  <button className={css.btnClose}><MdClose size={32}/></button>
  </div>
   

        <p className={css.titleNav} >User Panel</p>
    <UserNav/>
    <LogoutBtn/>

</div>

   )

}