import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import ModalImage from "../../components/ModalImage";
import {
   getDetailProject,
   syncOneProject,
   updateProject,
} from "../../services/projectService";

export default function ProjectEdit() {
   const [project, setProject] = useState({});
   // Submit button
   const [isLoading, setIsLoading] = useState(false);
   // Reset Button
   const [resetIsLoading, setResetIsLoading] = useState(false);
   // Modal Image src
   const [image, setImage] = useState("");

   // Field
   const [selectedImage, setSelectedImage] = useState("");
   const [name, setName] = useState("");
   const [language, setLanguage] = useState("");
   const [description, setDescription] = useState("");
   const [demoUrl, setDemoUrl] = useState("");

   const { id } = useParams();
   const navigate = useNavigate();

   const modal = document.querySelector("#resetModal");

   useEffect(() => {
      const fetchData = async () => {
         const { data } = await getDetailProject(id);
         if (data) {
            setProject(data.data);
            setName(data.data.name);
            setLanguage(data.data.language);
            setDescription(data.data.description);
            setDemoUrl(data.data.demo_url || "");
         }
      };

      fetchData();
   }, [id]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData();
      if (selectedImage) {
         formData.append("image", selectedImage);
      }
      formData.append("name", name);
      formData.append("language", language);
      formData.append("description", description);
      formData.append("demo_url", demoUrl);

      const { data } = await updateProject(project._id, formData);
      if (data) navigate("/admin/project");
      setIsLoading(false);
   };

   const changeImage = (e) => {
      if (e.target.files[0]) {
         setSelectedImage(e.target.files[0]);
      } else {
         setSelectedImage("");
      }
   };

   const resetProject = async () => {
      setResetIsLoading(true);

      const { data } = await syncOneProject(project._id, {
         full_name: project.full_name,
      });

      if (data) {
         const modalInstance = window.bootstrap.Modal.getInstance(modal);
         modalInstance.hide();
         navigate("/admin/project");
      }

      setResetIsLoading(false)
   };

   return (
      <>
         <div
            className="tertiary"
            style={{ borderRadius: "10px" }}
            data-aos="fade-up"
         >
            <div
               className="d-flex align-items-center justify-content-between py-3 px-2"
               style={{
                  borderRadius: "10px",
                  boxShadow: "0px 10px 10px 2px #0b192f",
                  position: "relative",
               }}
            >
               <Link to="/admin/project" className="cool-btn-dark">
                  <i className="fa-solid fa-arrow-left"></i>
               </Link>
               <h3 className="m-0">Edit Project</h3>
               <span
                  className="cool-btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#resetModal"
               >
                  <i className="fa-sharp fa-solid fa-rotate-left"></i>
               </span>
            </div>

            <form className="mt-3 p-4" method="POST" onSubmit={handleSubmit}>
               <div className="row">
                  <div className="col">
                     <div className="row mb-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                           <div className="font-primary mb-2 fs-5">
                              Current Image:
                           </div>
                           <div
                              style={{
                                 width: "100%",
                                 overflow: "hidden",
                                 borderRadius: "5px",
                              }}
                           >
                              <img
                                 className="project-image img-fluid"
                                 src={project.image}
                                 alt=""
                                 data-bs-toggle="modal"
                                 data-bs-target="#imageModal"
                                 onClick={() => setImage(project.image)}
                              />
                           </div>
                        </div>

                        <div className="col-md-6">
                           <div className="font-primary mb-2 fs-5">
                              Change Image:
                           </div>
                           {!selectedImage ? (
                              <label htmlFor="image" className="upload">
                                 <span>
                                    <i className="fa-solid fa-cloud-arrow-up text-white"></i>
                                    <div className="fs-2">Upload Image</div>
                                 </span>
                              </label>
                           ) : (
                              <label
                                 htmlFor="image"
                                 className=""
                                 style={{
                                    width: "100%",
                                    overflow: "hidden",
                                    borderRadius: "5px",
                                 }}
                              >
                                 <img
                                    className="project-image img-fluid"
                                    src={URL.createObjectURL(selectedImage)}
                                    alt=""
                                 />
                              </label>
                           )}
                           <input
                              type="file"
                              id="image"
                              accept="image/*"
                              onChange={changeImage}
                              hidden
                           />
                        </div>
                     </div>

                     <div className="row mb-3">
                        <div className="col-md-6">
                           <div className="row">
                              <div className="col mb-3">
                                 <label
                                    className="font-primary mb-2"
                                    htmlFor="fullname"
                                 >
                                    Full Name
                                 </label>
                                 <input
                                    className="form-control input-theme"
                                    type="text"
                                    id="fullname"
                                    defaultValue={project.full_name}
                                    disabled
                                 />
                              </div>
                           </div>

                           <div className="row">
                              <div className="col pe-2 mb-3 mb-md-0">
                                 <label
                                    className="font-primary mb-2"
                                    htmlFor="name"
                                 >
                                    Name
                                 </label>
                                 <input
                                    className="form-control input-theme"
                                    type="text"
                                    id="name"
                                    defaultValue={project.name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                 />
                              </div>

                              <div className="col ps-2">
                                 <label
                                    className="font-primary mb-2"
                                    htmlFor="language"
                                 >
                                    Language
                                 </label>
                                 <input
                                    className="form-control input-theme"
                                    type="text"
                                    id="language"
                                    defaultValue={project.language}
                                    onChange={(e) =>
                                       setLanguage(e.target.value)
                                    }
                                 />
                              </div>
                           </div>
                        </div>

                        <div className="col-md-6">
                           <div className="row">
                              <div className="colm mb-3">
                                 <label
                                    className="font-primary mb-2"
                                    htmlFor="description"
                                 >
                                    Description
                                 </label>
                                 <input
                                    className="form-control input-theme"
                                    type="text"
                                    id="description"
                                    defaultValue={project.description}
                                    onChange={(e) =>
                                       setDescription(e.target.value)
                                    }
                                    style={{ border: "1px solid transparent" }}
                                    required
                                 />
                              </div>
                           </div>

                           <div className="row">
                              <div className="col">
                                 <label
                                    className="font-primary mb-2"
                                    htmlFor="demo_url"
                                 >
                                    Demo URL
                                 </label>
                                 <input
                                    className="form-control input-theme"
                                    type="text"
                                    id="demo_url"
                                    defaultValue={project.demo_url}
                                    onChange={(e) => setDemoUrl(e.target.value)}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col text-end mt-3">
                           {!isLoading ? (
                              <button
                                 type="submit"
                                 className="btn-theme-primary"
                              >
                                 Update
                              </button>
                           ) : (
                              <button
                                 type="submit"
                                 className="btn-theme-primary"
                                 disabled
                              >
                                 Updating...
                              </button>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>

         <ModalImage image={image} />

         {/* Reset Modal */}
         <div
            className="modal fade"
            id="resetModal"
            tabIndex="-1"
            aria-hidden="true"
         >
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content tertiary">
                  <div className="modal-header" data-bs-theme="dark">
                     <h1 className="modal-title fs-5 ">Reset Project</h1>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div className="modal-body ">
                     Are you sure want to reset{" "}
                     <b className="">{project.name}</b>?
                     <div className="mt-5 d-flex gap-2 justify-content-end">
                        <button
                           type="button"
                           className="btn btn-cancel"
                           data-bs-dismiss="modal"
                        >
                           Cancel
                        </button>
                        {!resetIsLoading ? (
                           <button
                              type="button"
                              className="btn btn-danger"
                              onClick={resetProject}
                           >
                              Reset
                           </button>
                        ) : (
                           <button
                              type="button"
                              className="btn btn-danger"
                              disabled
                           >
                              Reseting...
                           </button>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
