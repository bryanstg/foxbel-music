import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";

export const Music = ({ data, imgUrl }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="music-box">
			<button
				className="music__cover"
				style={{
					backgroundImage: `url(${imgUrl})`
				}}
				onClick={e => {
					actions.handlePlaylistTracks(data);
					console.log("Hi, handle...");
				}}>
				<div className="music__cover--menu" />
				<i className="music__cover--icon fas fa-play" />
			</button>
			<div className="music__info">
				<div className="music__info--title">{data.title}</div>
				<div className="music__info--artist">{data.type == "playlist" ? data.user.name : data.artist.name}</div>
			</div>
		</div>
	);
};

Music.propTypes = {
	data: PropTypes.object,
	imgUrl: PropTypes.string
};
