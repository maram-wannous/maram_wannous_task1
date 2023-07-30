import './ServicesContainerStyle.css';

export default function ServicesContainer ({title, desc, serviceimg, rowrevers}) {
    return (
        <div className= {(rowrevers) ? "service reverse" : "service"}>
            <div className="info">
                <h3>{title}</h3>
                <p className="secondaryText">{desc}</p>
            </div>
            <div className="box">
                <div className="image">
                    <img src={serviceimg} alt="srviceimg" />
                </div>
            </div>           
        </div>
    );
}
