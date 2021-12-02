import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Music } from "./music/Music.jsx";
import { Navbar } from "./navbar/NavBar.jsx";
import { Charts } from "./search-results/Charts.jsx";
import { SearchFirstResult } from "./search-results/SearchFirstResult.jsx";

export const Main = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="main-box">
			<Navbar />
			{store.search.results ? (
				<React.Fragment>
					<SearchFirstResult />
					<div className="results-box">
						<h2 className="results__title">Resultados</h2>
						<div className="results__music">
							{store.search.results.map((result, index) => {
								if (index > 9) return;
								return <Music data={result} imgUrl={result.album.cover_medium} key={result.id} />;
							})}
						</div>
					</div>
				</React.Fragment>
			) : (
				<Charts />
			)}
		</div>
	);
};
