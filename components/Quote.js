"use client"
import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import axios from "axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from "react-toastify";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Quote = ({ url }) => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (index) => {
    const textToCopy = quotes[index].quote;
    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(index);
    // toast.success("Quote copied to clipboard!");
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = () => {
    fetchData();
  };

  if (isLoading) return <Loading />;
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
          <p className="type">{quote.type}</p>
          <p className="quote">{quote.quote}</p>
          {copiedIndex === i ? (
            <div className="icon">
            <CheckCircleOutlineIcon  />
            </div>
          ) : (
            <div className="icon">
            <ContentCopyRoundedIcon
              onClick={() => copyToClipboard(i)}
            />
            </div>
          )}
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default Quote;
