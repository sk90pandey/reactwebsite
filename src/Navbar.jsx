import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className='container-fluid'>

                <div className="collapse navbar-collapse"
                  id="navbarTogglerDemo01">
                  <NavLink className="navbar-brand" to="/">
                    <h4>React Learn</h4>
                  </NavLink>

                  {/* <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls='#navbarSupportedContent'
                    aria-expanded="false"
                    aria-label='Toggle navigation'
                  >
                    <span className='navbar-toggler-icon'></span>

                  </button> */}

                  <div
                    className='collapse navbar-collapse'
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                          >
                          Home
                          </NavLink>
                      </li>


                      <li className="nav-item active">
                        <NavLink 
                        className="nav-link" 
                        exact
                        aria-current="page"
                        to="/service"
                        >
                        Service
                        </NavLink>
                      </li>
                      

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link active"
                          aria-current="page"
                          to="/about"
                        >
                          About
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link active"
                          aria-current="page"
                          to="/contact"
                        >
                          Contact
                        </NavLink>
                      </li>

                    </ul>
                  </div>
                  {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search" />
                     <button className="btn btn-outline-success my-2 my-sm-0"
                    type="submit">Search</button>
                  </form>
                   */}
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
