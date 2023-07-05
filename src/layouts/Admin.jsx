import { useNavigate, NavLink, Link, useOutlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Admin() {
    const [active, setActive] = useState(false);

    const outlet = useOutlet();
    const navigate = useNavigate();

    useEffect(()=>{
        // Create a condition that targets viewports at least 768px wide
        const mediaQuery = window.matchMedia('(max-width: 900px)');

        function handleTabletChange(e) {
            // Check if the media query is true
            if (e.matches) {
                setActive(false);
            } else{
                setActive(true);
            }
        }

        // Register event listener
        mediaQuery.addListener(handleTabletChange);

        // Initial check
        handleTabletChange(mediaQuery);
    }, []);

    const logout = async ()=>{
        await axios.post('/api/admin/logout')
            .then((res)=>{
                console.log(res.data);
                navigate('/admin/login');
            })
            .catch((err)=>{
                console.log(err.response);
            });
    }

    return (
        <>
            <div className={`sidebar fixed-top py-3 ${active ? "active" : ""}`}>

                <div className="px-3 mb-4">
                    <div className="admin d-flex align-items-center mb-2">
                        <h4 className='text text-center m-0'>Admin</h4>
                        <span className="cool-btn-dark" onClick={()=>setActive(!active)}>
                            <i className="fa-solid fa-bars font-primary" id="button"></i>
                        </span>
                    </div>
                    <hr className="m-0" />
                </div>

                <ul className='sidebar-link text-center px-2'>
                    <li className="sidebar-link-item" title="Project">
                        <NavLink to="/admin/project">
                            <i className="fa-solid fa-bars-progress"></i>
                            <span className="text">Project</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-link-item" title="Email">
                        <NavLink to="/admin/email">
                            <i className="fa-solid fa-envelope"></i>
                            <span className="text">Email</span>
                        </NavLink>
                    </li>
                </ul>

                <div className="sidebar-footer px-2">
                    <button className="cool-btn-dark logout" onClick={logout} title="Log Out">
                        <i className="fa-solid fa-right-from-bracket" style={{transform: 'scaleX(-1)', fontSize: '17.5px'}}></i>
                    </button>
                    <div className="text" style={{height: '36px', borderLeft: '1px solid white'}}></div>
                    <div className="text portfolio-link ms-2">
                        <Link to='/' className="underline-hover" target='_blank'>
                            <span className="me-2">Go to Portfolio</span>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="backdrop" onClick={()=>setActive(false)}></div>
            <div className="content py-5">
                <div className="container">
                    {outlet}
                </div>
            </div>
        </>
    )
}
