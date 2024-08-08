import Image from "next/image";
import Link from 'next/link';
import './welcome.modules.css'

export default function Home() {
  return (
    <main className="text-[color:var(--primary-font)] font-Ununtu">
      <div id='section_1' className="section">
        <section className="split">
          <div>
            <h1 className="main_title">Welcome Potential Employers!</h1>
            <br></br>
            <p>We are two industry professionals looking to showcase our skills and are currently seeking employment.
              If you are looking for employees experienced in either full stack development or cybersecurity, you&apos;ve
              come to the right place.
            </p>
          </div>
          <div id="main_title_buttons" className="text-center">
            <button className='main_button'>Contact</button>
            <Link href="#section_3" className='main_button'>About</Link>
          </div>          
        </section>
      </div>
      <div id='section_2' className="section odd_section">
        <section className="center">
          <div>
            <h3>What We Do</h3>
            <p>
              We are two industry professionals looking to showcase our skills and connect with employers.
              We hope that with this site we can properly demonstrate our skills and learn by doing. Our
              specialties are full-stack developent, cybersecurity, and teamwork.
            </p>
          </div>
        </section>
      </div>
      <div id='section_3' className="section">
        <section className="split">
          <Image
            src="/Tim.jpg"
            alt="Tim Profile Picture"
            className="w-[20vw] border-[color:var(--primary-color)] m-[2vw] border-2 border-solid"
            width={4480}
            height={6720}
          />
          <div>
            <h3>About Tim</h3>
            <p>
              I am an IT professional with experience in technical support, front-end development, and a passion for cybersecurity.
              During my time at university I worked as a call technician for 2 years providing technical support and troubleshooting.
              While at this job I was eventually moved to the development team where I gained experience with HTML, CSS, and JavaScript.
            </p>
            <br></br>
            <ul>
              <li>Cyber Security</li>
              <li>Networking</li>
              <li>Front-end Web Development</li>
              <li>React</li>
              <li>AWS</li>
            </ul>
          </div>
        </section>
      </div>
      <div id='section_4' className="section odd_section">
        <section className="split">
          <div>
            <h3>About Eric</h3>
            <p>
              I am a full-stack web developer with experience in Spring Boot, Thymeleaf, Bootstrap, MySQL, PostgreSQL, and MongoDB.
              I prefer working in Java, but I also have experience with other languages and webstacks such as .NET in C# and Django in Python.
              If you&apos;re looking for someone that has a passion for Object-Oriented design principles and scalable backend servers, I&apos;m your guy.
            </p>
            <br></br>
            <ul>
              <li>Full Stack</li>
              <li>Java</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <Image
            src="/Eric.jpg"
            alt="Eric Profile Picture"
            className="w-[20vw] border-[color:var(--primary-color)] m-[2vw] border-2 border-solid"
            width={2208}
            height={2944}
          />
        </section>
      </div>
    </main>
  );
}
