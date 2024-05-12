export function addService(title,content,setNotes) {
    const noteList =listNotes();
    const newnNote = { name: title, description: content };
    console.log(noteList);
    noteList.push(newnNote);
    localStorage.setItem('myNotes', JSON.stringify(noteList));
    setNotes(noteList);
}
export function deleteNote(note,setNotes) {
    const noteList =listNotes();
    const updatedNotes = noteList.filter((item) => {
        return item.name !== note.name && item.description !== note.description;
    });
    localStorage.setItem('myNotes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
}
export function listNotes() {
    const notesFromStorage = localStorage.getItem('myNotes');
    if (!notesFromStorage) {
        localStorage.setItem('myNotes', JSON.stringify([]));
    }
    return JSON.parse(notesFromStorage);
}