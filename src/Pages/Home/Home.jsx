import React from 'react';
import Bannar from '../../components/Bannar';
import AboutClass from '../../components/About Class/AboutClass';
import VideoSection from '../../components/VideoSection/VideoSection';
import Gallary from '../../components/Gallary/Gallary';

import SortedClass from '../../components/SortedClass/SortedClass';
import PopularTeachers from '../../components/PopularTeachers/PopularTeachers';

const Home = () => {
    return (
        <div>
            <Bannar />
            <AboutClass />
            <VideoSection />
            <Gallary/>
          <PopularTeachers />
            <SortedClass />
        </div>
    );
};

export default Home;