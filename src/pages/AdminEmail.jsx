import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';

import Error from '../components/Error';

export default function AdminEmail() {
    const [emails, setEmails] = useState([]);
    const [length, setLength] = useState(0);
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [deleting, setDeleting] = useState([]);

    const myModal = document.querySelector('#deleteModal');

    useEffect(()=>{
        fetchData();
    }, []);

    async function fetchData(){
        await axios.get('/api/emails?sort=createdAt&direction=desc')
            .then(res=>{
                if(res.data<1){
                    setIsEmpty(true);
                }
                setEmails(res.data);
                setLength(res.data.length);
            })
            .catch(err=>{
                setIsError(true);
                console.log(err.response);
            });
    }

    const deleteOne = async (id)=>{
        setDeleting([...deleting, id]);

        setLength(l=>{
            if(l-1===0){
                setIsEmpty(true);
            }
            return (l-1)
        });
        await axios.delete(`/api/emails/${id}`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err.response));
    }

    const deleteAll = async ()=>{
        setIsLoading(true);
        await axios.delete(`/api/emails`)
            .then(()=>{
                const modal = window.bootstrap.Modal.getInstance(myModal);
                modal.hide();
                setEmails([]);
                setLength(0)
            })
            .catch(err=>console.log(err.response))
            .finally(()=>setIsLoading(false));
    }

    return (
        <>
            <h1 className="fw-bold font-primary mb-3" data-aos="fade-right">EMAIL</h1>
            {isError ? <Error /> : (
                <>
                    <div className="d-flex mb-4 justify-content-between align-items-center px-3 py-2 tertiary" style={{borderRadius: '10px'}} data-aos="fade-up">
                        <span className="font-secondary">There are {length} Emails</span>
                        <span className="cool-btn-dark py-2 px-3" style={{aspectRatio: 'unset', borderRadius: '20px'}} data-bs-toggle="modal" data-bs-target="#deleteModal">
                            <span className="text-danger text-end" style={{cursor: 'pointer'}}>Delete All</span>
                        </span>
                    </div>

                    {isEmpty && (
                        <div className="d-flex justify-content-center mt-5" style={{position: 'absolute', right: '25%', left: '25%'}}>
                            <h1 className="font-primary text-center">No Emails</h1>
                        </div>
                    )}

                    {emails.map(email=>(
                        <div key={email._id} className={`${deleting.includes(email._id) ? 'deleting' : 'show-email'}`}>
                            <hr className="m-0 mb-1" />
                            <div className="email-container mb-1 d-flex justify-content-start align-items-center">
                                <Link to={`/admin/email/${email._id}`} className="w-100 p-3 d-flex justify-content-between">
                                    <div>
                                        <p className="font-primary m-0">{email.name}</p>
                                        <p className="font-secondary m-0" style={{fontSize: '12px'}}>{email.subject}</p>
                                        <p className="font-secondary m-0" style={{fontSize: '12px'}}>{email.message}</p>
                                    </div>
                                </Link>
                                <div style={{position: 'absolute', right: '10px', top: '10px'}}>
                                    <p className="font-secondary m-0 text-end" style={{fontSize: '12px'}}>{moment(email.createdAt).format('HH:mm, MMMM Do')}</p>
                                </div>
                                <div style={{position: 'absolute', right: '10px', bottom: '10px'}} onClick={()=>deleteOne(email._id)}>
                                    <span className="cool-btn-dark">
                                        <i className="fa-solid fa-trash text-danger"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Delete Modal */}
                    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content tertiary">
                                <div className="modal-header" data-bs-theme="dark">
                                    <h1 className="modal-title fs-5 ">Delete Emails</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body ">
                                    Are you sure want to delete <b className="">All</b>?
                                    <div className="mt-5 d-flex gap-2 justify-content-end">
                                        <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                                        {!isLoading ? (
                                        <button type="button" className="btn btn-danger" onClick={deleteAll}>Delete</button> ) : (
                                        <button type="button" className="btn btn-danger" disabled>Deleting...</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}