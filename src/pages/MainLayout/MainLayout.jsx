import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import css from './mainlayout.module.css';

// import { TasksColumnsList } from 'components/Task/TasksColumnsList/TasksColumnsList';

import React, { useState } from 'react';

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
        <div className={css.component}>
          {' '}
          Some component
          {/* <TasksColumnsList></TasksColumnsList> */}
        </div>
      </main>
    </div>
  );
};
