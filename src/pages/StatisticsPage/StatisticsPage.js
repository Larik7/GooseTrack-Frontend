import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import css from './StatisticsPage.module.css';

import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';

import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const StatisticsPage = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const hendelBackDropClick = e => {
    if (e.target === e.currentTarget && !openMenu) {
      console.log('кликнули');
      setOpenMenu(!openMenu);
    }
  };

  const onCloseSideBar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={css.conteinerMainLayout}>
      <div className={!openMenu && css.backDrop} onClick={hendelBackDropClick}>
        {' '}
      </div>
      <Header openMenu={openMenu} setOpen={setOpenMenu} />

      <aside className={css.aside}>
        <SideBar openMenu={openMenu} onClose={onCloseSideBar} />
      </aside>

      <main className={css.main}>
        <div className={css.mainComponent}>
          <Suspense fallback={null}>
            {
              <div className={css.wrapper}>
                <div className={css.upperchart}>
                  <ul className={css.list}>
                    <li className={css.itemDay}>By Day</li>
                    <li className={css.itemMonth}>By Month</li>
                  </ul>
                </div>
                <div className={css.chart}>
                  <StatisticsChart />
                </div>
              </div>
            }
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};
