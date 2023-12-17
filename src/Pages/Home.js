import React from 'react';
import metalPlateImage from '../Images/about/headshot.jpg';
import { Link } from 'react-scroll';

function Home() {
    return (
        <>
            <head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link></head>

            <nav id="aboutme" class="navbar navbar-expand-lg navbar-black bg-black fixed-top" style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%', opacity: '90%', backgroundColor: 'black' }}>
                <Link to="section1" smooth={true} duration={500} style={{ color: 'white', fontSize: '20px', paddingRight: '20px' }}>Nick van Gerwen</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" style={{ color: 'white' }}>
                        <li class="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '3px' }}>
                            <Link to="section1" smooth={true} duration={500}>About me</Link>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '3px' }}>
                            <Link to="section2" offset={-50} smooth={true} duration={500}>Serious games</Link>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '3px' }}>
                            <Link to="section3" offset={-50} smooth={true} duration={500}>Personal projects</Link>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '3px' }}>
                            <Link to="section4" offset={-50} smooth={true} duration={500}>Game jam games</Link>
                        </li>
                        <li class="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '3px' }}>
                            <Link to="section5" offset={-50} smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <div id="section1" style={{ paddingTop: '0', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <p style={{ textAlign: 'center', fontSize: '48px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingBottom: '20px', paddingTop: '50px' }}>About Me</p>
            </div>
            <div style={{ margin: '0', backgroundColor: '#3d3d3d', textAlign: 'center', color: 'white', height: '100%', width: '100vw' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <img style={{ margin: '30px', width: '210px', border: '5px solid #211c1c' }} src={metalPlateImage} alt="Headshot" />
                    </div>
                    <div>
                        <p style={{ paddingTop: '30px', textAlign: 'left', width: '600px' }}>Hi! I'm Nick, a game programmer and designer from the Netherlands and a student at Fontys Hogeschool Eindhoven where I study Game Design & Technology. I love expressing my creativity, sometimes by making music, sometimes through digital art, but mostly by making games.
                            <p />My journey in the realm of game development is fueled by a genuine love for creating fun and captivating experiences. From coding intricate game mechanics, to creating the look, sound and feel of a game from scratch, I thrive on the challenges that come with bringing enjoyment to people from the comfort of their gaming chairs.
                            <p />Below are some of the projects I've worked on, feel free to check them out!
                        </p>
                    </div>
                </div>

                <div id="section2" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '48px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Serious Games</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '18px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >These are some games I worked on with the goal of research and dissemination</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <div style={{ marginRight: '10px' }}>
                        <div style={{ paddingTop: '15px', fontSize: '28px', backgroundColor: 'black', width: '560px', height: '175px', color: 'white', border: '5px solid white' }}>
                            Virtual reality eye-tracking escape room
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                                <a href="https://www.youtube.com/watch?v=hnQDXada8EA&ab_channel=nickvangerwen">video</a>
                            </div>
                        </div>
                        <p style={{ width: '560px', textAlign: 'left' }} >This escape room was made in collaboration with the lectorate at Fontys to research the possibilities of eye-tracking in virtual reality games. Eye-tracking was used to gather data while players attempt to solve puzzles, this data was then used to predict their ability to solve the puzzles.</p>
                    </div>
                    <div style={{ marginRight: '20px' }}></div>
                    <div>
                        <div style={{ paddingTop: '15px', fontSize: '28px', backgroundColor: 'black', width: '560px', height: '175px', color: 'white', border: '5px solid white' }}>
                            Water You Doing?
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                            <a href="https://youtu.be/aNN6NGJJU9I">video</a>
                        </div>
                        </div>
                        <p style={{ width: '560px', textAlign: 'left' }} >'Water You Doing?' was made for the 'Night of the Nerds', an event by Futurebites showcasing creativity, innovation and technology. It was made with the goal of informing the youth about water usage. This was done using minigames centered around showers, bathrooms, sinks, etc. where the more water you save, the better you perform.</p>
                    </div>
                </div>

                <div id="section3" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '48px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Personal Projects </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '18px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >My free-time explorations of technologies and game development</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <div style={{ marginRight: '10px' }}>
                        <iframe frameborder="0" src="https://itch.io/embed/2244129?border_width=5&amp;bg_color=adb9b1&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=669574" width="560" height="175"><a href="https://nickvg.itch.io/oh-boids">Oh Boids! by Nickvg</a></iframe>
                        <p style={{ width: '560px', textAlign: 'left' }} >Oh Boids! is a customizable boids simulation. Boids is an example of emergent behaviour which can imitate a flock of birds and in this case a school of fish. </p>
                    </div>
                    <div style={{ marginRight: '20px' }}></div>
                    <div>
                        <iframe frameborder="0" src="https://itch.io/embed/1443875?border_width=5&amp;bg_color=d1e0db&amp;fg_color=222222&amp;link_color=e38b00&amp;border_color=6f9d69" width="560" height="175"><a href="https://lokitheshady.itch.io/show-your-metal">Show Your Metal by LokiTheShady, Nickvg</a></iframe>
                        <p style={{ width: '560px', textAlign: 'left' }} >This puzzle game was made together with Bart Hagoort. It features a little metal man, making his way through a portal-esque testing facility.</p>

                    </div>
                </div>

                <div id="section4" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '48px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Game Jam Games</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '18px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >Check out my latest game jam creations!</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <div style={{ marginRight: '10px' }}>
                        <iframe frameborder="0" src="https://itch.io/embed/2004414?border_width=5&amp;bg_color=C42F2F&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=e54a4a" width="560" height="175"><a href="https://nickvg.itch.io/jans-jam">Jans Jam by Nickvg</a></iframe>
                        <p style={{ width: '560px', textAlign: 'left' }} >'Jans Jam' is a short but sweet game about catching as much jam as possible. It is one of my personal favorites because everything, including visuals, sounds and music was made from scratch by me. </p>
                    </div>
                    <div style={{ marginRight: '20px' }}></div>
                    <div>
                        <iframe frameborder="0" src="https://itch.io/embed/1676599?border_width=5&amp;bg_color=ffecd6&amp;fg_color=0d2b45&amp;link_color=ffaa5e&amp;border_color=76708a" width="560" height="175"><a href="https://nickvg.itch.io/falling-monkey">Falling Monkey by Nickvg</a></iframe>
                        <p style={{ width: '560px', textAlign: 'left' }} >A monkey who is done with life, but life is not done with him. 'Falling Monkey' provides a melancholic experience I've yet to recapture. This project increased my respect for sound design with every *boing*.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                    <div style={{ marginRight: '10px' }}>
                        <iframe frameborder="0" src="https://itch.io/embed/2132730?border_width=5&amp;bg_color=1b1c16&amp;fg_color=2cff2a&amp;link_color=327345&amp;border_color=484943" width="560" height="175"><a href="https://nickvg.itch.io/blow-that-bean-off-the-table">Blow That Bean Off The Table! by Nickvg</a></iframe>
                        <p style={{ width: '560px', textAlign: 'left' }}>Inspired by'The Stanley Parable' and found footage videos like the backrooms, this game served as an exploration of horror through sound and visuals using an unassuming vegetable. Stick around long enough to see the true ending ;). </p>
                    </div>
                    <div style={{ marginRight: '20px' }}></div>
                    <div>
                        <iframe frameborder="0" src="https://itch.io/embed/1492011?border_width=5&amp;bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636" width="560" height="175"><a href="https://nickvg.itch.io/extreme-egg-hunt">EXTREME EGG HUNT by Nickvg</a></iframe>
                        <p style={{ width: '560px', textAlign: 'left' }} >This is the first game I ever submitted to a game jam. Everything was made by in the span of 5 hours and thus, is a good reflection of what my work looks like under high pressure.</p>
                    </div>
                </div>

                <div id="section5" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '48px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}
                    >Contact me</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <p style={{ textAlign: 'center', fontSize: '18px', backgroundColor: '#211c1c', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}
                    >Feel free to send me a message at: nick.gerwen123@gmail.com, I'll try to respond as quick as I can! </p>
                </div>

            </div>
        </>
    );
}

export default Home;
