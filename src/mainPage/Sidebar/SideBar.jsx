import * as React from "react";
import "./styles/Sidebar.scss";

const Sidebar = ({sidebarHoverState}) => {
	const ClickLinkTo = (key) => {
		history.push({
			pathname: `/${key}`,
		});
	}
	return (
		<aside className="mainpage-sidebar">
			<header className="sidebar-header">
				<div className="company-icon">LOGO</div>
				<div className="company-name">name company</div>
			</header>
			<nav className="menu">
				<ul className="menu-list">
					<li className="menu-list__item">
						<div className="item-icon"></div>Главная
					</li>
					<li className="menu-list__item">
						<div className="item-icon"></div>Клиенты
					</li>
					<li className="menu-list__item">
						<div className="item-icon"></div>Сотрудники
					</li>
					<li className="menu-list__item">
						<div className="item-icon"></div>Аналитика
					</li>
				</ul>
			</nav>
		</aside>
	);
};
export { Sidebar };
