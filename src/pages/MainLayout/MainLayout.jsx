import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import css from './mainlayout.module.css';

// import { TasksColumnsList } from 'components/Task/TasksColumnsList/TasksColumnsList';

import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);

 const hendelBackDropClick = e => {
    if ( e.target=== e.currentTarget&& !openMenu) {
      console.log('кликнули')
      setOpenMenu(!openMenu);
   
    }
  };

  const onCloseSideBar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    
    <div className={css.conteinerMainLayout} >
<div className={!openMenu && css.backDrop} onClick={hendelBackDropClick}>   </div>
            <Header openMenu={openMenu} setOpen={setOpenMenu} />

        <aside className={css.aside}><SideBar openMenu={openMenu} onClose={onCloseSideBar} /></aside> 
         
      <main className={css.main} >
        <div className={css.mainComponent} > 
           <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense></div>
        
      </main>
    </div>
  );
};
