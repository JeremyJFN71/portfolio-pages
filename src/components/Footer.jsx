export default function Footer() {
    return (
        <footer className="py-5 text-white">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto mb-2" data-aos="fade-right" data-aos-offset="30">
                        <span className="font-secondary">Created and Developed by <a href="https://www.linkedin.com/in/ahmad-muhajir-syamlan/" className="fw-bold font-primary underline-hover" target="_blank" rel="noreferrer">Ahmad Muhajir</a></span>
                    </div>

                    <div className="col-auto text-end gap-2 d-flex">
                        <a href="https://www.linkedin.com/in/ahmad-muhajir-syamlan/" rel="noreferrer" className="cool-btn-dark sosmed border p-0" target="_blank" data-aos="fade-left" data-aos-offset="30" style={{width: '40px', height: '40px'}}>
                            <i className="fa-brands fa-linkedin" style={{fontSize: '25px'}}></i>
                        </a>
                        <a href="https://www.instagram.com/amuhajirs/" rel="noreferrer" className="cool-btn-dark sosmed border p-0" target="_blank" data-aos="fade-left" data-aos-offset="30" style={{width: '40px', height: '40px'}} data-aos-delay="150">
                            <i className="fa-brands fa-instagram" style={{fontSize: '25px'}}></i>
                        </a>
                        <a href="https://github.com/JeremyJFN71" rel="noreferrer" className="cool-btn-dark sosmed border p-0" target="_blank" data-aos="fade-left" data-aos-offset="30" style={{width: '40px', height: '40px'}} data-aos-delay="300">
                            <i className="fa-brands fa-github" style={{fontSize: '25px'}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
