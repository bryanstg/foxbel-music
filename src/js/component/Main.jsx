import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navbar } from "./navbar/NavBar.jsx";
import { Charts } from "./search-results/Charts.jsx";
import { SearchFirstResult } from "./search-results/SearchFirstResult.jsx";

export const Main = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="main-box">
			<Navbar />
			{store.search.results ? <SearchFirstResult /> : <Charts />}
		</div>
	);
};
