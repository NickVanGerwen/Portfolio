/**
 * Home - The main page component for the portfolio
 * 
 * This component has been refactored to use reusable components and a JSON data structure
 * for game information. It renders different sections of the portfolio:
 * - About Me
 * - Serious Games (using the SeriousGames component)
 * - Personal Projects (using ItchGameComponent for each game)
 * - Game Jam Games (using ItchGameComponent for each game)
 * - Contact Me
 * 
 * The refactoring improves maintainability by:
 * - Separating data from presentation
 * - Using reusable components
 * - Maintaining consistent styling
 * - Preserving unique visual identity for each game
 */
import React, { useEffect } from 'react';
// styling
import '../styling/GameContainer.css';
import '../styling/HeaderContainer.css';
import '../styling/ScrollBar.css';
import '../styling/FlashAnimation.css';
import '../styling/Headshot.css';
// assets
import headshot from '../images/headshot.jpg';
// components
import Navbar from '../components/Navbar';
import ItchGameComponent from '../components/ItchGameComponent';
import SeriousGames from '../components/SeriousGames';
import Section from '../components/Section';
import useScrollEffect from '../hooks/useScrollEffect';
// data
import gamesData from '../data/games.json';

function Home() {
    useScrollEffect();
    useEffect(() => {
        // Set initial navbar color
        const navColor = 'rgba(112, 144, 145, 0.3)';
        document.documentElement.style.setProperty('--nav-item-color', navColor);

        // Disable horizontal scrolling
        document.documentElement.style.overflowX = 'hidden';
    }, []);

    return (
        <body>
            <Navbar />

            <div className='Background'>
                {/* Navbar padding */}
                <div style={{ paddingTop: '40px' }}></div>
                
                {/* About Me */}
                <Section id="section1" title="About Me" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <img className='headshot' src={headshot} alt="Headshot" />
                    </div>
                    <div>
                        <p style={{ fontWeight: 700, paddingTop: '30px', textAlign: 'left', width: '600px', color: '#000000' }}>
                            Hi! I'm Nick, a game programmer and designer from the Netherlands and a student at Fontys Hogeschool Eindhoven where I study Game Design & Technology. I love expressing my creativity, sometimes by making music, sometimes through digital art, but mostly by making games.
                            <br /><br />My journey in the realm of game development is fueled by a genuine love for creating fun and captivating experiences. From coding intricate game mechanics, to creating the look, sound and feel of a game from scratch, I thrive on the challenges that come with bringing enjoyment to people from the comfort of their gaming chairs.
                            <br /><br />Below are some of the projects I've worked on, feel free to check them out!
                        </p>
                    </div>
                </div>

                {/* Serious Games */}
                <SeriousGames games={gamesData.seriousGames} />

                {/* Personal Projects */}
                <Section 
                  id="section3" 
                  title="Personal Projects" 
                  subtitle="My free-time explorations of technologies and game development" 
                />

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                    <div style={{ marginRight: '30px' }}>
                        <ItchGameComponent game={gamesData.personalProjects[0]} />
                    </div>
                    <div>
                        <ItchGameComponent game={gamesData.personalProjects[1]} />
                    </div>
                </div>

                {/* Game Jam Games */}
                <Section 
                  id="section4" 
                  title="Game Jam Games" 
                  subtitle="Check out my latest game jam creations!" 
                />

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                    <div style={{ marginRight: '30px' }}>
                        <ItchGameComponent game={gamesData.gameJams[0]} />
                    </div>
                    <div>
                        <ItchGameComponent game={gamesData.gameJams[1]} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginRight: '30px' }}>
                        <ItchGameComponent game={gamesData.gameJams[2]} />
                    </div>
                    <div>
                        <ItchGameComponent game={gamesData.gameJams[3]} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <ItchGameComponent game={gamesData.gameJams[4]} />
                    </div>
                </div>

                {/* Contact me */}
                <Section 
                  id="section5" 
                  title="Contact me" 
                  subtitle="Feel free to send me a message at: nick.gerwen123@gmail.com, I'll try to respond as quick as I can!" 
                />
            </div>
        </body>
    );
}

export default Home;
