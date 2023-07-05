import { useState } from "react"
import axios from "axios"

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        const data = {name, email, subject, message}

        await axios.post('api/emails', data)
            .then(()=>{
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            })
            .catch(err=>{
                console.log(err.response)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <span className="text-center d-block fw-bold font-primary" data-aos="fade-up">CONTACT</span>
                    <h1 className="text-center mb-5 fw-bold font-secondary" data-aos="fade-up">Reach Me</h1>
                    <div className="col-lg-7 col-md-10 mx-auto" data-aos="fade-up">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="mb-2 col-md-6">
                                <label htmlFor="name" className="form-label font-secondary">Name</label>
                                <input type="text" className="form-control input-theme" id="name" onChange={(e)=>setName(e.target.value)} value={name} />
                            </div>
                            <div className="mb-2 col-md-6">
                                <label htmlFor="email" className="form-label font-secondary">Email</label>
                                <input type="email" className="form-control input-theme" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="mb-2 col-12">
                                <label htmlFor="subject" className="form-label font-secondary">Subject</label>
                                <input type="text" className="form-control input-theme" id="subject" onChange={(e)=>setSubject(e.target.value)} value={subject} />
                            </div>
                            <div className="mb-2 col-12">
                                <label htmlFor="message" className="form-label font-secondary">Message</label>
                                <textarea className="form-control input-theme" id="message" rows={5} onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                            </div>

                            <div className="col-12 mt-3">
                                {!isLoading ? (
                                <button type="submit" className="btn-theme-primary w-100">Submit</button>) : (
                                <button type="submit" className="btn-theme-primary w-100" disabled>Submitting...</button>)}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
