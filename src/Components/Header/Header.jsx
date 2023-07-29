import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import hero from '../../assets/hero.jpg';
import { useState } from "react";


export default function Header() {

    const [navmenu] = useState(["Home", "Services", "About", "contact"]);
    const [herop1] = useState("The Modern Landing Page For");
    const [herop2] = useState("React Developer");
    const [herop3] = useState("The easiest way to build react landing page in seconds");

    return (
        <div>
            <Navbar logo="MARAM"
                    navmenu={navmenu}
                    button="Sign in"
            />
            <Hero heroimg={hero}
                    herop1={herop1}
                    herop2={herop2}
                    herop3={herop3}
                    button="Download Your Free Version"
            />
        </div>
    );
}