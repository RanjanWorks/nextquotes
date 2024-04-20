"use client"
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import MediaCard from "./Card";

const Quote = ({ url }) => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        url || "https://hindi-quotes.vercel.app/random"
      );
      setQuotes((prevQuotes) => [...prevQuotes, data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    if (fetchCount < 10) {
      fetchData();
      setFetchCount(prevCount => prevCount + 1);
    }
  }, [fetchCount]);
  const fetchMoreData = () => {
    fetchData();
  };

  if (isLoading) return <Loading times={10}/>;
  return (
    <InfiniteScroll
      dataLength={quotes.length}
      next={fetchMoreData}
      hasMore={!isLoading} // Disable loading more when already loading
      loader={<Loading times={1} />}
      endMessage={<p>No more quotes to load.</p>}
      scrollThreshold={"200px"}
    >

      <MediaCard data={quotes}/>
    
    </InfiniteScroll>
  );
};

export default Quote;
