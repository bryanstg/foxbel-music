import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Loading } from "./Loading.jsx";

export const MusicPlayer = () => {
	const { store, actions } = useContext(Context);

	//Handle Volume
	const [volume, setVolume] = useState("50");
	const [openVolume, setOpenVolume] = useState(false);

	//Handle playing
	const actual = store.player.actual;
	const back = store.player.back;
	const next = store.player.next;
	const [playing, setPlaying] = useState(false);
	const [actualAudio, setActualAudio] = useState({});
	if (actualAudio !== {}) {
		actualAudio.volume = volume / 100;
	}
	const viewportWidth = window.innerWidth;

	const reprAudio = audio => {
		if (playing) {
			audio.pause();
			setPlaying(false);
		}
		if (playing == false) {
			audio.play();
			setPlaying(true);
		}
	};

	useEffect(() => {}, [actual]);
	return (
		<React.Fragment>
			{actual ? (
				<div className="music-player-box">
					<div className="music-player__song">
						<div
							className="music-player__song--cover"
							style={{ backgroundImage: `url(${actual.album.cover_medium})` }}
						/>
						<div className="music-player__song--info">
							<div className="song__title">{actual.title}</div>
							<div className="song__artist">{`${actual.artist.name} - ${actual.album.title}`}</div>
						</div>
					</div>
					<div className="music-player__repr">
						<button className="music-player__repr--back">
							<i className="back__icon fas fa-step-backward" />
						</button>
						<button
							onClick={async e => {
								if (actualAudio !== {} && actualAudio.src !== actual.preview) {
									const audio = new Audio(actual.preview);
									setActualAudio(audio);
									reprAudio(audio);
								}
								if (actualAudio.play || actualAudio.paused) {
									reprAudio(actualAudio);
								}
							}}
							className="music-player__repr--play">
							<i className="play__icon fas fa-play" />
						</button>
						<button className="music-player__repr--next">
							<i className="next__icon fas fa-step-forward" />
						</button>
					</div>
					<div className="music-player__volume">
						<input
							className={`volume__input ${viewportWidth < 670 && openVolume ? "volume-open" : ""}`}
							type="range"
							min="0"
							max="100"
							step="2"
							value={volume}
							onChange={event => {
								setVolume(event.target.value);
								actualAudio.volume = event.target.value / 100;
							}}
							name=""
							id=""
						/>
						<i className="volume__icon fas fa-volume-off" />
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
