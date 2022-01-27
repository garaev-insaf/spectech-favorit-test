import * as React from 'react';

import { Header } from './Header/Header.jsx';
import { MainContent } from './MainContent/MainContent.jsx';
import { Sidebar } from './Sidebar/SideBar.jsx';

import './styles/MainPage.scss'

const MainPage = () => {
    const [sidebarHoverState, setSidebarHoverState] = React.useState(false);

    return (
        <div className="mainpage">
            <div className="mainpage-left-side" onMouseOver={() => setSidebarHoverState(true)} onMouseOut={() => setSidebarHoverState(false)}>
                <Sidebar />
            </div>
            {!sidebarHoverState ? <div className="mainpage-right-side mainpage-right-side_passive">
                <Header />
                <MainContent />
            </div> : <div className="mainpage-right-side mainpage-right-side_active">
                <Header />
                <MainContent />
            </div>}
            

        </div>
    )
}
export { MainPage };