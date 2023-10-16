import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 100vh;
  color: ${props => props.theme.palette.black};
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.size4};
`

export const Menu = styled.ul`

`

export const MenuItem = styled.li`
  display: inline;  
  margin: ${props => props.theme.spacing.size4};

  &>a {
    color: ${props => props.theme.palette.black};
    text-decoration: none;
  }
`

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${props => props.theme.spacing.size4};
  
`
