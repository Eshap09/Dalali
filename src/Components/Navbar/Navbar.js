import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">#SabMilega</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active links clr mx-3"  aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link links clr" href="/login">Login</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 mx-3" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
