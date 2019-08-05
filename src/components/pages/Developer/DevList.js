import React from 'react'
import { Link } from 'react-router-dom'

const DevList = props => {
  const { login, avatar_url } = props.user
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <div className='card text-center mb-3'>
        <div className='card-body'>
          <img
            src={avatar_url}
            alt=''
            width='120px'
            className='rounded-circle img-fluid image-border'
          />

          <h4 className='h4 my-2'>{login}</h4>
          <hr />
          <Link to={`/user/${login}`} className='btn btn-dark btn-block'>
            More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DevList
