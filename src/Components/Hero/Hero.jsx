import './HeroStyle.css';

export default function Hero({heroimg, herop1, herop2, herop3, button}) {
    return (
        <div className="hero">
            <img src={heroimg} alt="hero" />
            <div className="info">
                <h1 data-aos="fade-up">{herop1}</h1>
                <h2 data-aos="fade-up" data-aos-delay="100">{herop2}</h2>
                <span data-aos="fade-up" data-aos-delay="200">{herop3}</span>
                <button className='btn' data-aos="fade-up" data-aos-delay="300">{button}</button>
            </div>
        </div>
    );
}