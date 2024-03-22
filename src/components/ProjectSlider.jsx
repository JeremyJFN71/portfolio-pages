import Slider from "react-slick";

// import ModalImage from "./ModalImage";

export default function ProjectSlider({ projects }) {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      rows: 2,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 750,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               rows: 1,
            },
         },
      ],
   };

   return (
      <>
         <Slider {...settings}>
            {projects.map((project, index) => {
               return (
                  <div
                     key={index}
                     className="p-3 text-center"
                     data-aos="fade-up"
                  >
                     {/* <div className="tag d-flex gap-1">
                                {project.language && (
                                <span className="tag-item text-white">
                                    <i className="fa-solid fa-code text-white"></i> {project.language}
                                </span>)}
                                {project.owner!=='JeremyJFN71' && (
                                <span className="tag-item text-white">
                                    <i className="fa-solid fa-user-group text-white"></i> Contributor
                                </span>)}
                            </div> */}

                     <div
                        className="hover-image-container"
                        style={{ aspectRatio: "2/1" }}
                     >
                        <img
                           src={project.image}
                           alt=""
                           className="project-image img-fluid"
                        />

                        <div className="tertiary project-detail-container">
                           <div className="project-detail p-3 pt-4">
                              <h5 className="fw-bold font-primary">
                                 {project.name}
                              </h5>
                              <p className="my-4 font-secondary">
                                 {project.description}
                              </p>

                              <div className="d-flex justify-content-center gap-3">
                                 <a
                                    href={project.html_url}
                                    className="btn-theme-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    <i className="fa-solid fa-share-from-square"></i>{" "}
                                    Detail
                                 </a>
                                 {project.demo_url && (
                                    <a
                                       href={project.demo_url}
                                       className="btn-theme-secondary"
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                       <i className="fa-solid fa-eye"></i> Demo
                                    </a>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </Slider>

         {/* <ModalImage image={image} /> */}
      </>
   );
}
