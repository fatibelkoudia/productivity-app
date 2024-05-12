import './deleteNote.css';

export default function DeleteNote({ onDelete }) {
    return (
        <button onClick={onDelete} type="delete-button">
            x
        </button>
    );
}
