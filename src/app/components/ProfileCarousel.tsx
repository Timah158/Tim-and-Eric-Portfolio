// import React,{ useState, useEffect } from 'react';
// import { Amplify } from 'aws-amplify';
// import config from './aws-exports.js';
// import { generateClient } from "aws-amplify/api";
// import { createProject } from './graphql/mutations';

// Amplify.configure(config);
// const client = generateClient()

// function ProfileCarousel({props}) {
//   const [Page, setPage] = useState(0);
//   function updatePage (num) {
//     if (num === 1) {
//       setPage(Page + 1)
//     }
//     else if (num === -1) {
//       setPage(Page - 1)
//     }
//   }

//   const [projects, setProjects] = useState([]);
//   useEffect(() => { fetchProjects(Page) });

//   async function fetchProjects(newPage) {
//     const apiData = await DataStore.query(Project, c => c.createdBy.eq(props.user), {
//       sort: s => s.createdOn("DESCENDING"),
//       page: newPage,
//       limit: 3
//     });
//     const projectsFromAPI = apiData;
//     setProjects(projectsFromAPI);
//   }

//   function showProject(project) {
//     props.props.setProjectModal(true);
//     props.props.setNavigation({
//       modal: {
//         element: "projectModal"
//       }});
//   }

//     return (
//       <div id='section_3' className="section">
//         <section className="projectSection">
//           <div id="carouselWrapper">
//             <h3>Projects</h3>
//             <div className="projectsCarousel">
//               {projects.map((project) => (
//               <div
//               className="carouselElement"
//               key={project.id}
//               onClick={() => showProject(project)}
//               >
//                 <div className="projectTitle">{project.title}</div>
//                 <div className="projectDescription">{project.description}</div>
//               </div>))}
//             </div>
//             <div className="carouselPagination">
//               <button className="carouselButton" onClick={()=> updatePage(-1)}>&#60;</button>
//               <button className="carouselButton" onClick={()=> setPage(0)}>1</button>
//               <button className="carouselButton" onClick={()=> setPage(1)}>2</button>
//               <button className="carouselButton" onClick={()=> updatePage(1)}>&#62;</button>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }

//   export default ProfileCarousel;