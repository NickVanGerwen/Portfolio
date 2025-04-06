/**
 * ItchGameComponent - A reusable component for displaying games from itch.io
 * 
 * This component renders an iframe with an itch.io game embed, preserving
 * the custom color scheme for each game. It extracts the game ID from the
 * original embed URL and constructs a new URL with the game's custom colors.
 * 
 * Props:
 * - game: An object containing game information with the following properties:
 *   - id: Unique identifier for the game
 *   - embedSrc: Original embed URL from itch.io
 *   - link: URL to the game's page
 *   - description: Text description of the game
 *   - bgColor: Background color for the itch.io embed
 *   - fgColor: Foreground/text color for the itch.io embed
 *   - linkColor: Link color for the itch.io embed
 */
import React from 'react';
import '../styling/GameContainer.css';

const ItchGameComponent = ({ game }) => {
  // Extract the game ID from the embedSrc using regex
  const gameIdMatch = game.embedSrc.match(/\/embed\/(\d+)\?/);
  const gameId = gameIdMatch ? gameIdMatch[1] : '';
  
  // Construct the embed URL with the game's custom colors
  // This preserves the unique visual identity of each game
  const embedUrl = `https://itch.io/embed/${gameId}?border_width=5&bg_color=${game.bgColor}&fg_color=${game.fgColor}&link_color=${game.linkColor}&border_color=ffffff`;
  
  return (
    <div className="GameContainer">
      <iframe 
        title={game.id}
        style={{ borderRadius: '5px' }}
        frameBorder="0"
        src={embedUrl}
        width="560"
        height="175"
      >
        <a href={game.link}>{game.title}</a>
      </iframe>
      <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }}>{game.description}</p>
    </div>
  );
};

export default ItchGameComponent;
