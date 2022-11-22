import React from 'react';
import './AboutContent.scss';

function AboutContent({ image, title, info1, info2, ...props }) {
    return (
        <div {...props} className="about__blog blog">
            <div className="blog__image">
                <img width={442} height={547} src={image} className="blog__image-img" />
            </div>
            <div className="blog__content">
                <h4 className="blog__content-title">{title}</h4>
                <p className="blog__content-info">{info1}</p>
                <p className="blog__content-info">{info2}</p>
            </div>
        </div>
    );
}

export default AboutContent;