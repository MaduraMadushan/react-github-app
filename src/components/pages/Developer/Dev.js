import React, { useContext, useEffect } from 'react'
import GithubContext from './../../../context/github/githubContext'
import DevList from './DevList'

const Dev = () => {
  const githubContext = useContext(GithubContext)

  useEffect(() => {
    githubContext.fetchData()
    // eslint-disable-next-line
  }, [])

  if (githubContext.loading) {
    return ''
  } else
    return (
      <div className='row'>
        {githubContext.users.map(user => (
          <DevList key={user.id} user={user} />
        ))}
      </div>
    )
}

export default Dev
