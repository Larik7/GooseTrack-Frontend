import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import css from './mainlayout.module.css';
import { CreateTaskModal } from 'components/CreateTaskModal/CreateTaskModal';
import React, { useState  } from 'react';



export const MainLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [open, setOpen] = useState(false);
  
  const onCloseSideBar = () => {
    setOpenMenu(!openMenu)
      };
  
  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div className={css.conteinerMainLayout}>
      <Header openMenu={openMenu} setOpen={setOpenMenu}/>
      <main className={css.main}>

       <SideBar openMenu={openMenu}  onClose={onCloseSideBar}/>
        <div className={css.component}> Some component</div>
        <button onClick={onClose}>open</button>
        {open && <CreateTaskModal onClose={onClose} />}
      </main>
    </div>
  );
};
