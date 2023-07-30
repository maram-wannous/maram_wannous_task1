import { useState } from "react";
import Header from "../Components/Header/Header";
import ServicesContainer from "../Components/ServicesContainer/ServicesContainer";
import './HomePageStyle.css';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.jpg';
import service6 from '../assets/service6.jpg';
import GetStarted from "../Components/GetStarted/GetStarted";
import Footer from "../Components/Footer/Footer";


export default function HomePage() {

    const [desc] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis doloribus eligendi assumenda veniam deserunt, mollitia laborum dicta dolores, pariatur vel, iste explicabo quam magni. Officiis mollitia dolorum assumenda delectus!")

    return (
        <div>
            <Header />
            <section className="services">
                <div className="main-title">
                    <h1>Our Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, rerum</p>
                </div>
                <div className="container">
                <ServicesContainer serviceimg ={service1}
                                    title="your title here"
                                    desc= {desc}
                />
                <ServicesContainer serviceimg ={service2} 
                                    title="your title here"
                                    desc= {desc}
                                    rowrevers= {true}
                />
                <ServicesContainer serviceimg ={service3}
                                    title="your title here"
                                    desc= {desc}
                />
                <GetStarted firstp="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            secondp="Start Your Free Trail"
                            button="Get Started"
                />
                </div>
            </section>
            <Footer serviceimg1={service1}
                    serviceimg2={service2}
                    serviceimg3={service3}
                    serviceimg4={service4}
                    serviceimg5={service5}
                    serviceimg6={service6}
            />
        </div>
    );
}
