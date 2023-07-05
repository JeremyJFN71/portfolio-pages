import photo from '../../assets/profile-photo.jpg';
import { ReactComponent as Python } from '../../assets/python.svg';

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <span className="text-center d-block fw-bold font-primary" data-aos="fade-up">ABOUT</span>
                <h1 className="text-center mb-5 fw-bold font-secondary" data-aos="fade-up">Who am I</h1>
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5" data-aos="fade-right">
                        <img src={photo} alt="" className="photo-profile d-block img-fluid rounded-circle" />
                    </div>
                    <div className="col-lg-7 col-md-12" data-aos="fade-left">
                        <p className='text-center fs-4 font-secondary'>
                            I'm Ahmad Muhajir Syamlan, someone who interested in programming, especially backend developers. I have learn a few programming language,
                            like <i className="fa-brands fa-js" style={{color: 'yellow'}}></i> Javascript, <Python className="python" /> Python, <i className="fa-brands fa-php" style={{color: '#7377ad'}}></i> PHP,
                            and currently I'm learning <i className="fa-brands fa-swift" style={{color: '#f24c31', borderRadius: '10px'}}></i> Swift.
                            So if you need any help related to that, you can always <a className='fw-bold font-primary underline-hover' href="#contact">contact me</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
