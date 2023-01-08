import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Nav } from "./navbar.style"

interface props {
  navItems: Array<string>
}

const Navbar = ({ navItems }: props) => {
  return (
    <Nav>
      <div>
        <StaticImage
          src="../../images/logo.png"
          loading="eager"
          width={80}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="logo"
        />
      </div>
      <ul>
        {navItems.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </Nav>
  )
}

export default Navbar
