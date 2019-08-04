import {
  SET_LOADING,
  GET_USERS,
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_GISTS,
  CLEAR_USER,
  CLEAR_USERS,
  CLEAR_FOLLOWERS,
  CLEAR_FOLLOWING,
  CLEAR_GISTS,
  CLEAR_REPOS
} from './../types'

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_USERS:
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
        loading: false
      }
    case GET_FOLLOWING:
      return {
        ...state,
        following: action.payload,
        loading: false
      }
    case GET_GISTS:
      return {
        ...state,
        gists: action.payload,
        loading: false
      }
    case CLEAR_USER:
      return {
        ...state,
        user: {},
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
    case CLEAR_FOLLOWERS:
      return {
        ...state,
        followers: [],
        loading: false
      }
    case CLEAR_FOLLOWING:
      return {
        ...state,
        following: [],
        loading: false
      }
    case CLEAR_GISTS:
      return {
        ...state,
        gists: [],
        loading: false
      }
    case CLEAR_REPOS:
      return {
        ...state,
        repos: [],
        loading: false
      }
    default:
      return state
  }
}
