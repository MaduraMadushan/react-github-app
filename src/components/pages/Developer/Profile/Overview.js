import React, { Fragment, useEffect, useContext } from 'react'
import GithubContext from './../../../../context/github/githubContext'
import Followers from './Followers'
import Repos from './Repos'

const Overview = ({ id }) => {
  const githubContext = useContext(GithubContext)

  const {
    getUser,
    user,
    loading,
    followers,
    repos,
    following,
    getUserRepos,
    getUserFollowers,
    getUserFollowing
  } = githubContext

  useEffect(() => {
    getUser(id)
    getUserRepos(id)
    // eslint-disable-next-line
  }, [])

  const onFollowers = () => {
    getUserFollowers(id)
  }

  const onFollowing = () => {
    getUserFollowing(id)
  }

  const onRepos = () => {
    getUserRepos(id)
  }

  const { followers: follo, following: follow, public_repos } = user
  if (loading) return ''
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-4'>
          <button
            onClick={onFollowers}
            className={
              followers.length
                ? 'btn btn-outline-secondary btn-block active'
                : 'btn btn-outline-secondary btn-block'
            }
          >
            Followers: {follo && follo}
          </button>
        </div>
        <div className='col-md-4'>
          <button
            onClick={onFollowing}
            className={
              following.length
                ? 'btn btn-outline-secondary btn-block active'
                : 'btn btn-outline-secondary btn-block'
            }
          >
            Following: {follow && follow}
          </button>
        </div>
        <div className='col-md-4'>
          <button
            onClick={onRepos}
            className={
              repos.length
                ? 'btn btn-outline-secondary btn-block active'
                : 'btn btn-outline-secondary btn-block'
            }
          >
            Repos: {public_repos && public_repos}
          </button>
        </div>
      </div>
      {followers.length === 0 ? null : (
        <div className='row mt-3'>
          {followers.map(fol => (
            <Followers key={fol.id} followers={fol} />
          ))}
        </div>
      )}
      {following.length === 0 ? null : (
        <div className='row mt-3'>
          {following.map(fol => (
            <Followers key={fol.id} followers={fol} />
          ))}
        </div>
      )}
      {repos.length === 0 ? null : (
        <div className='row mt-3'>
          {repos.map(rep => (
            <Repos key={rep.id} repos={rep} />
          ))}
        </div>
      )}
    </Fragment>
  )
}

export default Overview
