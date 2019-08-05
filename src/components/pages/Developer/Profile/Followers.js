import React from 'react'

const Followers = ({ followers: { avatar_url, login } }) => {
  return (
    <div className='col-md-4'>
      <div className='card text-center my-2'>
        <div className='card-body'>
          <img
            src={avatar_url}
            alt=''
            width='100px'
            className='rounded-circle img-fluid '
          />
          <hr />
          <p className='card-text'>{login}</p>
        </div>
      </div>
    </div>
  )
}

export default Followers
