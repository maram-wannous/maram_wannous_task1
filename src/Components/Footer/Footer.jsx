import "./Footer.css";
import {AiFillFacebook} from 'react-icons/ai';
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

export default function Footer({serviceimg1, serviceimg2, serviceimg3, serviceimg4, serviceimg5, serviceimg6}){
    return(
        <section className="footer">
        <div className="container">
            <div className="box">
              <h3>MARAM</h3>
              <ul className="social">
                <li>
                  <a href="#" className="facebook">
                    <AiFillFacebook size={50} />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <AiFillTwitterSquare size={50} />
                  </a>
                </li>
                <li>
                  <a href="#" className="youtube">
                    <AiFillYoutube size={50} />
                  </a>
                </li>
                <li>
                  <a href="#" className="github">
                    <AiFillGithub size={50} />
                  </a>
                </li>
              </ul>
              <p className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
              </p>
            </div>
            <div className="box">
              <ul className="links">
                <li><AiOutlineDoubleRight className="links-icon" /><a href="#">Important Link 1</a></li>
                <li><AiOutlineDoubleRight className="links-icon" /><a href="#">Important Link 2</a></li>
                <li><AiOutlineDoubleRight className="links-icon" /><a href="#">Important Link 3</a></li>
                <li><AiOutlineDoubleRight className="links-icon" /><a href="#">Important Link 4</a></li>
                <li><AiOutlineDoubleRight className="links-icon" /><a href="#">Important Link 5</a></li>
              </ul>
            </div>
            <div className="box">
              <div className="line">
                <BiLocationPlus className="i" />
                <div className="info">Damascuse, syria, Inside The Sphinx, Room Number 220</div>
              </div>
              <div className="line">
                <BiTimeFive className="i" />
                <div className="info">Business Hours: From 10:00 To 18:00</div>
              </div>
              <div className="line">
                <FaPhoneVolume className="i" />
                <div className="info">
                  <span>+20123456789</span>
                  <span>+20198765432</span>
                </div>
              </div>
            </div>
            <div className="box footer-gallery">
              <img src={serviceimg1} alt="img1" />
              <img src={serviceimg2} alt="" />
              <img src={serviceimg3} alt="" />
              <img src={serviceimg4} alt="" />
              <img src={serviceimg5} alt="" />
              <img src={serviceimg6} alt="" />
            </div>
        </div>
        <p className="copyright">Made With &lt;3 By <span>Maram</span></p>
    </section>


    );
}