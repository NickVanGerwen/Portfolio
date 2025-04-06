/**
 * CustomGameComponent - A reusable component for displaying games with custom styling
 * 
 * This component is used for games that require custom styling rather than
 * being embedded from itch.io. It's primarily used for the Serious Games section
 * where each game has its own unique visual style defined by CSS classes.
 * 
 * Props:
 * - game: An object containing game information with the following properties:
 *   - id: Unique identifier for the game
 *   - title: Display title of the game
 *   - className: CSS class name for custom styling (defined in GameContainer.css)
 *   - link: URL to the game's page
 *   - description: Text description of the game
 *   - children: Optional additional content to display inside the game container
 */
import React from 'react';
import '../styling/GameContainer.css';

const CustomGameComponent = ({ game }) => {
  return (
    <div className="GameContainer">
      <a href={game.link} target="_blank" rel="noopener noreferrer">
        <div 
          className={game.className} 
          style={{ 
            borderRadius: '5px', 
            paddingTop: '15px', 
            fontSize: '28px', 
            backgroundColor: 'black', 
            width: '560px', 
            height: '175px', 
            color: 'black', 
            border: '5px solid white',
            textAlign: 'center',
            fontWeight: 500
          }}
        >
          {game.title}
          {game.children && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>{game.children}</div>}
        </div>
      </a>
      <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }}>{game.description}</p>
    </div>
  );
};

export default CustomGameComponent;
