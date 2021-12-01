import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

export const SearchBar = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState();
	return (
		<React.Fragment>
			<div className="search-bar">
				<input
					className="search-bar__input"
					type="text"
					placeholder="Buscar..."
					id="search-bar"
					value={search}
					onChange={event => {
						setSearch(event.target.value);
					}}
					onKeyDown={event => {
						if (search && event.key == "Enter") {
							actions.search(search);
						}
					}}
				/>
				<label className="search-bar__label" htmlFor="search-bar">
					<i className="search-bar__label--icon fas fa-search" />
				</label>
			</div>
		</React.Fragment>
	);
};
