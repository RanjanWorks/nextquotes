"use client"

import React, { useState, useEffect } from "react";
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";
import Loading from "./Loading";


const Quote = ({url}) => {
  console.log(url)
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const getData = async () => {
    const fetchedQuotes = [];
    for (let i = 0; i <= 10; i++) {
      const { data } = await axios.get(url||"https://hindi-quotes.vercel.app/random");
      fetchedQuotes.push(data);
    }
    setQuotes(fetchedQuotes);
    setLoading(false);
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  if (isLoading) return <Loading />
  console.log(url)
  return (
    <>
    {quotes.map((quote,i)=>{
 return <div key={i} className="card">
 <p className='type'>{quote.type}</p>
 <p className="quote">{quote.quote}</p>
  </div>

})}
    </>

  )
}

export default Quote
