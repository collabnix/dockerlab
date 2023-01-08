import styled, { css } from "styled-components"

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Nav = styled.nav`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    width: auto;
    gap: 3rem;
    justify-content: space-between;
    align-self: center;
    margin-left: 0;
    margin-bottom: 0;
  }
  li {
    cursor: pointer;
    transition-duration: 0.2s;
    transition-property: color;
    transition-timing-function: ease-in-out;
    :hover {
      color: #001d3d;
    }
  }
`
