import React from 'react'

export default function HeaderComponent() {
  return (
    <div className='d-flex p-2 flex-row m-0'>
      <nav className="navbar navbar-light bg-light w-100 m-0">
        <a className="navbar-brand" href="#">Employee Management System</a>
        <form className="form-inline d-flex p-2 flex-row justify-content-end">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
}
