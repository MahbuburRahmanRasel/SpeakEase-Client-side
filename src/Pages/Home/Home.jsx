import React from 'react';
import Bannar from '../../components/Bannar';
import AboutClass from '../../components/About Class/AboutClass';
import VideoSection from '../../components/VideoSection/VideoSection';
import Gallary from '../../components/Gallary/Gallary';
import OurTeachers from '../../components/OurTeachers/OurTeachers';
import PopularClasses from '../../components/PouplarClasses/PopularClasses';
import SortedClass from '../../components/SortedClass/SortedClass';

const Home = () => {
    return (
        <div>
            <Bannar />
            <AboutClass />
            <VideoSection />
            <Gallary/>
            {/* <OurTeachers />
            <PopularClasses /> */}
            <SortedClass />
        </div>
    );
};

export default Home;