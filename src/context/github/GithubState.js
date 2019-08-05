import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
  GET_USERS,
  CLEAR_USERS,
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  CLEAR_REPOS,
  GET_FOLLOWERS,
  CLEAR_FOLLOWERS,
  GET_FOLLOWING,
  CLEAR_FOLLOWING,
  GET_GISTS,
  CLEAR_GISTS
} from './../types'

let githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
let githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    following: [],
    followers: [],
    gists: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const setLoading = () => dispatch({ type: SET_LOADING })
  const clearUsers = () => dispatch({ type: CLEAR_USERS })
  const clearUser = () => dispatch({ type: CLEAR_USER })
  const clearFollowers = () => dispatch({ type: CLEAR_FOLLOWERS })
  const clearFollowing = () => dispatch({ type: CLEAR_FOLLOWING })
  const clearRepos = () => dispatch({ type: CLEAR_REPOS })
  const clearGists = () => dispatch({ type: CLEAR_GISTS })

  const fetchData = async () => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    dispatch({ type: GET_USERS, payload: res.data })
  }

  const searchUsers = async search => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    dispatch({ type: SEARCH_USERS, payload: res.data.items })
  }

  const getUser = async username => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    dispatch({ type: GET_USER, payload: res.data })
  }

  const getUserRepos = async username => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    dispatch({ type: GET_REPOS, payload: res.data })
    clearFollowers()
    clearFollowing()
    clearGists()
  }

  const getUserFollowers = async username => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/users/${username}/followers?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    dispatch({ type: GET_FOLLOWERS, payload: res.data })
    clearFollowing()
    clearRepos()
    clearGists()
  }

  const getUserFollowing = async username => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/users/${username}/following?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    dispatch({ type: GET_FOLLOWING, payload: res.data })
    clearFollowers()
    clearRepos()
    clearGists()
  }

  const getUserGists = async username => {
    setLoading()
    const res = await axios.get(
      `https://api.github.com/users/${username}/gists?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    dispatch({ type: GET_GISTS, payload: res.data })
    clearFollowers()
    clearFollowing()
    clearRepos()
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        following: state.following,
        followers: state.followers,
        gists: state.gists,
        loading: state.loading,
        fetchData,
        searchUsers,
        getUser,
        getUserRepos,
        getUserFollowers,
        getUserFollowing,
        getUserGists,
        clearUsers,
        clearUser,
        clearFollowers,
        clearFollowing,
        clearRepos,
        clearGists
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
