import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll className="bg-black">
      <NavbarBrand>
        <p className="font-bold text-inherit text-white">Vishnu.p</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* Add your center items here */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <FaGithub size={30} color="white" />
        </NavbarItem>
        <NavbarItem>
          <CiLinkedin size={40} color="white" /> 
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white">dark</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
