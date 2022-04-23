import {Suspense} from 'react' //суспенс оборачивает все роуты
import { NavLink, Outlet } from 'react-router-dom'
import { Header, Conteiner, Content, Pages, Footer, DateWork } from './Layout.styled'
import { Skeleton } from '@mui/material';
import { linkActiv } from 'utilits/linkActive';


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
          
          <Suspense fallback={
            <>
            <Skeleton sx={{ bgcolor: 'red' }}/>
            <Skeleton animation="wave" sx={{ bgcolor: 'gren' }}/>
              <Skeleton animation={false} sx={{ bgcolor: 'blue' }} />
              <p>Без паники это тестовые цвета для скелетона чтоб он был очень заметным!<br/>Заказчик либо дизайнер диктует стилизацию</p>
            </>
          }>
            <Outlet />
          </Suspense>
        </Conteiner>
      </Content>
      <Footer>
        <Conteiner>
          <DateWork>Made during the WAR 2022</DateWork>
        </Conteiner>
      </Footer>
      </Pages>
  )
}

export default Layout