import React from 'react';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import './Error.scss';
import errorIcon from '../../assets/error/error.png';

function ErrorPage() {
    return (
        <section className="error">
            <div className="error__container">
                <AboutPageDescription nameNow={'Error'} namePre={'Main'} />
                <div className="error__info">
                    <img src={errorIcon} />
                    <p className="error__info">Error, page is not found or not access</p>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage;