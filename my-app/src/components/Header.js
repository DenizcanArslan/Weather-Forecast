import React from 'react'

const Header = () => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between  text-white">
      <ul className="list-unstyled d-flex fs-3">
        <li className="ms-3 "><a className="link-body-emphasis text-white" href="https://github.com/DenizcanArslan" target="_blank" rel="noreferrer"> <i class="fa-brands fa-github"></i> </a></li>
        <li className="ms-3"><a className="link-body-emphasis text-white" href="https://www.instagram.com/denizcan.arslan/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
  )
}

export default Header;