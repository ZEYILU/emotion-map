import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import GameComponent from "./components/GameComponent";
import "./App.css";

function App() {
  const [markers, setMarkers] = useState([
    {
      lat: 40.7128,
      lng: -74.006,
      time: "2024-11-29T12:30:00Z",
      emotion: "sad",
      story: "I was walking in Times Square, feeling sad because Trump won again... Then I tripped on a pigeon and spilled my coffee. Classic New York day!",
    },
    {
      lat: 48.8566,
      lng: 2.3522,
      time: "2024-11-28T15:00:00Z",
      emotion: "happy",
      story: "I proposed to my partner at the Eiffel Tower, but then we both got stuck in the elevator. It was romantic until it wasn’t!",
    },
    {
      lat: 35.6895,
      lng: 139.6917,
      time: "2024-11-27T18:45:00Z",
      emotion: "neutral",
      story: "Tried sushi for the first time in Tokyo. Turns out I’m terrible with chopsticks... ended up using a fork in front of the chef. Awkward!",
    },
    {
      lat: -33.8688,
      lng: 151.2093,
      time: "2024-11-29T08:20:00Z",
      emotion: "happy",
      story: "Bondi Beach was incredible! But I got chased by a seagull because it wanted my sandwich. I think I screamed louder than the waves.",
    },
    {
      lat: 55.7558,
      lng: 37.6173,
      time: "2024-11-26T14:00:00Z",
      emotion: "sad",
      story: "In Moscow, I got lost in the subway because all the signs were in Russian. Ended up in a station that looked like a palace, so I just admired the chandeliers until I figured out where to go.",
    },
    {
      lat: -23.5505,
      lng: -46.6333,
      time: "2024-11-30T10:00:00Z",
      emotion: "happy",
      story: "In São Paulo, I joined a samba dance class. Turns out, I have two left feet, but nobody cared because the energy was amazing!",
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      time: "2024-11-30T18:30:00Z",
      emotion: "neutral",
      story: "In London, I tried to sound British by ordering ‘fish and chips’ at a pub. The bartender just stared at me and said, 'We don’t do accents here, mate.'",
    },
  ]);
  const [filterEmotion, setFilterEmotion] = useState(""); // Filter condition
  const [isGameOpen, setIsGameOpen] = useState(false); // 控制游戏窗口是否显示

  // Filter markers based on the selected emotion
  const filteredMarkers = markers.filter(
    (marker) => !filterEmotion || marker.emotion === filterEmotion
  );

  return (
    <div>
      {/* Top header */}
      <header className="header">
        <h1 className="header-title">Emotion Map</h1>
        <div className="nav-options">
          <button
            data-emotion="happy"
            data-active={filterEmotion === "happy"}
            onClick={() => setFilterEmotion("happy")}
          >
            😊 Happy
          </button>
          <button
            data-emotion="sad"
            data-active={filterEmotion === "sad"}
            onClick={() => setFilterEmotion("sad")}
          >
            😢 Sad
          </button>
          <button
            data-emotion="neutral"
            data-active={filterEmotion === "neutral"}
            onClick={() => setFilterEmotion("neutral")}
          >
            😐 Neutral
          </button>
          <button
            data-emotion="all"
            data-active={filterEmotion === ""}
            onClick={() => setFilterEmotion("")}
          >
            🌍 Show All
          </button>
          <button
          className="toggle-game-button"
          onClick={() => setIsGameOpen(!isGameOpen)}
        >
          🎮 {isGameOpen ? "Close Game" : "Start Game"}
        </button>
        </div>
      </header>

      {/* Game Component */}
      {isGameOpen && <GameComponent />}

      {/* Map container */}
      <div className="map-container">
        <MapComponent markers={filteredMarkers} setMarkers={setMarkers} />
      </div>
    </div>
  );
}

export default App;
