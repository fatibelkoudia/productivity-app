export default function DeleteNote({ onDelete }) {
    return (
        <button onClick={onDelete} type="button">
            Delete
        </button>
    );
}
