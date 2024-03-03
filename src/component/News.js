import React, { useEffect, useRef, useState } from 'react'
import NewsData from './NewsData';
import './styles.css';

function News() {
    const[news,setNews]=useState([]);
    const [query,setquery]=useState('bitcoin');
    const refVar=useRef(null);
    const pdata=useRef(null);
    function clickMe(event){
        event.preventDefault();
        const val=refVar.current.value;
        if(val==='undefined') setquery('bitcoin');
        else setquery(val);
    }
    function sendData(event){
        event.preventDefault();
        const dt = event.target.value;
        setquery(dt);

    }
    useEffect(()=>{
        const apiKey=`6f8570c5d7cc474ea55d0f0cc60a15e1`;
        const url=`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
        fun(url);
    },[query])
    async function fun(url){
        const data = await fetch(url);
        const jsonData = await data.json();
        // console.log(jsonData);
        setNews(jsonData.articles);
    }
  return (
    <div >
        <div className='inp'>
        <input className='in' type="text" ref={refVar} placeholder='Search for daily update...'/>
        <input className='btn' type="button" value="submit" onClick={clickMe} />
        </div>
        <div className="main">
            <div><input className='dt' type="button" onClick={sendData} value="India" /></div>
            <div><input className='dt' type="button" onClick={sendData} value="Technology" /></div>
            <div><input className='dt' type="button" onClick={sendData} value="Science" /></div>
            <div><input className='dt' type="button" onClick={sendData} value="cricket" /></div>
            <div><input className='dt' type="button" onClick={sendData} value="War" /></div>
        </div>
        <div className='cont'>
        {
            news.map((news)=>{
                return (
                    <NewsData key={news.url} news={news} />
                );
            })
        }
        </div>
    </div>
  )
}

export default News