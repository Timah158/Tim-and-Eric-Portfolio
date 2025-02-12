import Link from "next/link.js";
import EricSkills from "@/app/SVGs/EricSkills.svg"
import '@/app/CSS/profile.modules.css'
import "../welcome.modules.css"

export default function EricProfile() {
  return (
    <main className="text-[color:var(--primary-font)] font-Ununtu">
      <div id="section_1" className="section">
        <section className="center profile">
        <img src="/Eric.jpg" alt="Eric" className="profile_picture" />
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
        <EricSkills className="skills"></EricSkills>
      </section>
    </div>
    </main>
  )
}
