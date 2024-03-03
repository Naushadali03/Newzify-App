import React from 'react'
import './styles.css';
function NewsData(news) {
  return (
    <div className='box'>
        <img src={news.news.urlToImage} alt={news.news.title} key={news.id}/>
        <p className='desc'>{news.news.description}</p>
        <button className='load' onClick={()=>window.open(news.news.url)}>read More.</button>
    </div>
  )
}

export default NewsData