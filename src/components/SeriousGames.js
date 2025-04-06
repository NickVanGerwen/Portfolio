/**
 * SeriousGames - A specialized component for the Serious Games section
 * 
 * This component handles the specific layout and styling for the Serious Games section.
 * Unlike other game sections that use the generic Section component, this section
 * has a unique layout and uses CustomGameComponent for each game.
 * 
 * Props:
 * - games: An array of game objects for the serious games section
 */
import React from 'react';
import CustomGameComponent from './CustomGameComponent';

const SeriousGames = ({ games }) => {
  return (
    <>
      <div id="section2" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <p className="HeaderContainer" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}>
          Serious Games
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <p className="HeaderContainer" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}>
          These are some games I worked on with the goal of research and dissemination
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
        <div style={{ marginRight: '30px' }}>
          <CustomGameComponent game={games[0]} />
        </div>
        <div>
          <CustomGameComponent game={games[1]} />
        </div>
      </div>
    </>
  );
};

export default SeriousGames;
