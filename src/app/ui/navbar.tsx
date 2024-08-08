'use client'

import Logo from "../../../public/JSX/Logo.jsx"
import Link from 'next/link'
import './navbar.modules.css'
import './interview.modules.css'
import { InterviewModal } from "./interviewModal"
import React from "react";
import {Button} from "@nextui-org/react";

export default function Navbar() {
  const [toggleModal, updateModal] = React.useState<boolean>(false);
  
  return (
    <>
    {toggleModal && <InterviewModal toggleModal={toggleModal} updateModal ={updateModal}/>}
    <div className='flex justify-center pt-[3em] pb-[6em]'>
      <nav className="navbar">
        <Link href="/" className='navbar_logo_link'><Logo className="navbar_logo"></Logo></Link>
        <ul className="navlist">
          <li className="navlink"><Link className="navlink" href="/tim">Tim</Link></li>
          <li className="navlink"><Link className="navlink" href="/eric">Eric</Link></li>
          <li className="navlink last_item"><Button className="navlink" onClick={() => updateModal(true)}>Interview</Button></li>
        </ul>
      </nav>
    </div>
  </>
  );
}