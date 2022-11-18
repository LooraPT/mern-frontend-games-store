import React from 'react';
import MainButton from '../../components/controls/Button/MainButton';
import MainContent from '../../components/MainPageContent/MainContent/MainContent';
import ShopContent from '../../components/MainPageContent/ShopContent/ShopContent';

function MainPage() {
    return (
        <>
            <MainContent />
            <ShopContent />
        </>
    );
}

export default MainPage;