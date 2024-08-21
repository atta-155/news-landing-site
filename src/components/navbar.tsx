import React from 'react';
import AvatorIcon from "../assets/avator-icon.jpg";
function Navbar() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            {/* logo */}
          <a className="navbar-brand" href="#">LOGO</a>

            {/* menu icon on small screen */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* menu */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">DISCOVERY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">PHOTOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><img src={AvatorIcon} className='img-fluid rounded-circle' style={{width: 30, height: 30, objectFit: 'cover'}} alt={AvatorIcon}/></a>

              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
