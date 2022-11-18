import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthorStore from './store/AuthorStore';
import GameStore from './store/GameStore';
import GenreStore from './store/GenreStore';
import UserStore from './store/UserStore';
import './styles/style.scss'



export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ user: new UserStore(), games: new GameStore(), author: new AuthorStore(), genre: new GenreStore() }}>
    <App />
  </Context.Provider>
);

