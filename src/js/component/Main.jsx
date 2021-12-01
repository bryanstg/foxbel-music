import React from "react";
import { Navbar } from "./navbar/NavBar.jsx";
import { SearchFirstResult } from "./search-results/SearchFirstResult.jsx";

export const Main = () => {
	return (
		<div className="main-box">
			<Navbar />
			<SearchFirstResult />
		</div>
	);
};
