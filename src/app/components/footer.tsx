'use client'

import GithubIcon from "../../../public/JSX/Github.jsx";
import LinkedInIcon from "../../../public/JSX/Linkedin.jsx"
import THMIcon from "../../../public/JSX/THM.jsx"
// import EmailIcon from "../../../public/JSX/Email.jsx"
import { Dispatch, SetStateAction, useState } from "react";
import Link from 'next/link'
import './footer.modules.css'

interface Props {
  toggleFooter: boolean,
  setToggleFooter: Dispatch<SetStateAction<boolean>>
}

const TimFooter: React.FC<Props> = (props) => {

    return (
        <div className='footer_container'>
          <div className='toggle_footer'>
            <button className='footer_button' onClick={() => props.setToggleFooter(!props.toggleFooter)}><h4>&#60;</h4></button>
            <Link className="footer_link" href="/tim"><b>Tim</b></Link>
            <button className='footer_button' onClick={() => props.setToggleFooter(!props.toggleFooter)}><h4>&#62;</h4></button>
          </div>
          <div className='footer_icons'>
            <Link href="https://github.com/Timah158" rel='noreferrer' target="_blank"><GithubIcon className='footer_icon'/></Link>
            <Link href="https://www.linkedin.com/in/timlopez22" rel='noreferrer' target="_blank"><LinkedInIcon className='footer_icon'/></Link>
            <Link href="https://tryhackme.com/p/Timah158" rel='noreferrer' target="_blank"><THMIcon className='footer_icon'/></Link>
            {/* <EmailIcon className='footer_icon'/> */}
          </div>
        </div>
    );
  }

  const EricFooter: React.FC<Props> = (props) => {
    return (
        <div className='footer_container'>
          <div className='toggle_footer'>
            <button className='footer_button' onClick={() => props.setToggleFooter(!props.toggleFooter)}><h4>&#60;</h4></button>
            <Link className="footer_link" href="/eric"><b>Eric</b></Link>
            <button className='footer_button' onClick={() => props.setToggleFooter(!props.toggleFooter)}><h4>&#62;</h4></button>
          </div>
          <div className='footer_icons'>
          <Link href="https://github.com/emoore36" rel='noreferrer' target="_blank"><GithubIcon className='footer_icon'/></Link>
          <Link href="https://www.linkedin.com/in/ericmoore0709/" rel='noreferrer' target="_blank"><LinkedInIcon className='footer_icon'/></Link>
          {/* <EmailIcon className='footer_icon'/> */}
          </div>
        </div>
    )
  }

  const Footer = () => {
    const [toggleFooter, setToggleFooter] = useState<boolean>(false);

    return (
      <footer>
        {!toggleFooter && <TimFooter toggleFooter={toggleFooter} setToggleFooter={setToggleFooter}/>}
        {toggleFooter && <EricFooter toggleFooter={toggleFooter} setToggleFooter={setToggleFooter}/>}
      </footer>
    )
  }

  export default Footer;