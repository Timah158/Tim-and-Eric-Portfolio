import Image from 'next/image';
import Link from 'next/link';
import TimSkills from "../../../public/JSX/TimSkills.jsx"
import './profile.modules.css'
import '../welcome.modules.css'

export default function TimProfile() {
  return (
    <main className="text-[color:var(--primary-font)] font-Ununtu">
      <div id='section_1' className="section">
        <section className="center profile">
          <Image
            src="/Tim.jpg"
            alt="Tim Profile Picture"
            className="w-[20vw] border-[color:var(--primary-color)] m-[2vw] border-2 border-solid"
            width={4480}
            height={6720}
          />
          <div>
            <h1 className='main_title'>About Tim</h1>
            <br></br>
            <p>I am an IT professional with experience in technical support, front-end development, and a passion for cybersecurity.
              During my time at university I worked as a call technician for 2 years providing technical support and troubleshooting.
              While at this job I was eventually moved to the development team where I gained experience with HTML, CSS, and JavaScript.
            </p>
          </div>
          <div id="main_title_buttons">
            <button className='main_button'>Contact</button>
            <Link href="/api/download/timResume.docx" className='main_button'>Resume</Link>
          </div>
        </section>
      </div>
      <div id='section_2' className="section odd_section">
      <section className="center">
        <div>
          <TimSkills></TimSkills>
        </div>
      </section>
    </div>
      {/* <div id='section_3' className="section">
        <section className="center profile">
          <div>
            <h3>Certifications</h3>
            <div data-iframe-width="150" 
              data-iframe-height="270" 
              data-share-badge-id="e83dab79-d868-479e-a72c-723389c90e71" 
              data-share-badge-host="https://www.credly.com">
            </div>
            <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
          </div>
        </section>
      </div>
      <div id='section_4' className="section odd_section">
        <section className="center profile">
          <div><h3>Projects</h3></div>
        </section>
      </div> */}
    </main>
  )
}
