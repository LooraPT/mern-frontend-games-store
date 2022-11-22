import React from 'react';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import './About.scss';
import witcher from '../../assets/about/witcher.jpeg';
import assassins from '../../assets/about/assassins.jpeg';
import AboutContent from '../../components/AboutContent/AboutContent';
import MainButton from '../../components/controls/Button/MainButton';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/pages';

function About() {
    const navigate = useNavigate()

    return (
        <section className="about">
            <div className="about__container">
                <AboutPageDescription nameNow={"About games"} namePre={"Main"} />
                <AboutContent
                    image={witcher}
                    title={"The Witcher 3"}
                    info1={"In 1996 and 1997, a Witcher video game was being developed by Metropolis Software in Poland, but it was canceled. The game's director was Adrian Chmielarz, former People Can Fly co-owner and creative director, who coined the translation 'The Witcher' during its development. According to Chmielarz, the game would have been a 3D action-adventure game with role-playing elements such as moral choices and experience points"}
                    info2={"In 2003, Polish video-game developer CD Projekt Red negotiated with Sapkowski for rights to The Witcher, given the languishing work at Metropolis,[5] and released The Witcher, a role-playing game based on the saga in October 2007 for personal computers."}
                />

                <AboutContent
                    style={{ flexDirection: 'row-reverse' }}
                    image={assassins}
                    title={"Assassins Creed"}
                    info1={"Assassin's Creed is an open-world action-adventure stealth video game franchise published by Ubisoft and developed mainly by its studio Ubisoft Montreal using the game engine Anvil and its more advanced derivatives."}
                    info2={"The series' eponymous first title was released in 2007, and it has featured twelve main games in total, the most recent being 2020's Valhalla. Main games in the Assassin's Creed series are set in an open world and played from the third-person perspective."}
                />
                <MainButton onClick={() => navigate(SHOP_ROUTE)} style={{ display: 'flex', margin: '0 auto' }}>Shop</MainButton>

            </div>
        </section>
    );
}

export default About;