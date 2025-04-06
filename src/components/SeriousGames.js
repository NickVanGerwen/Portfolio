/**
 * SeriousGames - A specialized component for the Serious Games section
 * 
 * This component handles the specific layout and styling for the Serious Games section.
 * Unlike other game sections that use the generic Section component, this section
 * has a unique layout and uses CustomGameComponent for each game.
 * 
 * The component is now responsive and will adapt to different screen sizes.
 * 
 * Props:
 * - games: An array of game objects for the serious games section
 */
import React from 'react';
import CustomGameComponent from './CustomGameComponent';
import '../styling/Responsive.css';

const SeriousGames = ({ games }) => {
  return (
    <>
      <div id="section2" className="section-header" style={{ 
        width: '100%', 
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 1) 100%)'
      }}>
        <div style={{ padding: '0 15px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <p className="h2-style" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}>
              Serious Games
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <p className="p-style" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}>
              These are some games I worked on with the goal of research and dissemination
            </p>
          </div>
        </div>
      </div>

      <div className="game-container-wrapper">
        <div className="game-item">
          <CustomGameComponent game={games[0]} />
        </div>
        <div className="game-item">
          <CustomGameComponent game={games[1]} />
        </div>
      </div>
    </>
  );
};

export default SeriousGames;
