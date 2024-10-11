import React from 'react'
import NoteButton from '../NoteButton/NoteButton'
import './style.css'

const NoteCard = ({title, date, body, id, onDelete, onArchieve }) => {
  return (
    <div className='note__card'>
      <div className='note__card-text'>
        <h3>{title}</h3>
        <small>{date}</small>
        <hr />
        <div className='note__card-p'>
        <p>{body}</p>
        </div>
      </div>
      <div>
        <NoteButton id={id} onDelete={onDelete} onArchieve={onArchieve}/>
      </div>
    </div>
  )
}

export default NoteCard
