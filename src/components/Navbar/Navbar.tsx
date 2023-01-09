import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import BurgerMenu from "./BurgerMenu"
import { IconWraper, Nav } from "./navbar.style"

interface props {
  navItems: Array<string>
}

const Navbar = ({ navItems }: props) => {
  return (
    <Nav>
      <IconWraper>
        <StaticImage
          src="../../images/logo.png"
          loading="eager"
          width={80}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="logo"
        />
      </IconWraper>
      <ul>
        {navItems.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
        <BurgerMenu navItems={navItems} />
      </ul>
    </Nav>
  )
}

export default Navbar
