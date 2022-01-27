import * as React from "react";
import "./styles/Header.scss";

const Header = () => {
	return (
		<header className="mainpage-header">
			<input type="search" name="search" id="" className="input_search" placeholder="Поиск..."/>
			<div className="user-info-wrapper">
				<div className="user-name">Петров В. А.</div>
				<div className="user-icon">В. А.</div>
			</div>
		</header>
	);
};
export { Header };
