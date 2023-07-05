import { useEffect, useState } from "react";
import axios from 'axios';

import ProjectTable from "../components/ProjectTable";
import Error from '../components/Error';

export default function AdminProject() {
    const [projects, setProjects] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetchData();
    }, [])

    async function fetchData(){
        await axios.get('/api/projects?sort=createdAt&direction=desc')
            .then(res=>{
                setProjects(res.data)
            })
            .catch(err=>{
                setIsError(true);
                console.log(err.response);
            })
    }

    const handleSync = async ()=>{
        setIsLoading(true);
        
        await axios.get('/api/projects/sync')
            .then(res=>{
                fetchData();
                alert(res.data.message);
            })
            .catch(err=>console.log(err.response))
            .finally(()=>setIsLoading(false));
    }

    let content = (isError ? <Error /> : <ProjectTable projects={projects}/>);

    return (
        <>
            <h1 className="fw-bold font-primary" data-aos="fade-right">PROJECT</h1>
            <div className="d-flex mb-4 justify-content-end" data-aos="fade-left">
                {!isLoading ? (
                <button className="btn-theme-primary" onClick={handleSync}><i className="fa-solid fa-rotate"></i> Sync</button>) : (
                <button className="btn-theme-primary" disabled><i className="fa-solid fa-rotate loading"></i> Syncing...</button>)}
            </div>
            {content}
        </>
    )
}