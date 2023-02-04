import React from "react";
import About from '../../components/About';
import Featured from "../../components/Featured_Projects";

const Home = () => {
    return (
        <div className="about-container">
            <About />
            <Featured />
        </div>
    )
}

export default Home;