import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);

        const data = {email, password}

        await axios.post('/api/admin/login', data)
            .then(()=>{
                return navigate('/admin/project');
            })
            .catch(err=>{
                console.log(err.response);
                setPassword('');
            })
            .finally(()=>setIsLoading(false));
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{height: "80vh"}}>
                <div className="col-xl-4 col-lg-5 col-md-7 col-sm-8 col-11 tertiary p-3" style={{borderRadius: "10px"}} >
                    <div className="mb-5" style={{position: 'relative'}}>
                        <div className="d-flex align-items-center" style={{position: "absolute", top: '0', bottom: '0'}}>
                            <Link to="/" className="cool-btn-dark my-auto">
                                <i className="fa-solid fa-arrow-left fs-5 font-secondary"></i>
                            </Link>
                        </div>
                        <h1 className="font-primary fw-bold text-center">Admin</h1>
                    </div>
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label font-secondary">Email</label>
                            <input type="email" id="email" className="form-control input-theme" onChange={(e)=>setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label font-secondary">Password</label>
                            <input type="password" id="password" className="form-control input-theme" onChange={(e)=>setPassword(e.target.value)} value={password} />
                        </div>
                        {!isLoading ? (
                        <button type="submit" className="btn-theme-primary w-100">Log In</button>) : (
                        <button type="submit" className="btn-theme-primary w-100" disabled>Logging In...</button>)
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
