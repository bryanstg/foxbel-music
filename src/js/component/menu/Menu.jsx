import React, { useState } from "react";
import { Link } from "react-router-dom";
import FoxbelLogo from "./../../../img/foxbel-music@2x.png";

export const Menu = () => {
	const [active, setActive] = useState({
		recientes: true
	});

	const handleActive = link => {
		setActive({
			recientes: true,
			artistas: false,
			albums: false,
			canciones: false,
			estaciones: false
		});
	};
	const windowSize = window.innerWidth;
	return (
		<React.Fragment>
			<div
				className={`menu__hamburguer ${windowSize < 670 && active ? "" : "close"}`}
				onClick={() => {
					setActive(prev => !prev);
				}}>
				<div className="menu__hamburguer--line" />
				<div className="menu__hamburguer--line" />
				<div className="menu__hamburguer--line" />
			</div>
			<div className={`menu-box ${active ? "menu-open" : ""}`}>
				<div className="menu__logo" style={{ backgroundImage: `url(${FoxbelLogo})` }}>
					{""}
				</div>
				<div className="menu__section">
					<h2 className="section__title" to="/home">
						{"Mi Libreria"}
					</h2>
					<Link className={`section__link ${active.recientes && "active"}`} to="/home">
						{"Recientes"}
					</Link>
					<Link className="section__link" to="/home">
						{"Artistas"}
					</Link>
					<Link className="section__link" to="/home">
						{"Albums"}
					</Link>
					<Link className="section__link" to="/home">
						{"Canciones"}
					</Link>
					<Link className="section__link" to="/home">
						{"Estaciones"}
					</Link>
				</div>
				<div className="menu__section">
					<h2 className="section__title" to="/home">
						{"Playlist"}
					</h2>
					<Link className="section__link" to="/home">
						{"Metal"}
					</Link>
					<Link className="section__link" to="/home">
						{"Para Bailar"}
					</Link>
					<Link className="section__link" to="/home">
						{"Rock 90's"}
					</Link>
					<Link className="section__link" to="/home">
						{"Baladas"}
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};
