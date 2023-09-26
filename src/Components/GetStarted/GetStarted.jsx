import './GetStarted.css'

export default function GetStarted({firstp, secondp, button}) {
    return(
        <div className='get-start'>
            <div className="container">
                <div className='text' data-aos="fade-right">
                    <p>{firstp}</p>
                    <span>{secondp}</span>
                </div>
                <button className='btn' data-aos="fade-left">{button}</button>
            </div>
        </div>
    );
}