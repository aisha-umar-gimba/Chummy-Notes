import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Notes from './Notes';


const AddNote = (props) => {
    const date = new Date();
    const toggle = props.darkMode ? "Dark" : "Light";
    const [notes, setNotes] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("notes"));
        return localData?.length ? localData :
            [
                {
                    key: nanoid(),
                    title: "Welcome",
                    text: "Hi, I built a Note App with react. I hope you will like it.",
                    date: "Sun Nov 19 2022"
                }
            ]
    });

    useEffect(() => {
        localStorage.setItem("note", JSON.stringify(notes))
    }, [notes])

    const [formData, setFormData] = useState({ title: "", text: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(preFormData => {
            return {
                ...preFormData,
                [name]: value
            }
        })
    }

    const handleNote = (e) => {
        e.preventDefault();
        if (formData.title.trim().length > 0 && formData.text.trim().length > 0) {
            const newNote = {
                key: nanoid(),
                title: formData.title,
                text: formData.text,
                date: date.toDateString()
            }
            const newNotes = [...notes, newNote]
            setNotes(newNotes)
            formData.key = null;
            formData.text = "";
            formData.title = "";
            formData.key = "";
        } else {
            alert("Can not add empty notes");
        }
    }

    const deleteNote = (key) => {
        if (key !== notes[0].key) {
            
                const newNotes = notes.filter((note) => note.key !== key);
                setNotes(newNotes)
        }
    }

    const searchNote = () => {
        if (props.search) {
            console.log(props.search);
            return notes.filter((note) => note.title.toLowerCase().includes(props.search));
        } else {
            return notes;
        }
    }

    return (
        <>
            <div className='Note'>
                <div className={`Note--Card ${`${toggle}-Card`}`}>
                    <input
                        type='text'
                        className='Add--Title'
                        placeholder='Enter Title'
                        onChange={handleChange}
                        name='title'
                        value={formData.title}
                    >
                    </input>
                    <div className="para">
                        <textarea key={formData.key}
                            placeholder='type your note here'
                            name='text'
                            onChange={handleChange}
                            value={formData.text}
                        >
                        </textarea>
                    </div>
                    <span>Date: {date.toDateString()}</span>
                    <img className='Card-logo' src={require('./images/flower.png')} alt='logo' />
                    <button onClick={handleNote} className="Add">Save</button>
                </div>
            </div>
            {searchNote().map((note) =>
                <Notes
                    key={note.key} id={note.key} title={note.title} text={note.text} date={note.date}
                    handleDelete={deleteNote} 
                    darkMode={toggle}
                />
            )}
        </>
    )
}

export default AddNote;