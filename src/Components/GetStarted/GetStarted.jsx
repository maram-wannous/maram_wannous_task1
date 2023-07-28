import './GetStarted.css'

export default function GetStarted({firstp, secondp, button}) {
    return(
        <div className='get-start'>
            <div className="container">
                <div className='text'>
                    <p>{firstp}</p>
                    <span>{secondp}</span>
                </div>
                <button className='btn'>{button}</button>
            </div>
        </div>
    );
}