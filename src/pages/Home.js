import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChoose';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <WhyChooseUs/>
            <Services />
            {/* <Portfolio /> */}
            
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

