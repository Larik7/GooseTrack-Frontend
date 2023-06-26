import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import css from './mainlayout.module.css';
import { CreateTaskModal } from 'components/CreateTaskModal/CreateTaskModal';
import { useState } from 'react';

// import React, { useState, useEffect } from 'react';

export const MainLayout = () => {
  // const isViewportWideEnough = window.innerWidth >= 1440;


  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };


  return (
    <div className={css.conteinerMainLayout}>
      <Header />
      <main className={css.main}>
        <SideBar />
        <div className={css.component}> Some component</div>
        <button onClick={onClose}>open</button>
        {open && <CreateTaskModal onClose={onClose} />}
      </main>
    </div>
  );
};
