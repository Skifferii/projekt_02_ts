
import { Link, useNavigate } from "react-router-dom"

import { Footer, Header, HeaderLogo, LayoutComponent, Main, NavContainer } from "./styles"
import Avatar from 'assets/avatar.jpg'
import { LayoutProps } from "./types"
import NavigationLink from "components/NavigationLink/NavigationLink"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  return (
    <LayoutComponent>
      <Header>
        {/* Первый способ сделать картинку ссылкой для перехода на главную страницу */}
        <Link to='/'><HeaderLogo src={Avatar} /></Link>
        <NavContainer>
          <NavigationLink path='/' nameLink="Home" />
          <NavigationLink path='/users' nameLink="Users" />
          <NavigationLink path='/about' nameLink="About" />
          <NavigationLink path='/clients' nameLink="Clients" />
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        {/* Второй способ сделать картинку ссылкой для перехода на главную страницу */}
        <HeaderLogo src={Avatar} onClick={() => navigate('/')} />
      </Footer>
    </LayoutComponent>
  )
}

export default Layout