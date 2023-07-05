export default function Hero() {
    return (
        <div className="hero" id="hero">
            <div className="yea">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between" style={{minHeight: "100vh"}}>
                        <div data-aos="fade-right">
                            <h1 className='title'>Ahmad Muhajir Syamlan</h1>
                            <h3 className="font-primary">Backend Developer</h3>
                            <div className="d-flex mt-3 gap-2">
                                <a href="https://www.linkedin.com/in/ahmad-muhajir-syamlan/" rel="noreferrer" className="cool-btn-dark sosmed-white border p-0" target="_blank" style={{width: '50px', height: '50px'}}>
                                    <i className="fa-brands fa-linkedin" style={{fontSize: '30px'}}></i>
                                </a>
                                <a href="https://www.instagram.com/amuhajirs/" rel="noreferrer" className="cool-btn-dark sosmed-white border p-0" target="_blank" style={{width: '50px', height: '50px'}}>
                                    <i className="fa-brands fa-instagram" style={{fontSize: '30px'}}></i>
                                </a>
                                <a href="https://github.com/JeremyJFN71" rel="noreferrer" className="cool-btn-dark sosmed-white border p-0" target="_blank" style={{width: '50px', height: '50px'}}>
                                    <i className="fa-brands fa-github" style={{fontSize: '30px'}}></i>
                                </a>
                                {/* <a href="#about" className="btn-theme-primary fw-bold fs-5 px-4"><i className="fa-solid fa-arrow-up-right-from-square"></i> Explore</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}