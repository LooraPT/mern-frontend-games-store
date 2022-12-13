import React from 'react';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import './About.scss';
import AboutContent from '../../components/AboutContent/AboutContent';
import MainButton from '../../components/controls/Button/MainButton';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/pages';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { AboutService } from '../../services/about-service';
import { useContext } from 'react';
import { Context } from '../..';

function About() {
    const navigate = useNavigate()
    const { about } = useContext(Context);

    useEffect(() => {
        fetchAboutPosts()
    }, [])

    const fetchAboutPosts = async () => {
        const { data } = await AboutService.getAllAboutPost()
        about.setAboutPosts(data)
    }

    return (
        <section className="about">
            <div className="about__container">
                <AboutPageDescription nameNow={"About games"} namePre={"Main"} />
                {about.aboutPosts && about.aboutPosts.map((post, index) =>
                    <AboutContent
                        key={post._id}
                        image={`${process.env.REACT_APP_SERVER_URL_2}/${post.img}`}
                        title={post.title}
                        info1={post.text1}
                        info2={post.text2}
                        index={index}
                    />
                )}
                <div className="about__button">
                    <MainButton onClick={() => navigate(SHOP_ROUTE)}>Shop</MainButton>
                </div>
            </div>
        </section>
    );
}

export default observer(About);