import { useEffect, useState } from "react";

import ProjectTable from "../../components/ProjectTable";
import Error from "../../components/Error";
import { getAllProjects, syncProjects } from "../../services/projectService";

export default function AdminProject() {
   const [projects, setProjects] = useState([]);
   const [searchedProjects, setSearchedProjects] = useState([]);
   const [isError, setIsError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      fetchData();
   }, []);

   async function fetchData() {
      setIsLoading(true);
      const { data, error } = await getAllProjects();

      if (data) {
         setProjects(data.data);
         setSearchedProjects(data.data);
      }

      if (error) setIsError(true);

      setIsLoading(false);
   }

   const handleSync = async () => {
      setIsLoading(true);

      const { data } = await syncProjects();
      if (data) {
         fetchData();
         alert(res.data.message);
      }

      setIsLoading(false);
   };

   const handleSearch = (search) => {
      let re = new RegExp(search, "i");
      setSearchedProjects(projects.filter((p) => p.name.match(re)));
   };

   let content = isError ? (
      <Error />
   ) : (
      <ProjectTable projects={searchedProjects} />
   );

   return (
      <>
         <h1 className="fw-bold font-primary" data-aos="fade-right">
            PROJECT
         </h1>
         <div className="d-flex my-4 justify-content-between">
            <div className="position-relative" data-aos="fade-right">
               <label
                  htmlFor="search"
                  className="position-absolute top-50"
                  style={{ left: "15px", translate: "0 -50%" }}
               >
                  <i
                     className="fa-solid fa-magnifying-glass text-secondary"
                     style={{ fontSize: "15px" }}
                  ></i>
               </label>
               <input
                  type="search"
                  id="search"
                  className="input-search ps-5"
                  placeholder="Search..."
                  onChange={(e) => handleSearch(e.target.value)}
               />
            </div>
            {!isLoading ? (
               <button
                  className="btn-theme-primary"
                  onClick={handleSync}
                  data-aos="fade-left"
               >
                  <i className="fa-solid fa-rotate"></i> Sync
               </button>
            ) : (
               <button
                  className="btn-theme-primary"
                  disabled
                  data-aos="fade-left"
               >
                  <i className="fa-solid fa-rotate loading"></i> Syncing...
               </button>
            )}
         </div>
         {content}
      </>
   );
}
