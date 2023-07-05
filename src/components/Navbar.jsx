import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(30);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 800;

        if (!(backgroundTransparacyVar <= 0.8)) {
            backgroundTransparacyVar = 0.8;
        }

        let paddingVar = 25 - backgroundTransparacyVar * 20;
        let boxShadowVar = backgroundTransparacyVar;
        setBackgroundTransparacy(backgroundTransparacyVar);
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
    }, [clientWindowHeight]);

    useEffect(()=>{
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, [])

    return (
        <nav  className="navbar navbar-expand-lg fixed-top navbar-light" style={{
            background: `rgba(9, 26, 47, ${backgroundTransparacy})`,
            padding: `${padding}px 0px`,
            boxShadow: `0px 0px 20px 6px rgba(5, 22, 42, ${boxShadow})`,}}>

            <div className="container">
                <a className="navbar-brand text-white d-flex align-items-center gap-1" href="#hero" style={{fontSize: "25px"}}>
                    <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    <span>Ahmad Muhajir</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
