import React from 'react'

const Repos = ({ repos: { name, language, size, html_url } }) => {
  return (
    <div className='col-md-6'>
      <div className='card text-center my-2'>
        <div className='card-body'>
          <div>
            <h3 className='h3'>{name}</h3>
            <p className='my-0'>Language: {language}</p>
            <p className='my-0'>Size: {size}</p>
            <hr />
            <a href={html_url} className='btn btn-dark px-3 mt-1'>
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repos
