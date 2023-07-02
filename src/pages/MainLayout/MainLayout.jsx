import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import css from './mainlayout.module.css';

import React, { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TasksColumnsList } from 'components/Task/TasksColumnsList/TasksColumnsList';

export const MainLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const location = useLocation();

  const hendelBackDropClick = e => {
    if (e.target === e.currentTarget && !openMenu) {
      console.log('кликнули');
      setOpenMenu(!openMenu);
    }
  };

  const onCloseSideBar = () => {
    setOpenMenu(!openMenu);
  };

  const shouldDisplayTasksColumnsList = location.pathname === '/mainLayout';
  
  const toggleShowSideBar = (status = null) => {
    if (status === null) {
      setOpenMenu(prev => !prev);
    } else {
      setOpenMenu(status);
    }
  };

  return (
    <div className={css.conteinerMainLayout}>

      {!openMenu ? (
        <div className={css.backDrop} onClick={hendelBackDropClick}></div>
      ) : (
        <></>
      )}
      <Header
        openMenu={openMenu}
        setOpen={setOpenMenu}
        toggleShowSideBar={toggleShowSideBar}
      />
      <aside className={css.aside}>
        <SideBar openMenu={openMenu} onClose={onCloseSideBar} />
      </aside>

      <main className={css.main}>
        <div className={css.mainComponent}>
          <Suspense fallback={null}>
            {shouldDisplayTasksColumnsList && <TasksColumnsList />}
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};


      //  <div className={!openMenu && css.backDrop} onClick={hendelBackDropClick}>
      //    {' '}
      //  </div>;