import React from 'react'
import './style.css'

const NoteButton = ({id, onDelete, onArchieve}) => {
  return (
    <div className='note__button'>
      <button className='delete' id={id} onClick={() => onDelete(id)}>
        <img src="/svg/deleteIcon.svg" alt="" />
      </button>
      <button className='archieve' id={id} onClick={() => onArchieve(id)}>
        <img src="/svg/archieveIcon.svg" alt="" />
      </button>
    </div>
  )
}

export default NoteButton
