import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Header, Conteiner, Content, Pages, Footer } from './Layout.styled'

const linkActiv = (active) => {
  const baseS = { mardginleft: '50px' }
    if (active.isActive) {
        return { color: "#48a4f0", ...baseS} 
    }
    return { color: "#212121", ...baseS}
}

const Layout = () => {
  return (
    <Pages>
      <Header>
        <Conteiner>
          <NavLink className='linkBar' style={linkActiv} to='/'>Houme</NavLink>
          <NavLink style={linkActiv} to='/movies'>Movies</NavLink>
        </Conteiner>
      </Header>
      <Content>
        <Conteiner>
          <Outlet />
        </Conteiner>
      </Content>
      <Footer>
        <Conteiner>
          {Date()}
        </Conteiner>
      </Footer>
      </Pages>
  )
}

export default Layout