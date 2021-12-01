import React from "react";
import PropTypes from "prop-types";

export const Loading = ({ what }) => {
	return (
		<div className="loading">
			<div className="spinner-border" role="status">
				<span className="visually-hidden">{`Loading ${what}...`}</span>
			</div>
		</div>
	);
};

Loading.propTypes = {
	what: PropTypes.string
};
