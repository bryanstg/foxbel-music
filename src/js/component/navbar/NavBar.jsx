import React from "react";

import { User } from "./User.jsx";
import { SearchBar } from "./SearchBar.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar-box">
			<div className="navbar__search-bar">
				<SearchBar />
			</div>
			<div className="navbar__user">
				<User />
			</div>
		</nav>
	);
};
