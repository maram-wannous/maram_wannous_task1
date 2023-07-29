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

    const servicList =[
            {
                titleOfServic : "your title here",
                desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis doloribus eligendi assumenda veniam deserunt, mollitia laborum dicta dolores, pariatur vel, iste explicabo quam magni. Officiis mollitia dolorum assumenda delectus!",
                img : service1,
                rowrevers : false,
            },
            {
                titleOfServic : "your title here",
                desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis doloribus eligendi assumenda veniam deserunt, mollitia laborum dicta dolores, pariatur vel, iste explicabo quam magni. Officiis mollitia dolorum assumenda delectus!",
                img : service2,
                rowrevers : true,
            },
            {
                titleOfServic : "your title here",
                desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis doloribus eligendi assumenda veniam deserunt, mollitia laborum dicta dolores, pariatur vel, iste explicabo quam magni. Officiis mollitia dolorum assumenda delectus!",
                img : service3,
                rowrevers : false,
            }
        ];
    
    return (
        <div>
            <Header />
            <section className="services">
                <div className="main-title">
                    <h1>Our Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, rerum</p>
                </div>
                <div className="container">
                {servicList.map((item) => 
                        <ServicesContainer 
                            title={item.titleOfServic}
                            desc= {item.desc}
                            serviceimg ={item.img}
                            rowrevers= {item.rowrevers}
                        />
                    )}
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
