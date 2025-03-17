# Emotion Map

An interactive web application that visualizes emotions and personal stories from around the world. Users can filter emotions, add their own stories, and even play a mini-game.

![image](https://github.com/user-attachments/assets/f035d2e2-d3c3-4b7c-b2a4-9b51d3a2b341)


## Features

- **Interactive World Map**: Displays emotional stories from various global locations
- **Emotion Filtering**: Filter stories by emotion (Happy, Sad, Neutral, or Show All)
- **Personal Stories**: Each marker contains a personal anecdote tied to the location
- **Mini-Game**: Toggle a fun game component for additional entertainment
- **Add Your Story**: Users can add their own emotional experiences to the map

## Technology Stack

- React.js
- React Hooks (useState) for state management
- Map integration (appears to be using Leaflet based on the screenshot)
- Custom CSS for styling

## Components

- **App.js**: Main application component that manages state and layout
- **MapComponent**: Handles map rendering and marker management
- **GameComponent**: Contains the mini-game functionality

## How to Use

1. **View Stories**: Click on emoji markers to read personal stories from that location
2. **Filter by Emotion**: Use the emotion buttons (Happy, Sad, Neutral) to filter stories
3. **Play Mini-Game**: Click "Start Game" to open the game component
4. **Add Your Story**: (If implemented) Click on the map to add your own emotional story

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/emotion-map.git

# Navigate to the project directory
cd emotion-map

# Install dependencies
npm install

# Start the development server
npm start
```

## Project Structure

```
emotion-map/
├── public/
├── src/
│   ├── components/
│   │   ├── MapComponent.js
│   │   └── GameComponent.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Future Enhancements

- User authentication for personalized story management
- Timeline view to see stories chronologically
- Social sharing capabilities
- Mobile-responsive design improvements
- Enhanced game features

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

