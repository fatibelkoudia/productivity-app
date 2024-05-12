import { useState } from 'react';
import './addNote.css';
import { addService } from '../../services/noteService';
export default function AddNote({ notes, setNotes }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    function handleClick() {
        addService(title, content, setNotes);
        setContent('');
        setTitle('');
    }

    return (
        <>
            <div className="add-note">
                <div>
                    <input
                        className="input title-input"
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        value={title}
                        type="text"
                        placeholder="Title"
                    ></input>
                    <textarea
                        className="input"
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                        value={content}
                        type="text"
                        placeholder="note content"
                        rows="4"
                        cols="50"
                    ></textarea>
                </div>
                <button className="add-button" onClick={handleClick} type="button">
                    +
                </button>
            </div>
        </>
    );
}
