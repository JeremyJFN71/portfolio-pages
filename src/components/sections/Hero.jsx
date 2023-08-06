import photo from '../../assets/photo.png'

export default function Hero() {
    return (
        <div className="hero" id="hero">
            <div className="container">
                <div className="row" style={{minHeight: "100vh"}}>
                    <div className='col-lg-7 d-flex align-items-center justify-content-start' data-aos="fade-right">
                        <div>
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
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 d-flex align-items-center justify-content-end" data-aos="fade-left">
                        <img src={photo} className='photo' alt="" style={{height: '80%'}} />
                    </div>
                </div>
            </div>

            <div className='yea'></div>
            <div className="yea-2"></div>
        </div>
    )
}