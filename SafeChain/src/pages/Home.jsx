import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useFetchNews } from '../hooks/useFetchNews';
import Section1 from '../components/sections/Section1';
import Section2 from '../components/sections/Section2';
import Section3 from '../components/sections/Section3';
import Section4 from '../components/sections/Section4';
import Section5 from '../components/sections/Section5';
import Section6 from '../components/sections/Section6';




const Home = () => {
  const { data, loading, error } = useFetchNews();

  if (loading) return <div className="text-center py-10"><Loading/></div>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  const articles = data?.articles || [];

  return (
    <>
      <Header />
        <Section1 articles={articles} />
        <Section2 articles={data.articles}/>
        <Section3 articles={data.articles}/>
        <Section4 articles={data.articles} />
        <Section5 articles={data.articles} />
        <Section6 articles={data.articles} />
      <Footer />
    </>
  );
};

export default Home;
