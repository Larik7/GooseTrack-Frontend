
import { Header } from "components/Header/Header"
import { SideBar } from "components/SideBar/SideBar"
import css from './mainlayout.module.css'
import React, { useState, useEffect } from 'react';


export const MainLayout =()=>{
    // const isViewportWideEnough = window.innerWidth >= 1440;

      

   
    return(
<div className={css.conteinerMainLayout}>
<Header/>
<main className={css.main}>
<SideBar/>
    <div className={css.component} > Some component</div>
</main>
</div>

    )



}