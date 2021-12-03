import React, { useContext, useEffect } from "react";
import { Context } from "./../../store/appContext";

export const User = () => {
	const { store, actions } = useContext(Context);
	console.log(window.location.href);
	const APP_ID = process.env.APP_ID;
	const REDIRECTION = process.env.REDIRECTION;
	const API_KEY = process.env.API_KEY;

	const handleLogin = () => {
		DZ.login(
			function(response) {
				if (response.authResponse) {
					console.log("Welcome!  Fetching your information.... ");
					DZ.api("/user/me", function(response) {
						console.log("Good to see you, " + response.name + ".");
					});
				} else {
					console.log("User cancelled login or did not fully authorize.");
				}
			},
			{ perms: "basic_access,email,offline_access" }
		);
	};

	return (
		<div className="user">
			<div className="user__logged">
				<i className="user__logged--icon fas fa-user-alt" onClick={handleLogin} />
				<div className="user__logged--name">{`Francisco M.`}</div>
			</div>
		</div>
	);
};
