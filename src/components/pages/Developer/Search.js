import React from 'react'

const Search = () => {
  return (
    <form className='py-5'>
      <input
        type='text'
        className='form-control'
        placeholder='Search Users...'
      />
      <input
        className='btn btn-dark btn-block mt-3'
        type='submit'
        value='Search'
      />
      <button className='btn btn-light btn-block mt-3'>Clear</button>
    </form>
  )
}

export default Search
