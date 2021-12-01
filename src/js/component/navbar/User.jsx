import React, { useContext, useEffect } from "react";
import { Context } from "./../../store/appContext";

export const User = () => {
	const { store, actions } = useContext(Context);
	console.log(window.location.href);
	const APP_ID = process.env.APP_ID;
	const REDIRECTION = process.env.REDIRECTION;
	const API_KEY = process.env.API_KEY;

	const loggUrl = `https://connect.deezer.com/oauth/auth.php?app_id=${APP_ID}&redirect_uri=${REDIRECTION}&perms=basic_access,email,offline_access`;
	useEffect(() => {
		if (window.location.href.includes("code=")) {
			const actualUrl = window.location.href;
			const reFilteredCodeUrl = /&code(=[^&]*)?|^code(=[^&]*)?&?/;
			const [first, last] = actualUrl.split("?");
			const codeMatch = last.match(reFilteredCodeUrl);
			const code = codeMatch[0].split("=")[1];
			actions.setCode(code);
			const urlToken = `https://connect.deezer.com/oauth/access_token.php?app_id=${APP_ID}&secret=${API_KEY}&code=${code}`;
			window.location.replace(urlToken);
			const text = document.querySelector("text");
			console.log(text);
		}
	}, []);
	return (
		<div className="user">
			<div className="user__logged">
				<i className="user__logged--icon fas fa-user-alt" />
				<div className="user__logged--name">{`Francisco M.`}</div>
			</div>
		</div>
	);
};
