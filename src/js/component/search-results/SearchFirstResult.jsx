import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./../../store/appContext";
import { Loading } from "./../Loading.jsx";

export const SearchFirstResult = () => {
	const { store, actions } = useContext(Context);
	const firstResult = store.search.firstResult.data
		? store.search.firstResult.data
		: store.charts.tracks && store.charts.tracks[0];
	console.log(firstResult);
	return (
		<React.Fragment>
			{firstResult && store.charts.tracks ? (
				<div className="first-box">
					<div className="first">
						<button
							className="first__repr"
							style={{
								backgroundImage: `url(${firstResult.album.cover_medium})`
							}}>
							<i className="first__repr--icon fas fa-play" />
						</button>
						<div
							className="first__info"
							style={{
								backgroundImage: `url(${firstResult.artist.picture_big})`
							}}>
							<div className="first__info--album">
								<h2 className="album__title">{firstResult.album.title}</h2>
								<div className="album__info">
									<p className="album__info--descrip">{firstResult.album.label}</p>
									<div className="album__info--follows">{firstResult.artist.nb_fan}</div>
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
