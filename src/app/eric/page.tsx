import Image from "next/image";
import Link from "next/link.js";
import EricSkills from "../../../public/JSX/EricSkills.jsx"
import "./profile.modules.css"
import "../welcome.modules.css"

export default function EricProfile() {
  return (
    <main className="text-[color:var(--primary-font)] font-Ununtu">
      <div id="section_1" className="section">
        <section className="center profile">
          <Image src="/Eric.jpg" alt="Eric Profile Picture" className="w-[20vw] border-[color:var(--primary-color)] m-[2vw] border-2 border-solid" width={2208} height={2944}/>
          <div>
            <h1 className="main_title">About Eric</h1>
            <br></br>
            <p>
              I am a full-stack web developer with experience in Spring Boot, Thymeleaf, Bootstrap, MySQL, PostgreSQL, and MongoDB.
              I prefer working in Java, but I also have experience with other languages and webstacks such as .NET in C# and Django in Python.
              If you&apos;re looking for someone that has a passion for Object-Oriented design principles and scalable backend servers, I&apos;m your guy.
            </p>
          </div>
          <div id="main_title_buttons">
            <button className="main_button">Contact</button>
            <Link href="/api/download/ericResume.pdf" className="main_button">Resume</Link>
          </div>
        </section>
      </div>
      <div id="section_2" className="section odd_section">
      <section className="center">
        <div>
          <EricSkills></EricSkills>
        </div>
      </section>
    </div>
    </main>
  )
}
