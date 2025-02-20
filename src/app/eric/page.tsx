'use client'

import { useState } from "react";
import axios from 'axios';
import { useModal } from "@/app/context/modalContext";
import EricSkills from "@/app/SVGs/EricSkills.svg"
import '@/app/CSS/profile.modules.css'
import "../welcome.modules.css"

export default function EricProfile() {
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
            <button className="main_button" onClick={() => updateModal(true)}>Contact</button>
            <button className='main_button' onClick={() => downloadResume("ericResume.pdf")}>Resume</button>
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
