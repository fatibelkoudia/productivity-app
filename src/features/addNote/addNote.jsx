import { useState } from 'react';
import './addNote.css';
export default function AddNote({ notes, setNotes }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    function handleClick() {
        const note = { name: title, description: content };
        notes.push(note);
        localStorage.setItem('myNotes', JSON.stringify(notes));
        setNotes(JSON.parse(localStorage.getItem('myNotes')));
        setContent('');
        setTitle('');
    }

    return (
        <>
            <div className="add-note">
                <input
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    value={title}
                    type="text"
                    placeholder="Title"
                ></input>
                <textarea
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                    value={content}
                    type="text"
                    placeholder="note content"
                    rows="4"
                    cols="50"
                ></textarea>

                <button onClick={handleClick} type="button">
                    Click Me!
                </button>
            </div>
        </>
    );
}
