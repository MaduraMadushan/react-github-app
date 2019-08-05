import React from 'react'
import { Link } from 'react-router-dom'
import logo from './img/Fintechtocat.png'

const Home = () => {
  return (
    <React.Fragment>
      <header className='mt-5'>
        <div className='container'>
          <div className='row d-flex align-items-center '>
            <div className='col-md-7 '>
              <h1 className='display-4 color-heading'>
                Hire freelancers.
                <br />
                Make things happen.™
              </h1>
              <p className='lead'>
                Get matched to top talent in minutes through our global network
                of skilled freelancers and professional agencies.
              </p>
              <Link to='/developer' className='btn btn-dark mb-3'>
                Get Started
              </Link>
            </div>
            <div className='col-md-5 d-flex  justify-content-center'>
              <img
                src={logo}
                alt=''
                className='img-fluid'
                width='400px'
                height='400px'
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className='container'>
            <h3 className='text-center py-5 text-light'>Services</h3>
            <div className='row '>
              <div className='col-lg-3 col-md-6'>
                <div className='card card-hover text-center card-hight mb-4 '>
                  <h1>
                    <i className='fas fa-mobile-alt fa-lg' />
                  </h1>
                  <div className='card-body'>
                    <h5 className='card-title'>Mobile App Development</h5>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='card card-hover text-center card-hight mb-4'>
                  <h1>
                    <i className='fas fa-tv fa-lg' />
                  </h1>
                  <div className='card-body'>
                    <h5 className='card-title'>Web Development</h5>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='card card-hover text-center card-hight mb-4'>
                  <h1>
                    <i className='far fa-file-code fa-lg' />
                  </h1>
                  <div className='card-body'>
                    <h5 className='card-title'>Hire Developer</h5>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='card card-hover text-center card-hight mb-4'>
                  <h1>
                    <i className='fas fa-store fa-lg' />
                  </h1>
                  <div className='card-body '>
                    <h5 className='card-title'>CMS & E-commerce</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-5'>
          <div className='container'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-3'>
                <h3 className='display-5 py-3 text-light'>
                  Hire for any scope
                </h3>
              </div>
              <div className='col-lg-9 col-md-12'>
                <div className='card card-hire'>
                  <div className='row d-flex align-items-start'>
                    <div className='col-md-4 col-sm-12 mb-3'>
                      <h5 className='hire'>Complex project</h5>
                      <p>
                        Find specialized experts and agencies for large
                        projects.
                      </p>
                    </div>
                    <div className='col-md-4 col-sm-12 mb-3'>
                      <h5 className='hire'>Longer-term contract</h5>
                      <p>Expand your team with a skilled resource.</p>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                      <h5 className='hire'>Short term</h5>
                      <p>Build a pool of diverse experts for one-off tasks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className='py-5'>
        <div className='container'>
          <h3 className='text-center py-5'>TESTIMONIALS</h3>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <div className='card card-test  mb-3 text-center'>
                <div className='card-body'>
                  <div className='card-bag'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg'
                      alt=''
                      width='150px'
                      className='rounded-circle img-fluid image-border'
                    />
                  </div>

                  <h5 className='card-title my-2'>Negi Boaka</h5>
                  <hr />
                  <blockquote className='card-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis nostrum deleniti nemo repellat. Id, aliquid
                    necessitatibus perferendis praesentium itaque doloribus
                    molestias quaerat a deleniti distinctio voluptate,
                    reprehenderit omnis, dolorem ratione.
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='card card-test  mb-3 text-center'>
                <div className='card-body'>
                  <div className='card-bag'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg'
                      alt=''
                      width='150px'
                      className='rounded-circle img-fluid image-border'
                    />
                  </div>

                  <h5 className='card-title my-2'>Mani Masshafi</h5>
                  <hr />
                  <blockquote className='card-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis nostrum deleniti nemo repellat. Id, aliquid
                    necessitatibus perferendis praesentium itaque doloribus
                    molestias quaerat a deleniti distinctio voluptate,
                    reprehenderit omnis, dolorem ratione.
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='card card-test  mb-3 text-center'>
                <div className='card-body'>
                  <div className='card-bag'>
                    <img
                      src='https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg'
                      alt=''
                      width='150px'
                      className='rounded-circle img-fluid border-3'
                    />
                  </div>

                  <h5 className='card-title my-2'>Mike Johnson</h5>
                  <hr />
                  <blockquote className='card-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis nostrum deleniti nemo repellat. Id, aliquid
                    necessitatibus perferendis praesentium itaque doloribus
                    molestias quaerat a deleniti distinctio voluptate,
                    reprehenderit omnis, dolorem ratione.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
