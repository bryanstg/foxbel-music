import React from "react";
import PropTypes from "prop-types";

export const Music = ({ data, imgUrl }) => {
	return (
		<div className="music-box">
			<button
				className="music__cover"
				style={{
					backgroundImage: `url(${imgUrl})`
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
