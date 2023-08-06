import { useEffect, useState } from 'react';

export default function Navbar() {
    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(20);
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

        let paddingVar = 20 - backgroundTransparacyVar * 20;
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
                <a id='logo' className="navbar-brand text-white" href="#hero">
                    A<span className='font-primary'>M</span>S
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
