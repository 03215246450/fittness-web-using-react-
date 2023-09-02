import React from 'react'
// import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className=''>
      
      <nav className="navbar navbar-expand-lg bg-body-disabled">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo.png" className="" alt="..."/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white p-4 " aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white p-4" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white p-4" href="/services">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white p-4" href="/Schedule">Schedule</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white p-4" href="/Gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white p-4" href="/contact">Contact</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <button type="button" class="btn btn-danger">BECOME A MEMBER</button>
      </form>
    </div>
  </div>
</nav>
  </div>

  

  )
}

export default Header
