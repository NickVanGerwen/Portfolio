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
import useScrollEffect from '../hooks/useScrollEffect';

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
                {/* About Me */}
                <div id="section1" style={{}}>
                    <p className="HeaderContainer" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px', paddingTop: '50px' }}>About Me</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <img className='headshot' src={headshot} alt="Headshot" />
                    </div>
                    <div>
                        <p style={{ fontWeight: 700, paddingTop: '30px', textAlign: 'left', width: '600px', color: '#000000' }}>Hi! I'm Nick, a game programmer and designer from the Netherlands and a student at Fontys Hogeschool Eindhoven where I study Game Design & Technology. I love expressing my creativity, sometimes by making music, sometimes through digital art, but mostly by making games.
                            <br /><br />My journey in the realm of game development is fueled by a genuine love for creating fun and captivating experiences. From coding intricate game mechanics, to creating the look, sound and feel of a game from scratch, I thrive on the challenges that come with bringing enjoyment to people from the comfort of their gaming chairs.
                            <br /><br />Below are some of the projects I've worked on, feel free to check them out!
                        </p>
                    </div>
                </div>

                {/* Serious Games */}
                <div id="section2" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Serious Games</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >These are some games I worked on with the goal of research and dissemination</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                    {/* VR eyetracking */}
                    <div className="GameContainer" style={{ marginRight: '30px' }}>
                        <a href="https://www.youtube.com/watch?v=hnQDXada8EA&ab_channel=nickvangerwen" target="_blank" rel="noopener noreferrer">
                            <div className='EyeTracking' style={{ borderRadius: '5px', paddingTop: '15px', fontSize: '28px', backgroundColor: 'black', width: '560px', height: '175px', color: 'black', border: '5px solid white' }}>
                                Virtual reality eye-tracking escape room
                            </div></a>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >This escape room was made in collaboration with the lectorate at Fontys to research the possibilities of eye-tracking in virtual reality games. Eye-tracking was used to gather data while players attempt to solve puzzles, this data was then used to predict their ability to solve the puzzles.</p>
                    </div>

                    {/* Water You Doing */}
                    <div className="GameContainer">
                        <a href="https://youtu.be/aNN6NGJJU9I" target="_blank" rel="noopener noreferrer">
                            <div className='WaterYouDoing' style={{ borderRadius: '5px', paddingTop: '15px', fontSize: '28px', backgroundColor: 'black', width: '560px', height: '175px', color: 'black', border: '5px solid white' }}>
                                Water You Doing?
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                                </div>
                            </div>
                        </a>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >'Water You Doing?' was made for the 'Night of the Nerds', an event by Futurebites showcasing creativity, innovation and technology. It was made with the goal of informing the youth about water usage. This was done using minigames centered around showers, bathrooms, sinks, etc. where the more water you save, the better you perform.</p>
                    </div>
                </div>

                {/* personal projects */}
                <div id="section3" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Personal Projects </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >My free-time explorations of technologies and game development</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                    {/* Oh Boids! */}
                    <div className="GameContainer" style={{ marginRight: '30px' }}>
                        <iframe title="boids" style={{ borderRadius: '5px', }} frameBorder="0" src="https://itch.io/embed/2244129?border_width=5&amp;bg_color=adb9b1&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=ffffff" width="560" height="175"><a href="https://nickvg.itch.io/oh-boids">Oh Boids! by Nickvg</a></iframe>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >Oh Boids! is a customizable boids simulation. Boids is an example of emergent behaviour which can imitate a flock of birds and in this case a school of fish. </p>
                    </div>

                    {/* Show Your Metal */}
                    <div className="GameContainer">
                        <iframe title="metal" style={{ borderRadius: '5px', }} frameBorder="0" src="https://itch.io/embed/1443875?border_width=5&amp;bg_color=d1e0db&amp;fg_color=222222&amp;link_color=e38b00&amp;border_color=ffffff" width="560" height="175"><a href="https://lokitheshady.itch.io/show-your-metal">Show Your Metal by LokiTheShady, Nickvg</a></iframe>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >This puzzle game was made together with Bart Hagoort. It features a little metal man, making his way through a portal-esque testing facility.</p>
                    </div>
                </div>

                {/* Game Jam Games */}
                <div id="section4" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Game Jam Games</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >Check out my latest game jam creations!</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                    {/* Jans Jam */}
                    <div className="GameContainer" style={{ marginRight: '30px' }}>
                        <iframe title="jam" style={{ borderRadius: '5px', }} frameBorder="0" src="https://itch.io/embed/2004414?border_width=5&amp;bg_color=C42F2F&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=ffffff" width="560" height="175"><a href="https://nickvg.itch.io/jans-jam">Jans Jam by Nickvg</a></iframe>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >'Jans Jam' is a short but sweet game about catching as much jam as possible. It is one of my personal favorites because everything, including visuals, sounds and music was made from scratch by me. </p>
                    </div>

                    {/* Falling Monkey */}
                    <div className="GameContainer">
                        <iframe title="monkey" style={{ borderRadius: '5px', }} frameBorder="0" src="https://itch.io/embed/1676599?border_width=5&amp;bg_color=ffecd6&amp;fg_color=0d2b45&amp;link_color=ffaa5e&amp;border_color=ffffff" width="560" height="175"><a href="https://nickvg.itch.io/falling-monkey">Falling Monkey by Nickvg</a></iframe>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >A monkey who is done with life, but life is not done with him. 'Falling Monkey' provides a melancholic experience I've yet to recapture. This project increased my respect for sound design with every *boing*.</p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* Blow that Bean off the Table */}
                    <div className="GameContainer" style={{ marginRight: '30px' }}>
                        <iframe title="bean" style={{ borderRadius: '5px', }} frameBorder="0" src="https://itch.io/embed/2132730?border_width=5&amp;bg_color=1b1c16&amp;fg_color=2cff2a&amp;link_color=327345&amp;border_color=ffffff" width="560" height="175"><a href="https://nickvg.itch.io/blow-that-bean-off-the-table">Blow That Bean Off The Table! by Nickvg</a></iframe>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }}>Inspired by 'The Stanley Parable' and found footage videos like 'The Backrooms', this game served as an exploration of horror through sound and visuals using an unassuming vegetable. Stick around long enough to see the true ending ;). </p>
                    </div>

                    {/* Extreme Egg Hunt */}
                    <div className="GameContainer">
                        <iframe title="egg" style={{ borderRadius: '5px', }} frameBorder="0" src="https://itch.io/embed/1492011?border_width=5&amp;bg_color=222222&amp;fg_color=eeeeee&amp;border_color=ffffff" width="560" height="175"><a href="https://nickvg.itch.io/extreme-egg-hunt">EXTREME EGG HUNT by Nickvg</a></iframe>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >This is the first game I ever submitted to a game jam. Everything was made by in the span of 5 hours and thus, is a good reflection of what my work looks like under high pressure.</p>
                    </div>
                </div>

                {/* BossCade */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="GameContainer" >
                        <iframe title="boss" style={{ borderRadius: '5px', }} frameBorder="0" src="https://itch.io/embed/2514038?border_width=5&amp;bg_color=111111&amp;fg_color=8fd1ff&amp;link_color=7d2953&amp;border_color=ffffff" width="560" height="175"><a href="https://nickvg.itch.io/bosscade">BossCade by Nickvg, Inzengo</a></iframe>
                        <p style={{ marginTop: '1rem', width: '560px', textAlign: 'left' }} >A fast paced action game where you fight an unnamed yellow arcade boss. It focusses on retro visuals and procedural gameplay that evolves over time.</p>
                    </div>
                </div>

                {/* Contact me */}
                <div id="section5" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Contact me</p>
                </div>
                <div id="section5b" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p className="HeaderContainer" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >Feel free to send me a message at: nick.gerwen123@gmail.com, I'll try to respond as quick as I can! </p>
                </div>

            </div>
        </body>
    );
}

export default Home;
