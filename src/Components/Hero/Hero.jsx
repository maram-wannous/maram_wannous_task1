import './HeroStyle.css';

export default function Hero({heroimg, herop1, herop2, herop3, button}) {
    return (
        <div className="hero">
            <img src={heroimg} alt="hero" />
            <div className="info">
                <h1>{herop1}</h1>
                <h2>{herop2}</h2>
                <span>{herop3}</span>
                <button className='btn'>{button}</button>
            </div>
        </div>
    );
}