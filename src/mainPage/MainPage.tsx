import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import { FilterBlock } from './FIlterBlock/FilterBlock.jsx';
import { useState } from "react";

import { Header } from './Header/Header.jsx';
import { MainContent } from './MainContent/MainContent.jsx';
import { Sidebar } from './Sidebar/SideBar.jsx';

import './styles/MainPage.scss'
import { Analitic } from '../otherPages/Analitic.jsx';
import { Employees } from '../otherPages/Employees.jsx';
import { Clients } from '../otherPages/Clients.jsx';

const MainPage = () => {
    const [sidebarHoverState, setSidebarHoverState] = useState(false);
    const [filterVisibleState, setFilterVisibleState] = useState(false);

    return (
        <div className="mainpage">
            <div className="mainpage-left-side" onMouseOver={() => setSidebarHoverState(true)} onMouseOut={() => setSidebarHoverState(false)}>
                <Sidebar sidebarHoverState={sidebarHoverState} />
            </div>
            <div className={`mainpage-right-side mainpage-right-side_${!sidebarHoverState ? 'passive' : 'active'}`} >
                <Header />
                <FilterBlock filterVisibleState={filterVisibleState} setFilterVisibleState={setFilterVisibleState} />
                    <Switch>
                        <Route exact path="/">
                            <MainContent sidebarHoverState={sidebarHoverState} filterVisibleState={filterVisibleState} />
                        </Route>
                        <Route path="/clients">
                            <Clients />
                        </Route>
                        <Route path="/employees">
                            <Employees />
                        </Route>
                        <Route path="/analitic" render={() => <Analitic />}></Route>
                    </Switch>

            </div>
        </div >
    )
}
export { MainPage };