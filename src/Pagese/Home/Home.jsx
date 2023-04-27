import React from 'react';
import NewsCard from './categories/NewsCard';
import { useLoaderData } from 'react-router-dom';

function Home() {
  const allNews = useLoaderData()
  console.log(allNews);

  return (
    <>
    <h3 className='my-3'>Welcome to Dragon News</h3>
    { allNews.map(news => <NewsCard key={news._id} news={news} />)}
    </>
  )
}

export default Home