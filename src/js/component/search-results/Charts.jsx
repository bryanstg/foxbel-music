import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Music } from "../music/Music.jsx";

export const Charts = () => {
	const { store, actions } = useContext(Context);
	const albums = store.charts.albums;
	const tracks = store.charts.tracks;
	const playlists = store.charts.playlists;
	return (
		<div className="charts-box">
			<h2 className="charts__title">Top 10</h2>
			<h2 className="charts__list--title">Playlists</h2>
			<div className="charts__list playlists">
				{playlists.map(playlist => {
					return <Music data={playlist} imgUrl={playlist.picture_medium} key={playlist.id} />;
				})}
			</div>
			<h2 className="charts__list--title">Tracks</h2>
			<div className="charts__list tracks">
				{tracks.map(track => {
					return <Music data={track} imgUrl={track.album.cover_medium} key={track.id} />;
				})}
			</div>
			<h2 className="charts__list--title">Albums</h2>
			<div className="charts__list albums">
				{albums.map(album => {
					return <Music data={album} imgUrl={album.cover_medium} key={album.id} />;
				})}
			</div>
		</div>
	);
};
