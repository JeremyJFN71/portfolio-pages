import { useEffect, useState } from "react";
import SliderLoading from "../SliderLoading";
import Error from "../Error";
import ProjectSlider from "../ProjectSlider";
import { showProjects } from "../../services/projectService";

export default function Project() {
   const [projects, setProjects] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      async function fetchData() {
         const { data, error } = await showProjects();

         if (data) setProjects(data.data);
         if (error) setIsError(true);
         setIsLoading(false);
      }

      fetchData();
   }, []);

   let content;
   if (isLoading) {
      content = <SliderLoading />;
   } else if (isError) {
      content = <Error />;
   } else {
      content = <ProjectSlider projects={projects} />;
   }

   return (
      <section id="project">
         <div className="container">
            <span
               className="text-center d-block fw-bold font-primary"
               data-aos="fade-up"
            >
               PROJECT
            </span>
            <h1
               className="text-center mb-5 fw-bold font-secondary"
               data-aos="fade-up"
            >
               My Best Projects
            </h1>

            {content}
         </div>
      </section>
   );
}
