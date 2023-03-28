import React from 'react'
import '../styles/Headers.css';

const Head = () => {
  return (
    <>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand brandIcon"  href="#"><h2 style={{ fontSize:'40px',overflow:'hidden', fontFamily: 'sans-serif', color:'black',fontWeight:'900'}}>10 Billion trees</h2></a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class=" navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item navItems active text ">
                            <a class="nav-link" href="/">Home</a>
                        </li>

                        <li class="nav-item navItems text">
                            <a class="nav-link" href="/form">Form</a>
                        </li>

                        <li class="nav-item navItems text">
                            <a class="nav-link" href="/about">About</a>
                        </li> 
                        <li class="nav-item navItems text">
                            <a class="nav-link" href="/region">Regions</a>
                        </li>                        

                    </ul>

                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Head