import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./../../store/appContext";
import { Loading } from "./../Loading.jsx";

export const SearchFirstResult = () => {
	const { store, actions } = useContext(Context);
	const firstResult = store.search.firstResult.data
		? store.search.firstResult.data
		: store.charts.album && store.charts.tracks[0];
	console.log(window.innerWidth);
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
								background: `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url(${
									window.innerWidth > 670 ? firstResult.artist.picture_big : "none"
								})`
							}}>
							<div className="first__info--album">
								<h2 className="album__title">{firstResult.album && store.firstResult.album.title}</h2>
								<div className="album__info">
									<p className="album__info--descrip">
										{store.firstResult.album ? store.firstResult.album.label : "no cargué"}
									</p>
									<div className="album__info--follows">
										{store.firstResult.artist && store.firstResult.artist.nb_fan}
									</div>
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
