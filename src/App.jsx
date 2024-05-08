import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/App.css';
import './components/header/Header.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <Header />
            <main></main>
            <Footer />
        </>
    );
}
export default App;
