
import { Header } from "components/Header/Header"
import { SideBar } from "components/SideBar/SideBar"
import css from './mainlayout.module.css'

import React, { useState, useEffect } from 'react';


export const MainLayout =()=>{
const [openMenu, setOpen] = useState(true); 
   
 

   
    return(
<div className={css.conteinerMainLayout}>
<Header openMenu={openMenu} setOpen={setOpen}  />
<main className={css.main}>
 <SideBar openMenu={openMenu}/>

    <div className={css.component} > Some component</div>
</main>
</div>

    )



}