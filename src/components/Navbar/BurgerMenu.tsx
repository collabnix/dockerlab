import React, { useRef, useState } from "react"
import styled, { css } from "styled-components"

interface styledComponetProps {
  open: boolean | undefined
}
const StyledMenu = styled.nav<styledComponetProps>`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  background: #004ca3;
  transform: ${({ open }) => (!open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  top: 0;
  left: 100;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
interface MenuProps {
  open: boolean | undefined
  navItems: Array<string>
}
const Menu = ({ open, navItems }: MenuProps) => {
  return (
    <StyledMenu open={open}>
      {navItems.map((nav, index) => {
        return (
          <a key={index} href="/">
            {nav}
          </a>
        )
      })}
    </StyledMenu>
  )
}

const WrapperDiv = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: unset;
  }
`

const StyledBurger = styled.button<styledComponetProps>`
  top: 7%;
  left: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#004ca3")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
interface props {
  navItems: Array<string>
}
const BurgerMenu = ({ navItems }: props) => {
  const [open, SetOpen] = useState<boolean>(false)
  const node = useRef<HTMLDivElement>(null)
  return (
    <WrapperDiv ref={node}>
      <Burger open={open} setOpen={SetOpen} />
      <Menu open={open} navItems={navItems} />
    </WrapperDiv>
  )
}

export default BurgerMenu
