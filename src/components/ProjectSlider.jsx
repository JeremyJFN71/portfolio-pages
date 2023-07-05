import Slider from "react-slick";
import { useState } from "react";

import ModalImage from "./ModalImage";

export default function ProjectSlider({projects}) {
    const [image, setImage] = useState('');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            },
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {projects.map((project, index)=>{
                    return (
                        <div key={index} className="p-2 text-center" data-aos="fade-up">
                            <div className="card primary border-0" style={{height: '350px'}}>

                                <div className="tag d-flex gap-1">
                                    {project.language && (
                                    <span className="tag-item text-white">
                                        <i className="fa-solid fa-code text-white"></i> {project.language}
                                    </span>)}
                                    {project.owner!=='JeremyJFN71' && (
                                    <span className="tag-item text-white">
                                        <i className="fa-solid fa-user-group text-white"></i> Contributor
                                    </span>)}
                                </div>

                                <div style={{overflow: "hidden"}}>
                                    <img src={project.image} alt="" className="project-image img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal" onClick={()=>setImage(project.image)} />
                                </div>
                                <div className="card-body">
                                    <h5 className="fw-bold font-primary">{project.name}</h5>
                                    <p className="m-0 font-secondary">{project.description}</p>
                                </div>
                                <div className="d-flex px-2 pb-2 gap-2 align-items-center">
                                    <a href={project.html_url} className="btn-theme-primary w-100" target="_blank" rel="noreferrer">Detail</a>
                                    {project.demo_url && (
                                    <a href={project.demo_url} className="btn-theme-secondary w-100" target="_blank" rel="noreferrer">Demo</a>)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>

            <ModalImage image={image} />
        </>
    )
}
