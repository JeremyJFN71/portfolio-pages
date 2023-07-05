import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

import ModalImage from '../components/ModalImage';

export default function ProjectEdit() {
    const [project, setProject] = useState({});
    // Submit button
    const [isLoading, setIsLoading] = useState(false);
    // Modal Image src
    const [image, setImage] = useState('');

    // Field
    const [selectedImage, setSelectedImage] = useState('');
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [description, setDescription] = useState('');
    const [demoUrl, setDemoUrl] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get(`/api/projects/${id}`)
            .then(res=>{
                setProject(res.data);
                setName(res.data.name);
                setLanguage(res.data.language);
                setDescription(res.data.description);
                setDemoUrl(res.data.demo_url);
            })
            .catch(err=>console.log(err.response));
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        if(selectedImage){
            formData.append('image', selectedImage);
        }
        formData.append('name', name);
        formData.append('language', language);
        formData.append('description', description);
        formData.append('demo_url', demoUrl);

        await axios.patch(`/api/projects/${project._id}/update`, formData)
            .then(()=>navigate('/admin/project'))
            .catch(err=>console.log(err.response))
            .finally(()=>setIsLoading(false));
    }

    const changeImage = (e)=>{
        if(e.target.files[0]){
            setSelectedImage(e.target.files[0]);
        } else{
            setSelectedImage('');
        }
    }

    return (
        <>
            <div className='tertiary' style={{borderRadius: '10px'}} data-aos="fade-up">
                <div className='d-flex align-items-center justify-content-between py-3 px-2' style={{borderRadius: '10px', boxShadow: '0px 10px 10px 2px #0b192f', position: 'relative'}}>
                    <h3 className='m-0 text-center' style={{position: 'absolute', right: '25%', left: '25%'}}>Edit Project</h3>
                    <Link to='/admin/project' className="cool-btn-dark"><i className="fa-solid fa-arrow-left"></i></Link>
                </div>

                <form className='mt-3 p-4' method="POST" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">

                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className='font-primary mb-2 fs-5'>Current Image:</div>
                                    <div style={{width: '100%', overflow: 'hidden', borderRadius: '5px'}}>
                                        <img className='project-image img-fluid' src={project.image} alt="" data-bs-toggle="modal" data-bs-target="#imageModal" onClick={()=>setImage(project.image)} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className='font-primary mb-2 fs-5'>Change Image:</div>
                                    {!selectedImage ? (
                                    <label htmlFor='image' className='upload'>
                                        <span>
                                            <i class="fa-solid fa-cloud-arrow-up text-white"></i>
                                            <div className='fs-2'>Upload Image</div>
                                        </span>
                                    </label>
                                    ) : (
                                    <label htmlFor='image' className='' style={{width: '100%', overflow: 'hidden', borderRadius: '5px'}}>
                                        <img className='project-image img-fluid' src={URL.createObjectURL(selectedImage)} alt="" />
                                    </label>
                                    )}
                                    <input type="file" id="image" accept="image/*" onChange={changeImage} hidden />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col mb-3">
                                            <label className='font-primary mb-2' htmlFor="fullname">Full Name</label>
                                            <input className='form-control input-theme' type="text" id="fullname" defaultValue={project.full_name} disabled />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col pe-2 mb-3 mb-md-0">
                                            <label className='font-primary mb-2' htmlFor="name">Name</label>
                                            <input className='form-control input-theme' type="text" id="name" defaultValue={project.name} onChange={(e)=>setName(e.target.value)} required />
                                        </div>

                                        <div className="col ps-2">
                                            <label className='font-primary mb-2' htmlFor="language">Language</label>
                                            <input className='form-control input-theme' type="text" id="language" defaultValue={project.language} onChange={(e)=>setLanguage(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="colm mb-3">
                                            <label className='font-primary mb-2' htmlFor="description">Description</label>
                                            <input className='form-control input-theme' type="text" id="description" defaultValue={project.description} onChange={(e)=>setDescription(e.target.value)} style={{border: '1px solid transparent'}} required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label className='font-primary mb-2' htmlFor="demo_url">Demo URL</label>
                                            <input className='form-control input-theme' type="text" id="demo_url" defaultValue={project.demo_url} onChange={(e)=>setDemoUrl(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-end mt-3">
                                    {!isLoading ? (
                                    <button type="submit" className='btn-theme-primary'>Update</button>) : (
                                    <button type="submit" className='btn-theme-primary' disabled>Updating...</button>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                </form>
            </div>

            <ModalImage image={image} />
        </>
    )
}
