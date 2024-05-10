import Note from '../note/note.jsx';
import './noteList.css';

export function NoteList({ notes, setNotes }) {
    return notes && notes.length ? (
        <div className="note-list">
            {notes.map((myNote, index) => {
                return <Note key={index} note={myNote} setNotes={setNotes} />;
            })}
        </div>
    ) : (
        <p>is null</p>
    );
}
