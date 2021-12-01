const getState = ({ getStore, getActions, setStore }) => {
	const APP_ID = process.env.APP_ID;
	const REDIRECTION = process.env.REDIRECTION;
	const API_KEY = process.env.API_KEY;
	return {
		store: {
			user: {
				logged: false,
				code: "",
				token: "frN2Vue28wKYGAdy4waH1p4n5YiW01MaRrqf6iX81RVd7XBqjt"
			},
			search: {
				firstResult: undefined,
				result: undefined
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			userLogged: async status => {
				//Status should be a bolean: true is logged.
				const store = getStore();
				const loggUrl = `https://connect.deezer.com/oauth/auth.php?app_id=${APP_ID}&redirect_uri=${REDIRECTION}&perms=basic_access,email,offline_access`;

				setStore({
					user: {
						...store.user,
						logged: status
					}
				});
			},
			setCode: code => {
				const store = getStore();
				setStore({
					user: {
						...store.user,
						code: code
					}
				});
			},
			setToken: async code => {
				const url = `https://connect.deezer.com/oauth/access_token.php?app_id=${APP_ID}&secret=${API_KEY}&code=${code}`;
				const request = await fetch(url);
				console.log(request);
				if (request.ok) {
					const body = await request.json;
				}
			},
			search: async toSearch => {
				try {
					const apiUri = `https://api.deezer.com/search?q=${toSearch}`;
					const request = await fetch(apiUri, {
						method: "GET",
						headers: { "Content-type": "application/json" }
					});
					console.log(request);
					if (request.ok) {
						const body = await request.json;
						console.log(body);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
