const getState = ({ getStore, getActions, setStore }) => {
	const APP_ID = process.env.APP_ID;
	const REDIRECTION = process.env.REDIRECTION;
	const API_KEY = process.env.API_KEY;
	return {
		store: {
			search: {
				firstResult: {
					data: undefined,
					artist: undefined,
					album: undefined
				},
				results: undefined
			},
			charts: {
				tracks: [],
				albums: [],
				playlists: []
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			searchWithSDK: toSearch => {
				const store = getStore();
				const actions = getActions();
				DZ.api(`/search?q="${toSearch}"`, function(response) {
					console.log(response);
					setStore({
						search: {
							...store.search,
							results: response.data,
							firstResult: {
								...store.search.firstResult,
								data: response.data[0]
							}
						}
					});
					const artistId = response.data[0].artist.id;
					actions.getFirstResultArtist(artistId);

					const albumId = response.data[0].album.id;
					actions.getFirstResultAlbum(albumId);
				});
			},
			getChart: () => {
				const store = getStore();
				const actions = getActions();
				DZ.api(`/chart`, function(response) {
					setStore({
						charts: {
							...store.charts,
							tracks: response.tracks.data,
							albums: response.albums.data,
							playlists: response.playlists.data
						}
					});
				});
			},
			getFirstResultArtist: id => {
				const store = getStore();
				DZ.api(`/artist/${id}`, function(response) {
					console.log(response);
					setStore({
						search: {
							...store.search,
							firstResult: {
								...store.search.firstResult,
								artist: response
							}
						}
					});
				});
			},
			getFirstResultAlbum: id => {
				const store = getStore();
				DZ.api(`/album/${id}`, function(response) {
					console.log(response);
					setStore({
						search: {
							...store.search,
							firstResult: {
								...store.search.firstResult,
								album: response
							}
						}
					});
				});
			}
		}
	};
};

export default getState;
