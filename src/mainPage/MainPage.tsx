import * as React from 'react';
import { FilterBlock } from './FIlterBlock/FilterBlock.jsx';
import { useState } from "react";

import { Header } from './Header/Header.jsx';
import { MainContent } from './MainContent/MainContent.jsx';
import { Sidebar } from './Sidebar/SideBar.jsx';

import './styles/MainPage.scss'

const MainPage = () => {
    const [sidebarHoverState, setSidebarHoverState] = useState(false);
    const [filterVisibleState, setFilterVisibleState] = useState(false);

    return (
        <div className="mainpage">
            <div className="mainpage-left-side" onMouseOver={() => setSidebarHoverState(true)} onMouseOut={() => setSidebarHoverState(false)}>
                <Sidebar  sidebarHoverState={sidebarHoverState}/>
            </div>
            <div className={`mainpage-right-side mainpage-right-side_${!sidebarHoverState ? 'passive' : 'active'}`} >
                <Header />
                <FilterBlock filterVisibleState={filterVisibleState} setFilterVisibleState={setFilterVisibleState}/>
                <MainContent sidebarHoverState={sidebarHoverState} filterVisibleState={filterVisibleState}/>
            </div>
        </div >
    )
}
export { MainPage };