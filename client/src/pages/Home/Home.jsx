import React from 'react';
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import './Home.scss';

function Home() {
  return (
    <div>
      <div className="home">
        <Slider />
        <FeaturedProducts type="featured" />
        <Categories/>
        <FeaturedProducts type="trending" />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
