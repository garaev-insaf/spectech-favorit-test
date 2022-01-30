import * as React from "react";
import "./styles/MainContent.scss";
const MainContent = ({sidebarHoverState, filterVisibleState}) => {
	return (
		<main className={`mainpage-main mainpage-main${sidebarHoverState ? '_activeSide' : '_passiveSide'}${filterVisibleState ? '_activeFilter' : '_passiveFilter' }`}>
			<div className="first-row row">
				<div className="sq_600px red"></div>
				<div className="sq_600px green"></div>
				<div className="sq_600px blue"></div>
			</div>
			<div className="second-row row">
				<div className="sq_600px red"></div>
				<div className="sq_600px green"></div>
				<div className="sq_600px blue"></div>
			</div>
		</main>
	);
};
export { MainContent };
