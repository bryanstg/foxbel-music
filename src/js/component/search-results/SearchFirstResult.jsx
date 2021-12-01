import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./../../store/appContext";
import { Loading } from "./../Loading.jsx";

export const SearchFirstResult = () => {
	const { store, actions } = useContext(Context);
	const firstResult = store.search.firstResult;
	return (
		<React.Fragment>
			{firstResult ? (
				<div className="first-box">
					<div className="first">
						<div
							className="first__repr"
							style={{
								backgroundImage: `url(${firstResult.album.cover_medium})`
							}}>
							<i className="first__repr--icon fas fa-play" />
						</div>
						<div className="first__info">
							<div className="first__info--album">
								<h2 className="album__title">{firstResult.album.title}</h2>
								<div className="album__info">
									<p className="album__info--descrip">{firstResult.album.label}</p>
									<div className="album__info--follows">{firstResult.album.fans}</div>
								</div>
							</div>
							<div className="first__info--intro" />
							<div className="first__info__actions">
								<button className="info__actions--play" />
								<button className="info__actions--follow" />
								<button className="info__actions--more" />
							</div>
						</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</React.Fragment>
	);
};

SearchFirstResult.propTypes = {
	firstResult: PropTypes.object
};
