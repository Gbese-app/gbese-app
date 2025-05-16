import React from "react";
import LandingPage from "./LandingPage";
import WorksPage from "./WorksPage";
import WhyChoose from "./WhyChoose"
import GbeAdventure from "./GbeAdventure"
import GbeQuestions from "./GbeQuestions"
import Footer from "./Footer"

const OutPut =() =>{
    return(
        <div>
            <LandingPage />
            <WorksPage />
            <WhyChoose />
            <GbeAdventure />
            <GbeQuestions />
            <Footer />
        </div>
    )
}
export default OutPut;