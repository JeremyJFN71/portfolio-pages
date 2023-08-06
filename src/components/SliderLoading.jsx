import Slider from "react-slick";

export default function SliderLoading() {
    const count = [1, 2, 3, 4, 5, 6]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            },
        ]
    }

    return (
        <Slider {...settings}>
            {count.map((v)=>(
                <div key={v} className="p-3 text-center" data-aos="fade-up">
                    <div style={{aspectRatio: '2/1'}}>
                        <div className="project-image" style={{background: 'rgb(160,160,160)', cursor: 'wait'}}></div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}
