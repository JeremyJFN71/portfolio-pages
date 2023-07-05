import { useEffect, useState } from "react";
import axios from "axios";

import SliderLoading from "../SliderLoading";
import Error from "../Error";
import ProjectSlider from "../ProjectSlider";

export default function Project() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            await axios.get('/api/projects/show?sort=createdAt&direction=desc')
                .then(res=>{
                    setProjects(res.data)
                })
                .catch(()=>{
                    setIsError(true);
                })
                .finally(()=>{
                    setIsLoading(false);
                })
        }

        fetchData();
    }, [])

    let content;
    if (isLoading){
        content = <SliderLoading />
    } else if(isError){
        content = <Error />
    } else{
        content = <ProjectSlider projects={projects}/>
    }

    return (
        <section id="project">
            <div className="container">
                <span className="text-center d-block fw-bold font-primary" data-aos="fade-up">PROJECT</span>
                <h1 className="text-center mb-5 fw-bold font-secondary" data-aos="fade-up">My Best Projects</h1>

                {content}

            </div>
        </section>
    )
}
