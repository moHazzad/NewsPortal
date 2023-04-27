import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from './NewsCard'

function Category() {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    // console.log(categoryNews);

  return (
    <div className='mt-4' >
    {
        categoryNews.map(news => <NewsCard key={categoryNews._id} news={news} /> )
    
    }</div>
  )
}

export default Category