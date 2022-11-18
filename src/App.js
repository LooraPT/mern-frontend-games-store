import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="main">
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;