"use client"
import React, { useState, useEffect } from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';import axios from "axios";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {  toast } from 'react-toastify';

const Quote = ({url}) => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);

function copyToClipboard() {
  var textToCopy = document.querySelector('.quote').textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(function() {
      toast.success('Copied', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
        })
      console.log('Text copied to clipboard');
 
    })
    
}

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url || "https://hindi-quotes.vercel.app/random");
      setQuotes(prevQuotes => [...prevQuotes, data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = () => {
    fetchData();
  };
if(isLoading) return(<Loading />)
  return (
    <InfiniteScroll
      dataLength={quotes.length}
      next={fetchMoreData}
      hasMore={!isLoading} // Disable loading more when already loading
      loader={<Loading />}
      endMessage={<p>No more quotes to load.</p>}
      scrollThreshold={"200px"}
    >
      {quotes.map((quote, i) => (
        <div key={i} className="card">
          <p className='type'>{quote.type}</p>
          <p className="quote">{quote.quote}</p>
          <span onClick={copyToClipboard} className="icon">
  <ContentCopyRoundedIcon/>

  </span>
        </div>
      ))}
    </InfiniteScroll>

  )
};

export default Quote;
