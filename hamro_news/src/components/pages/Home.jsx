import React, { Suspense } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useFetchNews } from '../../hooks/useFetchNews';
import TwoColumnLayout from '../TwoColumnLayout';


const Home = () => {
  const { data, loading, error } = useFetchNews();

  if (loading) return <p className="text-center py-10">Loading news...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  const articles = data?.articles || [];

  return (
    <div>
      <Header />

<TwoColumnLayout/>
      <Footer />
    </div>
  );
};

export default Home;
