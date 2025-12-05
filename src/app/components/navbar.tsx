'use client';

import DefaultLogo from "@/app/SVGs/logo.svg"
import HoveredLogo from "@/app/SVGs/hovered_logo.svg"
import MobileLogo from '@/app/SVGs/MobileLogo.svg'
import MenuIcon from '@/app/SVGs/menu.svg'
import Link from 'next/link'
import './navbar.modules.css'
import './interview.modules.css'
import { InterviewModal } from "./interviewModal"
import React from "react";
import { Button } from "@heroui/react";
import { useModal } from "@/app/context/modalContext";
import Image from "next/image";

function DesktopNavbar() {
  const { updateModal } = useModal();
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div className='desktop_navbar'>
      <nav className="navbar">
          <Link 
            href="/" 
            className='navbar_logo_link'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          {isHovered ? <Image src={HoveredLogo} alt="hovered-logo" className="navbar_logo"></Image> : <Image src={DefaultLogo} alt="default-logo" className="navbar_logo"></Image>}
        </Link>
        <ul className="navlist">
          <li className="navlink">
            <Link className="navlink" href="/tim">Tim</Link>
          </li>
          <li className="navlink">
            <Link className="navlink" href="/eric">Eric</Link>
          </li>
          <li className="navlink last_item">
            <Button className="navlink" onClick={() => updateModal(true)}>Interview</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function MobileNavbar() {
  const { updateModal } = useModal();
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);

  return (
    <div className='mobile_navbar'>
      <nav className="mobile_navbar">
        <Link href="/" className='mobile_navbar_logo_link'>
          {/* <MobileLogo className='mobile_navbar_logo' /> */}
          <Image src={MobileLogo} alt="mobile-logo" className="mobile_navbar_logo"/>
        </Link>
        <button className='menu_icon'>
          {/* <MenuIcon onClick={() => setShowDropdown(!showDropdown)} /> */}
          <Image src={MenuIcon} alt="menu-icon" onClick={() => setShowDropdown(!showDropdown)} />
        </button>
        {showDropdown && <MobileDropdown setShowDropdown={setShowDropdown}/>}
      </nav>
    </div>
  );
}

interface MobileDropdownProps {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileDropdown({ setShowDropdown }: MobileDropdownProps) {
  const { updateModal } = useModal();

  return (
    <ul className="mobile_navlist">
      <li className="mobile_navlink">
        <Link className="mobile_navlink_a" href="/tim">Tim</Link>
      </li>
      <li className="mobile_navlink">
        <Link className="mobile_navlink_a" href="/eric">Eric</Link>
      </li>
      <li className="mobile_navlink">
        <Button className="mobile_navlink_a" onClick={() => updateModal(true)}>Interview</Button>
      </li>
      <li className="mobile_navlink white_space" onClick={() => setShowDropdown(false)}></li>
    </ul>
  );
}

function Navbar() {
  const { toggleModal , updateModal} = useModal();

  return (
    <React.Fragment>
      {toggleModal && <InterviewModal updateModal={updateModal} toggleModal={toggleModal}/>}
      <MobileNavbar />
      <DesktopNavbar />
    </React.Fragment>
  );
}

export default Navbar;