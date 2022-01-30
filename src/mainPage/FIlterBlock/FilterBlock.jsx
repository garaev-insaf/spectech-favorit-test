import * as React from "react";
import { FilterMain } from "./FilterMain/FilterMain.jsx";
import { useRef, useEffect, useState } from "react";
import "./styles/FilterBlock.scss";


const FilterBlock = ({filterVisibleState, setFilterVisibleState}) => {

    const changeVisible = () => {
        setFilterVisibleState(!filterVisibleState);
    }
	return (
		<section className="filter-section">
            <header className="filter-header">
                <h2 className="header-text">filter block</h2>
                <button onClick={() => changeVisible()}><img src="/images/icons8-settings.svg" alt="setting"/></button>
            </header>
            <FilterMain filterVisibleState={filterVisibleState}/>
        </section>
	);
};
export { FilterBlock };
