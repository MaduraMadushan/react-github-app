import React, { useEffect, useContext } from 'react'
import GithubContext from './../../../../context/github/githubContext'

const User = ({ id }) => {
  const githubContext = useContext(GithubContext)

  const { getUser, user, loading } = githubContext

  useEffect(() => {
    getUser(id)
    // eslint-disable-next-line
  }, [])

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url
  } = user
  if (loading) return ''
  return (
    <div className='card text-center mb-3'>
      <div className='card-body'>
        <h6 className='display-6'>{login}</h6>
        <img
          src={avatar_url}
          alt=''
          width='120px'
          className='rounded-circle img-fluid image-border'
        />
        <hr />
        <h4 className='card-title my-2'>{name && name}</h4>

        <p className='card-text m-0'>{location && location}</p>
        <p className='card-text m-0'>{company && company}</p>
        <p className='card-text m-0'>{blog && blog}</p>
        <hr />
        <p className='card-text'>{bio && bio}</p>
        <a className='btn btn-dark btn-block' href={html_url}>
          Visit Github Profile
        </a>
      </div>
    </div>
  )
}

export default User
