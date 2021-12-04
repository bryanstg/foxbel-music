import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./../../store/appContext";
import { Loading } from "./../Loading.jsx";
import millify from "millify";

export const SearchFirstResult = () => {
	const { store, actions } = useContext(Context);
	const firstResult = store.search.firstResult;

	return (
		<React.Fragment>
			{firstResult.album && firstResult.artist ? (
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
								backgroundImage: `linear-gradient(266deg, rgba(195,136,136,0.3841911764705882) 0%, rgba(195,136,136,1) 50%), url(${
									window.innerWidth > 670 ? firstResult.artist.picture_big : ""
								})`
							}}>
							<div className="first__info--album">
								<h2 className="album__title">{firstResult.album.title}</h2>
								<div className="album__info">
									<p className="album__info--description">{firstResult.album.label}</p>
									<div className="album__info--follows">
										{millify(firstResult.artist.nb_fan, {
											precision: 3,
											space: true
										})}
									</div>
								</div>
							</div>
							<div className="first__info--intro" />
							<div className="first__info__actions">
								<button className="info__actions--play">Reproducir</button>
								<button className="info__actions--follow">Follow</button>
								<div className="info__actions--more">
									<button className="more" />
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="loading-box">
					<Loading />
				</div>
			)}
		</React.Fragment>
	);
};

SearchFirstResult.propTypes = {
	firstResult: PropTypes.object
};
