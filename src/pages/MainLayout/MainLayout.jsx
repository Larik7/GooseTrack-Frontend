import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import css from './mainlayout.module.css';

// import { TasksColumnsList } from 'components/Task/TasksColumnsList/TasksColumnsList';

import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const onCloseSideBar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={css.conteinerMainLayout}>
      <Header openMenu={openMenu} setOpen={setOpenMenu} />
      <main className={css.main}>
        <SideBar openMenu={openMenu} onClose={onCloseSideBar} />
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};


