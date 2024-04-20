"use client";
import React, { useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Tooltip from '@mui/material/Tooltip';

export default function MediaCard({ data }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const copyToClipboard = (index) => {
    const textToCopy = data[index].quote;
    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(index);
  
  };
  return data.map((quote, i) => {
    return (
      <div key={i} className="card">
        <p className="type">{quote.type}</p>
        <p className="quote">{quote.quote}</p>
        <hr />
  
        {copiedIndex === i ? (
            <div className="icon">
        <Tooltip title="Copy">

            <CheckCircleOutlineIcon />
            </Tooltip>

          </div>
        ) : (
            <div className="icon">
        <Tooltip title="Copy quote">

            <ContentCopyRoundedIcon onClick={() => copyToClipboard(i)} />
            </Tooltip>

          </div>
        )}
      </div>
    );
  });
}
