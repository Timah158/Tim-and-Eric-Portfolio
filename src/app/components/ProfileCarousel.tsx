import React, { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";

interface Project {
  id: string;
  title: string;
  description: string;
}

interface ProfileCarouselProps {}

const ProfileCarousel: React.FC<ProfileCarouselProps> = () => {
  const [page, setPage] = useState<number>(0);
  const [projects, setProjects] = useState<Project[]>([]);

  const updatePage = (num: number) => {
    setPage(prev => prev + num);
  };

  useEffect(() => {
    // Replace this mock data with your real data fetching logic
    const mockProjects: Project[] = [
      { id: '1', title: 'Project One', description: 'Description one' },
      { id: '2', title: 'Project Two', description: 'Description two' },
      { id: '3', title: 'Project Three', description: 'Description three' },
      { id: '4', title: 'Project Four', description: 'Description four' },
      { id: '5', title: 'Project Five', description: 'Description five' },
      { id: '6', title: 'Project Six', description: 'Description six' },
    ];

    const start = page * 3;
    const end = start + 3;
    setProjects(mockProjects.slice(start, end));
  }, [page]);

  return (
    <div id='section_3' className="section">
      <section className="projectSection">
        <div id="carouselWrapper">
          <h3>Projects</h3>
          <div className="projectsCarousel">
            {projects.map((project) => (
              <div
                className="carouselElement"
                key={project.id}
              >
                <div className="projectTitle">{project.title}</div>
                <div className="projectDescription">{project.description}</div>
              </div>
            ))}
          </div>
          <div className="carouselPagination">
            <Button className="carouselButton" onClick={() => updatePage(-1)}>&#60;</Button>
            <Button className="carouselButton" onClick={() => setPage(0)}>1</Button>
            <Button className="carouselButton" onClick={() => setPage(1)}>2</Button>
            <Button className="carouselButton" onClick={() => updatePage(1)}>&#62;</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCarousel;
