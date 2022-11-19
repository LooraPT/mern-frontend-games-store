import React, { useContext, useEffect, useState } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Context } from '.';
import { $api, $authApi } from './api';
import { observer } from 'mobx-react-lite';

function App() {
    const { user } = useContext(Context)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const check = async () => {
            try {
                const response = await $api.get(`/user/refresh`, { withCredential: true })
                localStorage.setItem('token', response.data.accessToken)
                user.setUser(response.data.user)
                user.setIsAuth(true)
            } catch (e) {
                console.log(e.response.data.message)
            } finally {
                setIsLoading(false)
            }
        }
        check()

    }, [])

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

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

export default observer(App);