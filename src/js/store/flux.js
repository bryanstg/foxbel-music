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
			},
			player: {
				counter: 0,
				playlist: [],
				back: undefined,
				actual: undefined,
				next: undefined
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

					const actualTrack = response.data[0];
					actions.setActualPlayerTrack(actualTrack);
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
					actions.setActualPlayerTrack(response.tracks.data[0]);
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
			},
			setActualPlayerTrack: track => {
				const store = getStore();
				setStore({
					player: {
						...store.player,
						actual: track
					}
				});
			},
			setNextPlayerTrack: track => {
				const store = getStore();

				setStore({
					player: {
						...store.player,
						next: track,
						counter: store.player.counter + 1
					}
				});
			},
			setBackPlayerTrack: track => {
				const store = getStore();

				setStore({
					player: {
						...store.player,
						back: track,
						counter: store.player.counter - 1
					}
				});
			},
			getPlayerPlaylist: playlistUrl => {
				const store = getStore();
				const actions = getActions();
				DZ.api(`/${playlistUrl}`, function(response) {
					setStore({
						player: {
							...store.player,
							actual: response.data[0],
							next: response.data[1],
							playlist: response.data
						}
					});
				});
			},
			handlePlaylistTracks: async object => {
				console.log(object);
				const actions = getActions();
				if (object.type == "podcast") return;
				if (object.type != "track") {
					const getPlaylist = await actions.getPlayerPlaylist(
						object.tracklist.replace("https://api.deezer.com/", "")
					);
				}
				if (object.type == "track") {
					const getPlaylist = await actions.getPlayerPlaylist(
						object.artist.tracklist.replace("https://api.deezer.com/", "")
					);
				}
			},
			handleNextSong: () => {
				const store = getStore();
			}
		}
	};
};

export default getState;
