import { useState } from 'react';
import React from 'react';
import './note.css';
import DeleteNote from '../deleteNote/deleteNote';
import { deleteNote, listNotes } from '../../services/noteService';

export default function Note({ note, setNotes }) {
    function handleDelete() {
        console.log(note);
        deleteNote(note, setNotes);
    }

    return (
        <div className="note">
            <h3 className="item">{note.name}</h3>
            <p className="item">{note.description}</p>
            <DeleteNote onDelete={handleDelete} />
        </div>
    );
}
