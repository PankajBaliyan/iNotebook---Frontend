import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
            _id: '649fc358aa274bff77e77dca',
            user: '649fbdfad33887cd06ca0953',
            title: 'MY title',
            description: 'Jaata ka choora',
            tag: 'Jaat',
            date: '2023-07-01T06:10:32.527Z',
            __v: 0,
        },
    ];

    const [notes, setNotes] = useState(notesInitial);

    //Add a note
    const addNote = (title, description, tag) => {
        const note = {
            _id: '64a2acd92cbc3c924da6c65f',
            user: '649fbdfad33887cd06ca0953',
            title: title,
            description: description,
            tag: tag,
            date: '2023-07-03T11:11:21.069Z',
            __v: 0,
        };
        setNotes(notes.concat(note));
    };

    //Delete a note
    const deleteNote = () => {};

    //Edit a note
    const updateNote = () => {};

    return (
        <NoteContext.Provider
            value={{ notes, addNote, deleteNote, updateNote }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
