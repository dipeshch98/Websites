import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useFetchNews } from '../../hooks/useFetchNews';
import Section1 from '../sections/Section1';
import HeroSection from '../sections/HeroSection';
import FeatureNews from '../sections/FeatureNews';
import TechnologySection from '../sections/TechnologySection';
import BigNewsSection from '../sections/BigNewsSection';
import EntertainmentSlider from '../sections/EntertainmentSlider'
import SportsSection from '../sections/SportsSection';
 import InternationalSection from '../sections/InternationalSection';
import Loading from '../Loading';


const Home = () => {
  const { data, loading, error } = useFetchNews();

  if (loading) return <p className="text-center py-10"><Loading/></p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  const articles = data?.articles || [];

  return (
    <>
      <Header />
      <main className="pt-16">
        <Section1 articles={data?.articles || []} />
        <HeroSection articles={data?.articles || []}/>
        <FeatureNews articles={data?.articles || []} />
        <TechnologySection articles={data?.articles || []} />
        <BigNewsSection articles={data?.articles || []} />
        <EntertainmentSlider  articles={data.articles}/>
        <SportsSection articles={data.articles}/>
        <InternationalSection articles={data.articles} categories={data.categories} />
      </main>

      <Footer />
    </>
  );
};

export default Home;
