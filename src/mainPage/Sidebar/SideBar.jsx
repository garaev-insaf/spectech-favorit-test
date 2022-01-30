import * as React from "react";
import { Link } from "react-router-dom";
import "./styles/Sidebar.scss";

const Sidebar = ({ sidebarHoverState }) => {
	const ClickLinkTo = (key) => {
		history.push({
			pathname: `/${key}`,
		});
	};
	return (
		<aside className="mainpage-sidebar">
			<header className="sidebar-header">
				<div className="company-icon">LOGO</div>
				<div className="company-name">name company</div>
			</header>
			<nav className="menu">
				<ul className="menu-list">
					<li className="menu-list__item">
						<Link
							to={{
								pathname: "/",
							}}
							className={sidebarHoverState ? "active" : "disabled"}
						>
							<div className="item-icon"></div>Главная
						</Link>
					</li>
					<li className="menu-list__item">
						<Link
							to={{
								pathname: "/clients",
							}}
							className={sidebarHoverState ? "active" : "disabled"}
						>
							<div className="item-icon"></div>Клиенты
						</Link>
					</li>
					<li className="menu-list__item">
						<Link
							to={{
								pathname: "/employees",
							}}
							className={sidebarHoverState ? "active" : "disabled"}
						>
							<div className="item-icon"></div>Сотрудники
						</Link>
					</li>
					<li className="menu-list__item">
						<Link
							to={{
								pathname: "/analitic",
							}}
							className={sidebarHoverState ? "active" : "disabled"}
						>
							<div className="item-icon"></div>Аналитика
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};
export { Sidebar };
