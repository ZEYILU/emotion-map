import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon based on emotion
const createCustomIcon = (emotion) => {
  const iconUrlMap = {
    happy: "https://img.icons8.com/color/48/000000/happy.png",
    sad: "https://img.icons8.com/color/48/000000/sad.png",
    neutral: "https://img.icons8.com/?size=100&id=l5HER4tCxDsO&format=png&color=000000",
    default: "https://img.icons8.com/color/48/000000/marker.png",
  };

  return L.icon({
    iconUrl: iconUrlMap[emotion] || iconUrlMap["default"],
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
};

const MapComponent = ({ markers, setMarkers }) => {
  const [tempMarker, setTempMarker] = useState(null);
  const [tempStory, setTempStory] = useState("");
  const [tempEmotion, setTempEmotion] = useState("");

  const AddMarker = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setTempMarker({ lat, lng });
        setTempStory("");
        setTempEmotion("");
      },
    });
    return null;
  };

  const handleSubmitMarker = () => {
    if (tempEmotion && tempStory) {
      const newMarker = {
        ...tempMarker,
        time: new Date().toISOString(),
        emotion: tempEmotion,
        story: tempStory,
      };
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      setTempMarker(null);
    } else {
      alert("Please select an emotion and write a story!");
    }
  };

  return (
    <MapContainer center={[20, 0]} zoom={2.5} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <AddMarker />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
          icon={createCustomIcon(marker.emotion)}
        >
          <Popup>
            <div>
              <h4>
                {marker.emotion === "happy"
                  ? "😊 Happy"
                  : marker.emotion === "sad"
                  ? "😢 Sad"
                  : "😐 Neutral"}
              </h4>
              <p>
                <strong>Story:</strong> {marker.story}
              </p>
              <p>
                <strong>Time:</strong> {new Date(marker.time).toLocaleString()}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
      {tempMarker && (
        <Marker position={[tempMarker.lat, tempMarker.lng]} icon={createCustomIcon("default")}>
          <Popup>
            <div style={{ textAlign: "center" }}>
              <h4>Select an Emotion</h4>
              <div style={{ marginBottom: "10px" }}>
                <button
                  onClick={() => setTempEmotion("happy")}
                  style={{
                    margin: "5px",
                    background: tempEmotion === "happy" ? "#ffc107" : "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  😊 Happy
                </button>
                <button
                  onClick={() => setTempEmotion("sad")}
                  style={{
                    margin: "5px",
                    background: tempEmotion === "sad" ? "#f44336" : "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  😢 Sad
                </button>
                <button
                  onClick={() => setTempEmotion("neutral")}
                  style={{
                    margin: "5px",
                    background: tempEmotion === "neutral" ? "#9e9e9e" : "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  😐 Neutral
                </button>
              </div>
              <textarea
                placeholder="Write your story here..."
                value={tempStory}
                onChange={(e) => setTempStory(e.target.value)}
                style={{
                  width: "100%",
                  height: "80px",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={handleSubmitMarker}
                style={{
                  background: "#2196f3",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  width: "100%",
                }}
              >
                Submit Marker
              </button>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
