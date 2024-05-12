import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/App.css';
import './components/header/Header.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { NoteList } from './features/noteList/noteList';
import AddNote from './features/addNote/addNote';
import { listNotes } from './services/noteService';

function App() {
    const list = listNotes();
    const [notes, setNotes] = useState(list);

    return (
        <>
            <Header />
            <main>
                <AddNote notes={notes} setNotes={setNotes} />
                <NoteList notes={notes} setNotes={setNotes} />
            </main>
            <Footer />
        </>
    );
}
export default App;
