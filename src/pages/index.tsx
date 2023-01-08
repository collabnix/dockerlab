import * as React from "react"

import Navbar from "../components/Navbar/Navbar"
import { NavWrapper } from "../components/Navbar/navbar.style"

import GlobalStyles from "../components/globals.style"

const IndexPage = () => {
  const navItem: Array<string> = ["Tutorials", "Blogs", "Community"]
  return (
    <React.Fragment>
      <GlobalStyles />
      <NavWrapper>
        <Navbar navItems={navItem} />
      </NavWrapper>
    </React.Fragment>
  )
}
export default IndexPage
