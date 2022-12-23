import React from 'react'
import { useState } from 'react'
import style from './createPostModal.module.css'

const CreatePostModal = ({ handleModalClose, teamData }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const teamUrl = `http://localhost:3500/createdTeams/${teamData.id}`

    const submitPost = (event) => {
        event.preventDefault()
        fetch(teamUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...teamData, discussions: [...teamData.discussions, { title, content, author: 'You'}]
          })
        });
        handleModalClose(false);
        
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

  return (
    <div className={style.container}>
        <h2>CREATE A NEW POST</h2>
        <form onSubmit={submitPost} className={style.form}>
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
            <textarea onChange={handleContentChange} rows='6' cols='75' placeholder="Content" />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreatePostModal