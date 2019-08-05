import React, { useState, useContext } from 'react'
import GithubContext from './../../../context/github/githubContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const [text, setText] = useState('')

  const onChange = e => setText(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    githubContext.searchUsers(text)
    setText('')
  }
  return (
    <form onSubmit={onSubmit} className='py-5'>
      <input
        type='text'
        className='form-control'
        placeholder='Search Users...'
        value={text}
        onChange={onChange}
      />
      <input
        className='btn btn-dark btn-block mt-3'
        type='submit'
        value='Search'
      />
    </form>
  )
}

export default Search
