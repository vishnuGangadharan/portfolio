import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const NavBar = () => {
  return (
    <Navbar shouldHideOnScroll className="bg-black">
      <NavbarBrand>
        <p className="font-bold text-inherit text-white">Vishnu.p</p>
      </NavbarBrand>
      
      {/* Center items: visible only on medium (md) screens and up */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {/* Add center items here if needed */}
      </NavbarContent>

      {/* Right-side items */}
      <NavbarContent justify="end">
        {/* GitHub icon: hidden on small (sm) and smaller screens, visible on large (lg) screens */}
        <NavbarItem className="hidden lg:flex">
          <FaGithub size={30} color="white" />
        </NavbarItem>
        
        {/* LinkedIn icon: visible on all screen sizes */}
        <NavbarItem>
          <CiLinkedin size={40} color="white" />
        </NavbarItem>
        
        {/* Dark mode toggle/link: visible on medium (md) screens and up */}
        <NavbarItem className="hidden md:flex">
          {/* <Link href="#" className="text-white">dark</Link> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
