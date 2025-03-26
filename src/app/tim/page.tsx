'use client'

import TimSkills from "@/app/SVGs/TimSkills.svg"
import { useState } from "react";
import axios from 'axios';
import { useModal } from "@/app/context/modalContext";
//import GitHub from 'github-api';
import '@/app/CSS/profile.modules.css'
import '../welcome.modules.css'

export default function TimProfile() {
  const { toggleModal, updateModal } = useModal();

  const [downloadStatus, setDownloadStatus] = useState<string>("");
  const downloadResume = async (fileName: string) => {
    try {
        const response = await axios.get(`/api/download?file=${fileName}`, {
            responseType: "blob", // Important for binary data
        });

        // Extract filename from content-disposition header
        const contentDisposition = response.headers["content-disposition"];
        const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
        const downloadedFileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile.pdf";

        // Create a temporary anchor element to trigger the download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        // Setting filename received in response
        link.setAttribute("download", downloadedFileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadStatus("Downloaded");
      } catch (error) {
          console.error("Error downloading file:", error);
          setDownloadStatus("Error downloading");
    }
  };


  return (
    <main className="text-[color:var(--primary-font)] font-Ununtu">
      <div id='section_1' className="section">
        <section className="center profile">
        <img src="/Tim.jpg" alt="Tim" className="profile_picture" />
          <div>
            <h1 className='main_title'>About Tim</h1>
            <br></br>
            <p>I am an IT professional with experience in technical support, front-end development, and a passion for cybersecurity.
              During my time at university I worked as a call technician for 2 years providing technical support and troubleshooting.
              While at this job I was eventually moved to the development team where I gained experience with HTML, CSS, and JavaScript.
            </p>
          </div>
          <div id="main_title_buttons">
            <button className="main_button" onClick={() => updateModal(true)}>Contact</button>
            <button className='main_button' onClick={() => downloadResume("timResume.pdf")}>Resume</button>
          </div>
        </section>
      </div>
      <div id='section_2' className="section odd_section">
      <section className="center">
        <TimSkills className='skills'></TimSkills>
      </section>
    </div>
      <div id='section_3' className="section">
        <section className="center profile">
          <div>
            <h3>Certifications</h3>
            <div className='cert_wrapper'>
              <div 
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="e83dab79-d868-479e-a72c-723389c90e71"
                data-share-badge-host="https://www.credly.com">
              </div>
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="8cca42a5-18fb-497f-b67e-31f1915a50c3" 
                data-share-badge-host="https://www.credly.com">
              </div>
              <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </div>
          </div>
        </section>
      </div>
      {/* <div id='section_4' className="section odd_section">
        <section className="center profile">
          <div><h3>Projects</h3></div>
        </section>
      </div> */}
    </main>
  )
}
