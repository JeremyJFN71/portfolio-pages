import Slider from "react-slick";

export default function SliderLoading() {
    const count = [1, 2, 3, 4, 5, 6]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {count.map((v)=>(
                <div key={v} className="p-2 text-center" data-aos="fade-up">
                    <div className="card odd border-0" style={{height: '350px'}}>
                        <div className="project-image" style={{background: 'rgb(160,160,160)', cursor: 'default'}}></div>
                        <h5 className="my-3 fw-bold placeholder-glow">
                            <span className="placeholder col-4 me-1"></span>
                            <span className="placeholder col-3"></span>
                        </h5>
                        <p className="mb-3 placeholder-glow">
                            <span className="placeholder col-1 me-1"></span>
                            <span className="placeholder col-2 me-1"></span>
                            <span className="placeholder col-4 me-1"></span>
                            <span className="placeholder col-1 me-1"></span>
                            <span className="placeholder col-3"></span>
                        </p>
                        <button className="btn-theme-primary mt-auto mx-2 mb-2 disabled" target="_blank" rel="noreferrer" disabled>&nbsp;</button>
                    </div>
                </div>
            ))}
        </Slider>
    )
}
