import React from 'react'
// import PropTypes from 'prop-types'
import { Outlet, Link } from 'react-router-dom'
import { Wrapper, Nav, Menu, MenuItem, Main } from './styled'


const Layout = () => {

  return (
    <Wrapper>
      <Nav>
        <Menu>
          <MenuItem>
            <Link to="/your-order">Your Order</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/page2">Page 2</Link>
          </MenuItem>
        </Menu>
      </Nav>

      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  )
}


export default Layout
