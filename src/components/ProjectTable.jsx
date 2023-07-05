import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ModalImage from './ModalImage';

export default function ProjectTable({projects}) {
    const [image, setImage] = useState('');
    const [enable, setEnable] = useState([]);

    useEffect(()=>{
        let enables = [];
        for(let item of projects){
            enables.push(item.enable);
        }
        setEnable(enables);
    }, [projects])

    const changeEnable = async (index, id)=>{
        enable[index] = !enable[index];
        const data = {enable: enable[index]};

        await axios.patch(`/api/projects/${id}/update`, data)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));
    }

    return (
        <div className='table-wrapper'>
            <table className="table primary">
                <thead>
                    <tr className="text-center tertiary">
                        <th className='font-primary' scope="col">#</th>
                        <th className='font-primary' scope="col">Name</th>
                        <th className='font-primary' scope="col">Image</th>
                        <th className='font-primary' scope="col">Owner</th>
                        <th className='font-primary' scope="col">Description</th>
                        <th className='font-primary' scope="col">Language</th>
                        <th className='font-primary' scope="col">Enable</th>
                        <th className='font-primary' scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index)=>(
                        <tr key={project._id} className="text-center">
                            <td className='font-secondary'>{index+1}</td>
                            <td><a href={project.html_url} className="underline-hover font-secondary" target='_blank' rel="noreferrer">{project.name}</a></td>
                            <td><img src={project.image} alt="" className="project-image" style={{maxHeight: '100px', borderRadius: '5px', width: 'auto'}} data-bs-toggle="modal" data-bs-target="#imageModal" onClick={()=>setImage(project.image)} /></td>
                            <td className='font-secondary'>{project.owner}</td>
                            <td className='font-secondary'>{project.description}</td>
                            <td className='font-secondary'>{project.language || '-'}</td>
                            <td>
                                <div className='form-switch'>
                                    <input type="checkbox" className='form-check-input' role='switch' defaultChecked={project.enable} onChange={()=>changeEnable(index, project._id)} style={{cursor: 'pointer'}} />
                                </div>
                            </td>
                            <td style={{width: '0%'}}>
                                <Link to={`/admin/project/${project._id}/edit`} className='cool-btn-dark'>
                                    <i className="fa-solid fa-pen-to-square font-secondary"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalImage image={image} />
        </div>
    )
}
