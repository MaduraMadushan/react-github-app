import React from 'react'
import { Link } from 'react-router-dom'
import User from './User'
import Overview from './Overview'

const Profile = ({ match }) => {
  return (
    <section className='mt-5'>
      <div className='container'>
        <Link to='/developer' className='btn btn-dark my-3'>
          Back To Search
        </Link>
        <div className='row'>
          <div className='col-lg-4  col-sm-12'>
            <User id={match.params.id} />
          </div>
          <div className='col-lg-8  col-sm-12 '>
            <Overview id={match.params.id} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
