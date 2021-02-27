import React from "react";
import {useSelector } from 'react-redux'
import {RootState} from "../reducers/index";

//style
import "../scss/aboutSection.scss";
//assets
import {Amazon, Ansible, CentOs, Docker, GIT, Html, Hyper, Indy, Jenkins, Kafka, Kubernetes, NodeJS, Postman, ReactLogo, Redis, SQL} from "../img/index";
import {actionSVG} from "../svg/actionArrow";

const logos = [Amazon, Ansible, CentOs, Docker, GIT, Html, Hyper, Indy, Jenkins, Kafka, Kubernetes, NodeJS, Postman, ReactLogo, Redis, SQL];

const AboutSection: React.FC = () => {

    const aboutData = useSelector((state: RootState)=> state.data.aboutUsSection);
    const loading = useSelector((state: RootState)=> state.ui.loading);
    let i = 0; //resim array'ımızı maplerken bu değeri key ve alt için kullanıyorum.
    return(
        <section id="about-section" className="sections">
            {!loading ?
            aboutData &&
                <div className="container about-container">
                    <div className="about-content">
                        <div className="about-header-wrapper">
                            <h1>{aboutData.aboutUsText.h1}</h1>
                            <div></div>
                        </div>
                        <div className="about-text-wrapper">
                            <p>{aboutData.aboutUsText.p1}</p>
                            <p>{aboutData.aboutUsText.p2}</p>
                        </div>
                    </div>
                    <div className="about-images-wrapper">
                        {                          
                            logos.map((logo) => {
                                return(
                                    <div key={i++}>
                                        <img src={logo} alt={`Logo${i++}`}/>
                                    </div>                    
                                )
                            })
                        }
                    </div>
                    <div className="action-wrapper">
                        <span>{aboutData.aboutUsText.btnText}</span>
                        <a href="#position-section">{actionSVG}</a>
                    </div>
                </div>
            :
            <div className="container">Loading...</div>
            }
        </section>
    )

}

export default AboutSection;