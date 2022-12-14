import React from 'react'

const Notes = (props) => {
    return (
        <div className='Note'>
            <div className={`Note--Card ${`${props.darkMode}-Card`}`}>
                <h1 className='Note--Title'>{props.title}</h1>
                <div className="para">
                    <textarea
                        key={props.id}
                        value={props.text}
                        readOnly ></textarea>
                </div>
                <span>Date: {props.date}</span>
                <img className='Card-logo' src={require('./images/flower.png')} alt='logo' />
                <button className="delete" onClick={() => props.handleDelete(props.id)}><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    )
}

export default Notes