import { useState } from 'react';
import React from 'react';
import './note.css';
import DeleteNote from '../deleteNote/deleteNote';

export default function Note({ note, setNotes }) {
    function handleDelete() {
        const notesFromStorage = localStorage.getItem('myNotes');
        const notes = JSON.parse(notesFromStorage);

        const updatedNotes = notes.filter((item) => {
            return item.name !== note.name && item.description !== note.description;
        });
        localStorage.setItem('myNotes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
    }

    return (
        <div className="note">
            <h3 className="item">{note.name}</h3>
            <p>{note.description}</p>
            <DeleteNote onDelete={handleDelete} />
        </div>
    );
}
