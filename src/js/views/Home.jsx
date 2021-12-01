import React from "react";

import { Menu } from "../component/Menu.jsx";
import { Main } from "./../component/Main.jsx";
import { MusicPlayer } from "./../component/MusicPlayer.jsx";

export const Home = () => (
	<div className="home-box">
		<div className="home__menu">
			<Menu />
		</div>
		<div className="home__main">
			<Main />
		</div>
		<div className="home__music-player">
			<MusicPlayer />
		</div>
	</div>
);
