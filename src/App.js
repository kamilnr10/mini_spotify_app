import React, { useState, useRef } from "react";
import "./App.css";

function SongPlayer(props) {
  return (
    <section>
      <h1>Music player</h1>
      <img
        className="cover"
        width="250"
        height="250"
        src={props.song.coverUrl}
        alt="Song cover"
      />
      <audio key={props.song.audioUrl} controls>
        <source src={props.song.audioUrl}></source>
      </audio>
    </section>
  );
}

export default function App() {
  const songs = [
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
      title: "Deadfro5h",
      artist: "starfrosh",
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/majesty.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/majesty.jpg",
      title: "Majesty (Original Mix)",
      artist: "Ryan Craig Martin",
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/runs.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/runs.jpg",
      title: "Runs",
      artist: "Wowa",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];
  console.log(currentSong);

  function selectSong(selectedSongUrl) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSongUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }

  function SongListItem(props) {
    return (
      <li
        style={{ background: props.isCurrent ? "darkslategrey" : "" }}
        onClick={() => props.onSelectSong(props.song.audioUrl)}
      >
        {props.song.title} by {props.song.artist}
      </li>
    );
  }

  return (
    <div className="App">
      <SongPlayer song={currentSong} />
      <h2>Songs</h2>
      <ul>
        {songs.map((song) => (
          <SongListItem
            key={song.audioUrl}
            song={song}
            isCurrent={song.audioUrl === currentSong.audioUrl}
            onSelectSong={selectSong}
          />
        ))}
      </ul>
    </div>
  );
}
