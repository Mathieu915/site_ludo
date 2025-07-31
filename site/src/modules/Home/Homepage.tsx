import React, { FC } from "react"
import Header from "../../components/Header"
import Accroche from "../../components/Accroche";
import Services from "../../components/Services";
import PresentationPerso from "../../components/PresentationPerso";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const Homepage: FC = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Accroche/>
            <PresentationPerso/>
            <Services/>
            <Contact/>
            <Footer/>
        </>
        
    )
}

export default Homepage